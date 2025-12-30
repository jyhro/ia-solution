import { ArrowRight, Calendar, X } from "lucide-react";
import { useEffect, useState } from "react";
import Markdown from 'react-markdown';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const BLOG_POSTS = [
	{
		id: 1,
		cover:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "5 Herramientas de IA para PyMEs en 2025",
		largeDescription:
			"# 5 Herramientas de IA para PyMEs en 2025\n\nUna revisión detallada de las mejores herramientas de inteligencia artificial que pueden impulsar tu pequeña o mediana empresa en 2025. Desde asistentes virtuales hasta herramientas de análisis predictivo, estas tecnologías están diseñadas para optimizar procesos y mejorar la eficiencia.\n\nAdemás, exploramos casos de éxito de empresas que ya están utilizando estas herramientas para transformar sus operaciones. Descubre cómo estas soluciones pueden ayudarte a **reducir costos**, **aumentar la productividad** y mantenerte competitivo en un mercado en constante evolución.\n\n## Principales herramientas\n\n- Asistentes de ventas y atención al cliente (chatbots multicanal)\n- Generación de contenido y copias comerciales (texto, imágenes)\n- Automatización de tareas administrativas (facturas, reportes, conciliaciones)\n- Análisis predictivo de inventario y demanda\n- Integraciones no-code/low-code para flujos rápidos\n\n> Tip: empieza por un caso de uso acotado y mide resultados en 4–6 semanas.\n\n## Consejos de adopción\n\n1. Define objetivos claros y métricas.\n2. Empieza con pilotos pequeños.\n3. Capacita al equipo.\n4. Asegura la calidad de datos.\n5. Calcula ROI y ajusta iterativamente.\n\n### Métricas sugeridas\n\n- Tiempo ahorrado por proceso (min/operación)\n- Tasa de error antes/después\n- Conversión comercial y satisfacción de clientes (NPS/CSAT)\n\n```json\n{\n  \"objetivo\": \"Reducir tiempos de respuesta\",\n  \"area\": \"Atención al cliente\",\n  \"kpi\": [\"SLA\", \"CSAT\"],\n  \"duracionPiloto\": \"6 semanas\"\n}\n```\n",
		excerpt:
			"Descubre cómo ChatGPT y Copilot están cambiando el juego para los pequeños negocios en RD.",
		date: "26 Nov 2025",
		category: "Tecnología",
		author: "María López",
		tags: ["IA", "PyMEs", "Herramientas", "2025"],
	},
	{
		id: 2,
		cover:
			"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		largeDescription:
			"# Automatización: ¿El fin de la burocracia?\n\nExplora cómo la automatización con IA puede transformar la gestión administrativa en tu empresa. Desde la generación automática de informes hasta la programación de tareas repetitivas, la automatización está eliminando la burocracia y permitiendo a los empleados centrarse en tareas más estratégicas.\n\nEn este artículo, analizamos las herramientas más efectivas y cómo implementarlas sin interrumpir tus operaciones actuales. También discutimos los desafíos comunes y cómo superarlos para maximizar los beneficios.\n\n## Casos de uso clave\n\n- Enrutamiento de correos y respuestas automáticas\n- Procesamiento de facturas y comprobantes\n- Extracción de datos de PDFs y formularios\n- Recordatorios y flujos de aprobación\n\n### Resultados típicos\n\n- Reducción del 30–50% del tiempo operativo\n- Menor error humano\n- Trazabilidad mejorada\n\n#### Ejemplo de flujo (pseudo)\n\n```yaml\nflujo:\n  - trigger: correo_entrante\n  - classify: intent\n  - route: finanzas | soporte | ventas\n  - auto_reply: plantilla + datos\n  - log: CRM + dashboard\n```\n\n> Evita automatizar procesos mal definidos: primero estandariza, luego automatiza.\n",
		title: "Automatización: ¿El fin de la burocracia?",
		excerpt:
			"Cómo reducir un 40% de tu carga administrativa automatizando correos y facturas.",
		date: "20 Nov 2025",
		category: "Productividad",
		author: "Carlos Martínez",
		tags: ["IA", "Automatización", "Administración"],
	},
	{
		id: 3,
		cover:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Ética en la IA: Guía para empresarios",
		largeDescription:
			"# Ética en la IA: Guía para empresarios\n\nUna guía completa sobre la ética en la inteligencia artificial para empresarios. Este artículo aborda temas como la **privacidad de los datos**, el **sesgo algorítmico** y la **transparencia** en el uso de tecnologías de IA.\n\nTambién exploramos cómo las empresas pueden implementar políticas éticas y responsables al desarrollar o utilizar soluciones de inteligencia artificial. La confianza del cliente y la reputación de la marca dependen de un enfoque ético.\n\n## Checklist ético\n\n- Minimización y seguridad de datos\n- Evaluaciones de sesgo y explicabilidad\n- Consentimiento y cumplimiento normativo\n- Gobernanza interna y auditorías periódicas\n- Comunicación clara al usuario final\n\n### Implementación práctica\n\n1. Crea un comité de ética.\n2. Define estándares de datos.\n3. Documenta decisiones de modelo.\n4. Habilita canales de reporte.\n\n```md\n- DPIA obligatorio en proyectos con datos sensibles\n- Registro de versiones de modelos y datasets\n- Política de revisión trimestral\n```\n\n> Transparencia genera confianza: publica una nota de uso responsable de IA en tu sitio.\n",
		excerpt:
			"La responsabilidad al usar datos de clientes y generación de contenido sintético.",
		date: "15 Nov 2025",
		category: "Ética",
		author: "Ana Gómez",
		tags: ["Ética", "IA", "Privacidad"],
	},
	{
		id: 4,
		cover:
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "El futuro del trabajo con IA",
		largeDescription:
			"# El futuro del trabajo con IA\n\nEl impacto de la IA en el futuro del trabajo es innegable. Desde la automatización hasta la creación de nuevos roles, la IA está redefiniendo cómo trabajamos.\n\nEste artículo explora tendencias como **copilotos de productividad**, **asistentes especializados**, **analítica aumentada** y **plataformas de colaboración inteligente**. También discutimos cómo los empleados pueden adaptarse.\n\n## Habilidades clave\n\n- Prompting avanzado y diseño de flujos\n- Alfabetización de datos y métricas\n- Integración de herramientas y APIs\n- Supervisión humana y control de calidad\n\n### Estrategia para líderes\n\n- Mapa de competencias\n- Reskilling\n- Pilotos por área\n- Medición de impacto\n- Comunicación del cambio\n\n#### Roadmap sugerido\n\n```mermaid\nflowchart TD\nA[Identificar áreas] --> B[Pilotos]\nB --> C[Medir KPIs]\nC --> D[Escalar]\nD --> E[Formación continua]\n```\n\n> Invierte en capacitación: la adopción efectiva depende de habilidades internas.\n",
		excerpt:
			"Cómo la IA está transformando el panorama laboral y creando nuevas oportunidades.",
		date: "10 Nov 2025",
		category: "Futuro",
		author: "Luis Fernández",
		tags: ["Futuro del trabajo", "IA", "Tendencias laborales"],
	},
	{
		id: 5,
		cover:
			"https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Ciberseguridad en la era de la IA",
		largeDescription:
			"# Ciberseguridad en la era de la IA\n\nCon el aumento de la adopción de IA, la ciberseguridad se vuelve prioridad crítica. Analizamos amenazas emergentes (*phishing* sofisticado, deepfakes, automatización de ataques) y estrategias para proteger sistemas y datos.\n\nTambién exploramos cómo la IA fortalece la seguridad: **detección de intrusiones basada en comportamiento**, **correlación de eventos**, **respuesta automatizada** y **clasificación de riesgos**.\n\n## Buenas prácticas\n\n- Zero Trust y segmentación\n- Gestión de identidades y MFA\n- Seguridad de modelos y datasets\n- Monitoreo continuo y simulaciones\n- Plan de respuesta a incidentes con playbooks\n\n### Ejemplo de playbook\n\n```bash\n# Detección de anomalía\ncurl -X POST /alerts -d '{\"event\":\"login_anomalous\"}'\n# Aislar sesión\naws ssm send-command --document-name QuarantineSession\n# Notificar y registrar\ncurl -X POST /notify --data team=secops\n```\n\n> Beneficio clave: tiempos de detección más cortos, menor superficie de ataque y continuidad operativa.\n",
		excerpt:
			"Protege tu empresa de las amenazas cibernéticas con soluciones impulsadas por IA.",
		date: "5 Nov 2025",
		category: "Ciberseguridad",
		author: "Sofía Ramírez",
		tags: ["Ciberseguridad", "IA", "Protección de datos"],
	},
];

