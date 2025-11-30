import { ArrowRight, Calendar, X } from "lucide-react";
import { useEffect, useState } from "react";

const BLOG_POSTS = [
	{
		id: 1,
		cover:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "5 Herramientas de IA para PyMEs en 2025",
		largeDescription:
			"Una revisión detallada de las mejores herramientas de inteligencia artificial que pueden impulsar tu pequeña o mediana empresa en 2025. Desde asistentes virtuales hasta herramientas de análisis predictivo, estas tecnologías están diseñadas para optimizar procesos y mejorar la eficiencia. Además, exploramos casos de éxito de empresas que ya están utilizando estas herramientas para transformar sus operaciones. Descubre cómo estas soluciones pueden ayudarte a reducir costos, aumentar la productividad y mantenerte competitivo en un mercado en constante evolución.",
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
			"Explora cómo la automatización con IA puede transformar la gestión administrativa en tu empresa. Desde la generación automática de informes hasta la programación de tareas repetitivas, la automatización está eliminando la burocracia y permitiendo a los empleados centrarse en tareas más estratégicas. En este artículo, analizamos las herramientas más efectivas y cómo implementarlas sin interrumpir tus operaciones actuales. También discutimos los desafíos comunes y cómo superarlos para maximizar los beneficios.",
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
			"Una guía completa sobre la ética en la inteligencia artificial para empresarios. Este artículo aborda temas como la privacidad de los datos, el sesgo algorítmico y la transparencia en el uso de tecnologías de IA. También exploramos cómo las empresas pueden implementar políticas éticas y responsables al desarrollar o utilizar soluciones de inteligencia artificial. La confianza del cliente y la reputación de la marca son factores clave que dependen de un enfoque ético en la IA.\n\n Además, presentamos casos de estudio y mejores prácticas para garantizar que tu empresa no solo cumpla con las regulaciones, sino que también lidere con el ejemplo en el uso responsable de la IA.",
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
			"El impacto de la inteligencia artificial en el futuro del trabajo es innegable. Desde la automatización de tareas hasta la creación de nuevos roles, la IA está redefiniendo cómo trabajamos. Este artículo explora las tendencias emergentes, como el trabajo remoto habilitado por IA y las plataformas de colaboración inteligente. También discutimos cómo los empleados pueden adaptarse a estos cambios y adquirir habilidades relevantes para prosperar en un entorno laboral impulsado por la tecnología.",
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
			"Con el aumento de la adopción de la inteligencia artificial, la ciberseguridad se ha convertido en una prioridad crítica para las empresas. Este artículo analiza las amenazas emergentes, como los ataques impulsados por IA, y las estrategias para proteger tus sistemas y datos. También exploramos cómo las herramientas de IA pueden ser utilizadas para fortalecer la seguridad, desde la detección de intrusiones hasta la respuesta automatizada a incidentes. Mantente un paso adelante en la protección de tu negocio.",
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
							<p id="modal-description" className="mb-4 text-sm text-gray-400">
								{dataModal?.largeDescription}
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
