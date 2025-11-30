import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
	{
    id: 1,
		question: "¿A quiénes están dirigidos sus servicios?",
		answer:
			"Nuestros servicios están diseñados para emprendedores, micro y pequeñas empresas que desean modernizarse, así como freelancers que buscan aumentar su productividad sin grandes inversiones tecnológicas.",
	},
	{
    id: 2,
		question: "¿Qué herramientas de IA enseñan?",
		answer:
			"Nos especializamos en herramientas accesibles y potentes como ChatGPT para textos, Canva Magic para diseño y Microsoft Copilot para productividad de oficina.",
	},
	{
    id: 3,
		question: "¿Ofrecen servicios fuera de República Dominicana?",
		answer:
			"Sí, gracias a nuestra modalidad de talleres y asesorías virtuales, podemos atender clientes de cualquier ubicación, aunque nuestro enfoque principal es el mercado local.",
	},
	{
    id: 4,
		question: "¿Cómo puedo agendar una cita?",
		answer:
			"Puedes contactarnos a través del formulario en esta página o escribirnos directamente a nuestro correo para coordinar una primera sesión de diagnóstico gratuita.",
	},
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

	return (
		<section id="faq" className="relative py-20">
			<div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-white">
						Preguntas Frecuentes
					</h2>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={faq.id}
							className="overflow-hidden border border-gray-700 bg-gray-800/40 rounded-xl"
						>
							<button
                type="button"
								className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
								onClick={() => toggleFaq(index)}
							>
								<span className="font-medium text-white">{faq.question}</span>
								{openFaq === index ? (
									<ChevronUp className="w-5 h-5 text-green-400" />
								) : (
									<ChevronDown className="w-5 h-5 text-gray-500" />
								)}
							</button>
							{openFaq === index && (
								<div className="px-6 pt-4 pb-4 text-sm leading-relaxed text-gray-400 border-t border-gray-700/50">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