export default function Blog() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [showModal, setShowModal] = useState(false);
	const [dataModal, setDataModal] = useState<null | (typeof BLOG_POSTS)[0]>(
		null,
	);
	const filteredPosts =
		selectedCategory === "All"
			? BLOG_POSTS
			: BLOG_POSTS.filter((post) => post.category === selectedCategory);

	useEffect(() => {
		document.title = "Blog - IA Solution";
	}, []);

	return (
		<section className="px-4 pt-32 pb-20 mx-auto max-w-7xl">
			<div className="flex items-end justify-between mb-12">
				<div>
					<h2 className="mb-2 text-4xl font-bold text-white">
						Blog & Recursos
					</h2>
					<p className="text-gray-400">
						Explora las últimas tendencias, guías y noticias sobre tecnología
						empresarial.
					</p>
				</div>

				<div className="hidden gap-2 md:flex">
					<button
						type="button"
						onClick={() => setSelectedCategory("All")}
						className={`px-4 py-2 text-sm rounded-lg cursor-pointer ${
							selectedCategory === "All"
								? "text-white bg-gray-800 hover:bg-gray-700"
								: "bg-transparent text-gray-400 hover:text-white"
						}`}
					>
						Todos
					</button>
					{[...new Set(BLOG_POSTS.map((post) => post.category))].map(
						(category) => (
							<button
								key={category}
								type="button"
								className={`px-4 py-2 text-sm cursor-pointer rounded-lg ${
									selectedCategory === category
										? "text-white bg-gray-800 hover:bg-gray-700"
										: "bg-transparent text-gray-400 hover:text-white"
								}`}
								onClick={() => setSelectedCategory(category)}
							>
								{category}
							</button>
						),
					)}
				</div>
			</div>

			<div className="grid gap-8 md:grid-cols-3">
				{filteredPosts.map((post) => (
					<article
						key={post.id}
						onClick={() => {
							setDataModal(post);
							setShowModal(true);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								e.currentTarget.click();
							}
						}}
						className="bg-[#0d1117] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all group cursor-pointer"
					>
						<div className="relative h-48 overflow-hidden bg-gray-800">
							{post.cover && (
								<img
									src={post.cover}
									alt={post.title}
									className="absolute inset-0 object-cover w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:brightness-125 group-hover:saturate-100"
								/>
							)}
							<div className="absolute inset-0 bg-linear-to-t from-[#0d1117] to-transparent opacity-60"></div>
							<div className="absolute px-2 py-1 text-xs font-bold text-white bg-green-600 rounded bottom-4 left-4">
								{post.category}
							</div>
						</div>
						<div className="p-6">
							<div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
								<Calendar className="w-3 h-3" /> {post.date}
							</div>
							<h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-green-400">
								{post.title}
							</h3>
							<p className="mb-4 text-sm text-gray-400">{post.excerpt}</p>
							<span className="flex items-center gap-1 text-sm font-medium text-green-400 cursor-pointer group-hover:underline">
								Leer más <ArrowRight className="w-4 h-4" />
							</span>
						</div>
					</article>
				))}
			</div>
			{showModal && (
				<>
					<button
						type="button"
						className="fixed inset-0 z-40 cursor-pointer bg-black/90"
						onClick={() => setShowModal(false)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								setShowModal(false);
							}
						}}
						aria-label="Cerrar modal"
					></button>
					<div
						className="fixed inset-0 z-50 w-full max-w-2xl p-0 m-auto rounded-lg bg-[#0d1117] border border-gray-800 overflow-y-auto"
						role="dialog"
						aria-labelledby="modal-title"
						aria-describedby="modal-description"
						style={{ maxHeight: "90vh" }}
					>
						<div className="relative p-6">
							<button
								type="button"
								className="absolute p-2 bg-gray-800 rounded-lg cursor-pointer top-4 right-4"
								onClick={() => setShowModal(false)}
								aria-label="Cerrar modal"
							>
								<X className="text-white" />
							</button>
							{dataModal?.cover && (
								<img
									src={dataModal.cover}
									alt={dataModal.title}
									className="object-cover w-full mb-6 rounded-lg max-h-60"
								/>
							)}
							<h3
								id="modal-title"
								className="mb-3 text-2xl font-bold text-white"
							>
								{dataModal?.title}
							</h3>
							<time className="block mb-6 text-xs text-gray-500">
								<div className="flex items-center gap-2">
									<Calendar className="w-3 h-3" /> {dataModal?.date}
								</div>
							</time>
							<p id="modal-description" className="mb-4 text-sm text-gray-400 prose prose-invert max-w-none">
								<Markdown>{dataModal?.largeDescription}</Markdown>
							</p>
							{dataModal?.author && (
								<p className="text-sm text-gray-500">
									<strong>Autor:</strong> {dataModal.author}
								</p>
							)}
							{dataModal?.tags && (
								<div className="mt-4">
									<strong className="text-sm text-gray-500">Etiquetas:</strong>
									<div className="flex flex-wrap gap-2 mt-2">
										{dataModal.tags.map((tag, index) => (
											<span
												key={`tag-${index++}`}
												className="px-2 py-1 text-xs text-gray-400 bg-gray-800 rounded"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</section>
	);
}
