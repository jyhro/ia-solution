import { Check } from "lucide-react";

const pricingPlans = [
	{
		id: 1,
		name: "Emprendedor",
		price: "RD$ 2,500",
		period: "/taller",
		features: [
			"Acceso a talleres grupales",
			"Uso básico de ChatGPT y Canva",
			"Material de soporte digital",
			"Certificado de participación",
		],
		recommended: false,
	},
	{
		id: 2,
		name: "Pyme Pro",
		price: "RD$ 15,000",
		period: "/mes",
		features: [
			"Todo lo del plan Emprendedor",
			"Asesoría personalizada 1 a 1",
			"Diseño de flujos de automatización",
			"Soporte prioritario por WhatsApp",
		],
		recommended: true,
	},
	{
		id: 3,
		name: "Corporativo",
		price: "A medida",
		period: "",
		features: [
			"Capacitación in-company",
			"Desarrollo de bots a medida",
			"Auditoría completa de procesos",
			"Gestión de cambio organizacional",
		],
		recommended: false,
	},
];

export default function Pricing() {
	return (
		<section id="precios" className="py-20 bg-[#0d1117]">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
						Elige el Plan Perfecto
					</h2>
					<p className="text-gray-400">
						Inversiones flexibles diseñadas para ajustarse al tamaño de tu
						negocio.
					</p>
				</div>

				<div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-3">
					{pricingPlans.map((plan) => (
						<div
							key={plan.id}
							className={`relative p-8 rounded-2xl border flex flex-col hover:scale-105 transition-transform duration-300 ${plan.recommended ? "bg-gray-800/80 border-green-500 shadow-2xl shadow-green-900/20" : "bg-gray-800/40 border-gray-700"}`}
						>
							{plan.recommended && (
								<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-[#0B0E14] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
									Más Popular
								</div>
							)}

							<h3 className="mb-2 text-xl font-bold text-white">{plan.name}</h3>
							<div className="flex items-baseline mb-6">
								<span className="text-3xl font-bold text-white">
									{plan.price}
								</span>
								<span className="ml-1 text-sm text-gray-500">
									{plan.period}
								</span>
							</div>

							<ul className="flex-1 mb-8 space-y-4">
								{plan.features.map((feature, idx) => (
									<li
										key={`${plan.id}-feature-${idx}`}
										className="flex items-start gap-3 text-sm text-gray-300"
									>
										<Check
											className={`w-5 h-5 shrink-0 ${plan.recommended ? "text-green-400" : "text-gray-500"}`}
										/>
										{feature}
									</li>
								))}
							</ul>

							<a
								href="/contact"
								className={`w-full text-center py-3 cursor-pointer px-6 rounded-lg font-bold transition-all duration-300 ${plan.recommended ? "bg-green-500 cursor-pointer text-[#0B0E14]" : "bg-gray-700 hover:bg-gray-600 text-white cursor-pointer"}`}
							>
								Seleccionar Plan
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
