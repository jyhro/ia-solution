import { BarChart3, Brain, Zap } from "lucide-react";

const services = [
	{
		id: 1,
		title: "Capacitación en IA",
		description:
			"Domina herramientas como ChatGPT, Canva Magic y Microsoft Copilot para potenciar tu día a día.",
		icon: <Brain className="w-8 h-8 text-green-400" />,
	},
	{
		id: 2,
		title: "Automatización Inteligente",
		description:
			"Diseñamos soluciones a medida para automatizar procesos administrativos y de marketing repetitivos.",
		icon: <Zap className="w-8 h-8 text-green-400" />,
	},
	{
		id: 3,
		title: "Asesoría Estratégica",
		description:
			"Consultoría personalizada para integrar la IA de forma ética, responsable y productiva en tu negocio.",
		icon: <BarChart3 className="w-8 h-8 text-green-400" />,
	},
];

export default function Features() {
	return (
		<section id="servicios" className="py-20 bg-[#0d1117] relative">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
						Soluciones Inteligentes
					</h2>
					<p className="max-w-2xl mx-auto text-gray-400">
						Nuestros objetivos específicos están diseñados para transformar tu
						negocio mediante tecnología accesible y estrategias efectivas.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{services.map((service) => (
						<div
							key={service.id}
							className="relative p-8 overflow-hidden transition-all duration-300 border border-gray-700 group rounded-2xl bg-gray-800/40 hover:border-green-500/50 hover:bg-gray-800/60"
						>
							<div className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 origin-left transform scale-x-0 bg-linear-to-r from-green-400 to-emerald-600 group-hover:scale-x-100"></div>
							<div className="p-4 mb-6 transition-transform duration-300 bg-gray-900/50 rounded-xl w-fit group-hover:scale-110">
								{service.icon}
							</div>
							<h3 className="mb-3 text-xl font-bold text-white">
								{service.title}
							</h3>
							<p className="leading-relaxed text-gray-400">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
