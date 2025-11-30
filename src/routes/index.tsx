import FAQ from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import {
	Brain,
	LayoutDashboard,
	MessageSquare,
	Settings,
	User,
	Zap,
} from "lucide-react";
import type { ComponentType } from "react";

type Servicio = {
	id: number;
	title: string;
	price: string;
	desc: string;
	icon: ComponentType<{ className?: string }>;
};

const servicios: Servicio[] = [
	{
		id: 1,
		title: "Taller de IA Generativa",
		price: "RD$ 2,500",
		desc: "Aprende a usar ChatGPT para redactar correos, crear contenido de redes sociales y responder a clientes.",
		icon: MessageSquare,
	},
	{
		id: 2,
		title: "Diseño con IA (Canva Magic)",
		price: "RD$ 3,000",
		desc: "Crea la identidad visual de tu marca sin ser diseñador. Logos, posts y presentaciones.",
		icon: LayoutDashboard,
	},
	{
		id: 3,
		title: "Automatización de WhatsApp",
		price: "Desde RD$ 5,000",
		desc: "Implementación de respuestas automáticas y bots simples para no perder ninguna venta.",
		icon: Zap,
	},
	{
		id: 4,
		title: "Consultoría 1 a 1",
		price: "A medida",
		desc: "Auditoría de tus procesos actuales y plan de implementación de IA personalizado.",
		icon: User,
	},
	{
		id: 5,
		title: "Productividad con Copilot",
		price: "Consultar",
		desc: "Domina la suite de Microsoft 365 potenciada con IA para Excel, Word y PowerPoint.",
		icon: Brain,
	},
	{
		id: 6,
		title: "Soporte Técnico Continuo",
		price: "Mensual",
		desc: "Acompañamiento para asegurar que las herramientas sigan funcionando correctamente.",
		icon: Settings,
	},
];

export default function Home() {
	return (
		<>
			<Hero />

			<Features />
			<div id="servicios" className="py-20 bg-[#0d1117] relative">
				<section className="px-4 mx-auto bg-transparent max-w-7xl sm:px-6 lg:px-8">
					<h2 className="mb-3 text-3xl font-bold text-center text-white md:text-4xl">
						Nuestros Servicios
					</h2>
					<p className="max-w-2xl mx-auto text-center text-gray-400 mb-14">
						Soluciones diseñadas específicamente para el mercado dominicano,
						adaptadas a tu presupuesto y nivel técnico.
					</p>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{servicios.map(({ id, title, price, desc, icon: Icon }) => (
							<article
								key={id}
								className="p-6 transition-colors border border-gray-700 md:p-8 bg-gray-800/40 rounded-2xl hover:border-green-500 focus-within:border-green-500"
							>
								<div
									className="flex items-center justify-center w-12 h-12 mb-5 text-green-400 bg-gray-900 rounded-lg"
									aria-hidden="true"
								>
									<Icon className="w-6 h-6" />
								</div>
								<h3 className="mb-2 text-lg font-bold text-white md:text-xl">
									{title}
								</h3>
								<span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-green-400 rounded-full bg-green-900/30">
									{price}
								</span>
								<p className="text-sm leading-relaxed text-gray-400">{desc}</p>
							</article>
						))}
					</div>
				</section>
			</div>
			<Pricing />
			<FAQ />
		</>
	);
}
