// Eliminado el SDK de Vercel AI, usaremos fetch
import { Bot, MessageSquare, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Markdown from 'react-markdown';

const model = "gemma3"; // Cambia esto por el nombre exacto del modelo instalado en Ollama si es necesario
const MAX_HISTORY = 12; // últimos turnos que enviamos al modelo
const SUMMARY_TRIGGER = 24; // cuando excede, generamos resumen

export default function ChatWidget() {
	const [isOpen, setIsOpen] = useState(false);
	type Message = {
		idx: number;
		type: "bot" | "user" | "function";
		text: string;
		name?: string; // Optional for function messages
	};

	const [messages, setMessages] = useState<Message[]>([
		{
			idx: 1,
			type: "bot",
			text: "¡Hola! Soy el asistente virtual de ISE. ¿En qué puedo ayudarte hoy?",
		},
	]);
	const [input, setInput] = useState("");
	const [summary, setSummary] = useState<string>("");

	// Resume la conversación cuando es larga
	async function summarizeConversation(history: Message[]): Promise<string> {
		try {
			// Tomamos hasta los últimos 40 mensajes para resumir
			const slice = history.slice(-40);
			const res = await fetch("http://localhost:11434/v1/chat/completions", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					model,
					messages: [
						{
							role: "system",
							content:
								"Eres un asistente que resume conversaciones. Genera un resumen breve en español con: objetivos del usuario, preferencias explícitas, restricciones, decisiones tomadas y próximos pasos. Sé concreto (4–7 viñetas). No inventes nada.",
						},
						...slice.map((m) => ({
							role: m.type === "user" ? "user" : "assistant",
							content: m.text,
						})),
					],
					max_tokens: 256,
					temperature: 0.2,
					top_p: 0.9,
				}),
			});
			if (!res.ok) return "";
			const data = await res.json();
			const text = data.choices?.[0]?.message?.content?.trim() || "";
			return text;
		} catch {
			return "";
		}
	}

	const streamBotMessage = (
		fullText: string,
		newMessages: Message[],
		type: "bot" | "function" = "bot",
		name?: string,
	) => {
		let i = 0;
		const idx = Date.now();
		setMessages([...newMessages, { idx, type, text: "", name }]);
		const interval = setInterval(() => {
			i++;
			setMessages((prev) => {
				const updated = [...prev];
				const lastMsg = updated[updated.length - 1];
				if (lastMsg && lastMsg.idx === idx) {
					lastMsg.text = fullText.slice(0, i);
				}
				return updated;
			});
			if (i >= fullText.length) clearInterval(interval);
		}, 18); // velocidad de escritura
	};

	const handleSend = async () => {
		if (!input.trim()) return;
		// Abrir el chat si está cerrado para visualizar el stream
		if (!isOpen) setIsOpen(true);
		const newUserMsg: Message = { idx: Date.now(), type: "user", text: input };
		const newMessages: Message[] = [...messages, newUserMsg];
		setMessages(newMessages);
		setInput("");

		try {
			// Si el historial es largo, crear/resfrescar resumen
			if (newMessages.length > SUMMARY_TRIGGER) {
				const s = await summarizeConversation(newMessages);
				if (s) setSummary(s);
			}

			// Construir mensajes a enviar: prompt del sistema + resumen (si existe) + últimos N mensajes
			const historyToSend = newMessages.slice(-MAX_HISTORY);
			const systemMessage = {
				role: "system",
				content: [
					"Eres el asistente de ISE (empresa dominicana) especializado en IA generativa para pymes. Tu rol es responder DIRECTAMENTE las preguntas del usuario sobre ISE.",
					"Política de respuesta:",
					"- Responde corto y preciso (2–5 frases). Si el usuario pide listas/pasos, usa viñetas (máx 5).",
					"- No saludes repetidamente ni preguntes '¿en qué puedo ayudar?' si ya hay contexto. No repitas información innecesaria.",
					"- Si el usuario pide precios/servicios/contacto, RESPONDE con la información disponible inmediatamente. Solo pide aclaraciones si es estrictamente necesario.",
					"- Si falta un detalle específico (por ejemplo, servicio exacto), ofrece las opciones disponibles y el rango de precios.",
					"Conocimiento de ISE (usar como base, no inventar):",
					"- Servicios: consultoría en IA, implementación de asistentes (ChatGPT/Copilot), automatizaciones, talleres (ChatGPT, Canva Magic, Microsoft Copilot).",
					"- Precios: planes desde RD$ 2,500 (servicios básicos). Talleres y consultorías varían según alcance; si se requiere precisión, sugiere visitar 'Servicios' o agendar consulta.",
					"- Contacto: +1 (809) 555-0123 | contacto@ise-ai.com",
					"- CTA: sugerir agendar consulta o visitar 'Servicios' solo cuando aporte valor.",
					"Estilo: español dominicano profesional, claro y directo. Nada de marketing agresivo, relleno o muletillas.",
				].join("\n"),
			};
			const summaryMessage = summary
				? [{ role: "system", content: `Resumen de la conversación hasta ahora:\n${summary}` }]
				: [];
			const apiMessages = [
				systemMessage,
				...summaryMessage,
				...historyToSend.map((m) => ({
					role: m.type === "user" ? "user" : "assistant",
					content: m.text,
				})),
			];

			const res = await fetch("http://localhost:11434/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
					model,
					messages: apiMessages,
					max_tokens: 640,
					temperature: 0.3,
					top_p: 0.9,
					presence_penalty: 0.0,
					frequency_penalty: 0.3,
          stream: true,
        }),
      });
			if (!res.ok || !res.body)
				throw new Error("Error en la petición a Ollama");

			const reader = res.body.getReader();
			let streamedText = "";
			const botIdx = Date.now();
			setMessages((prev) => [...prev, { idx: botIdx, type: "bot", text: "" }]);

			const decoder = new TextDecoder();
			let done = false;
			while (!done) {
				const { value, done: doneReading } = await reader.read();
				done = doneReading;
				if (value) {
					// Ollama stream: líneas JSON, a veces con prefijo 'data:'
					const chunkStr = decoder.decode(value);
					for (const line of chunkStr.split("\n")) {
						if (line.trim()) {
							const cleaned = line.startsWith("data:") ? line.slice(5).trim() : line.trim();
							try {
								const json = JSON.parse(cleaned);
								const delta = json.choices?.[0]?.delta?.content;
								if (delta) {
									streamedText += delta;
									setMessages((prev) => {
										// Busca el mensaje del bot por idx y actualiza solo ese
										return prev.map((msg) =>
											msg.idx === botIdx
												? { ...msg, text: streamedText }
												: msg
										);
									});
								}
							} catch {
								// Ignorar líneas que no sean JSON
							}
						}
					}
				}
			}
		} catch (error) {
			streamBotMessage(
				"Hubo un error procesando tu mensaje. Por favor, intenta de nuevo.",
				newMessages,
				"bot",
			);
			console.error("Error fetching Ollama response:", error);
		}
	};

	// Referencia para el scroll automático
	const chatRef = useRef<HTMLDivElement>(null);

	// Scroll automático al recibir mensajes y cuando el chat está abierto
	useEffect(() => {
		if (isOpen && chatRef.current) {
			chatRef.current.scrollTop = chatRef.current.scrollHeight;
		}
	}, [isOpen]);

	return (
		<div className="fixed z-50 flex flex-col items-end bottom-6 right-6">
			{isOpen && (
				<div className="mb-4 w-80 bg-[#161b22] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
					<div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
						<div className="flex items-center gap-2">
							<div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
								<Bot className="w-5 h-5 text-black" />
							</div>
							<span className="font-bold text-white">Asistente ISE</span>
						</div>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="text-gray-400 hover:text-white"
						>
							<X className="w-4 h-4" />
						</button>
					</div>
					<div ref={chatRef} className="h-64 p-4 space-y-4 overflow-y-auto">
						{messages.map((msg, i) => {
							const isLast = i === messages.length - 1;
							const isBotTyping =
								msg.type === "bot" &&
								isLast &&
								msg.text &&
								!msg.text.endsWith("\n");
							return (
								<div
									key={msg.idx}
									className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
								>
									<div
										className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.type === "user" ? "bg-green-600 text-white rounded-br-none" : "bg-gray-700 text-gray-200 rounded-bl-none"}`}
										style={{ position: "relative" }}
									>
                    <Markdown>{msg.text}</Markdown>
										{isBotTyping && (
											<span
												className="inline-block w-2 h-4 ml-1 align-bottom bg-gray-400 rounded animate-pulse"
												style={{ verticalAlign: "bottom" }}
											></span>
										)}
									</div>
								</div>
							);
						})}
					</div>
					<div className="flex gap-2 p-3 bg-gray-800 border-t border-gray-700">
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && handleSend()}
							placeholder="Escribe tu mensaje..."
							className="flex-1 bg-[#0B0E14] text-white text-sm rounded-md px-3 py-2 border border-gray-600 focus:outline-none focus:border-green-500"
						/>
						<button
							type="button"
							onClick={handleSend}
							className="p-2 text-black bg-green-500 rounded-md hover:bg-green-600"
						>
							<Send className="w-4 h-4" />
						</button>
					</div>
				</div>
			)}

			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="bg-green-500 cursor-pointer text-[#0B0E14] p-4 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all hover:scale-110"
			>
				{isOpen ? (
					<X className="w-6 h-6" />
				) : (
					<MessageSquare className="w-6 h-6" />
				)}
			</button>
		</div>
	);
}
