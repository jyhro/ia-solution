import { ArrowRight, Bot, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router";

export default function Hero() {
	const navigation = useNavigate()

	return (
		<section
			id="#inicio"
			className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32"
		>
			<div className="absolute top-0 z-0 w-full h-full -translate-x-1/2 pointer-events-none left-1/2">
				<div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px]"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]"></div>
			</div>

			<div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
				<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium text-green-400 border border-gray-700 rounded-full bg-gray-800/50 animate-fade-in-up">
					<span className="flex w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
					SmartPyme AI Solutions
				</div>

				<h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
					Revoluciona tu PyME con <br />
					<span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600">
						Inteligencia Artificial
					</span>
				</h1>

				<p className="max-w-2xl mx-auto mt-4 mb-10 text-xl text-gray-400">
					Brindamos asesoría y capacitación práctica para que emprendedores y
					pequeñas empresas implementen herramientas de IA, reduzcan costos y
					optimicen su gestión.
				</p>

				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<button
						type="button"
						onClick={() => navigation("/contact")}
						className="bg-green-500 cursor-pointer text-[#0B0E14] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(74,222,128,0.4)] flex items-center justify-center gap-2"
					>
						Agenda tu Asesoría <ArrowRight className="w-5 h-5" />
					</button>
					<a
						href="#servicios"
						className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 bg-gray-800 border border-gray-700 rounded-full cursor-pointer hover:bg-gray-700"
					>
						Ver Servicios
					</a>
				</div>

				<div className="pt-10 mt-20 border-t border-gray-800/50">
					<p className="mb-6 text-sm tracking-widest text-gray-500 uppercase">
						Impulsando el futuro de los negocios en RD
					</p>
					<div className="flex justify-center gap-8 transition-all duration-500 opacity-50 md:gap-16 grayscale hover:grayscale-0">
						<div className="flex items-center gap-2">
							<Users className="w-5 h-5" /> Emprendedores
						</div>
						<div className="flex items-center gap-2">
							<Zap className="w-5 h-5" /> Automatización
						</div>
						<div className="flex items-center gap-2">
							<Bot className="w-5 h-5" /> Consultoría IA
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
