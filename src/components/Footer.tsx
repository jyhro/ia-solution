import { Bot, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-[#050608] border-t border-gray-800 pt-16 pb-8">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="grid gap-12 mb-12 md:grid-cols-4">
					<div className="col-span-1 md:col-span-1">
						<div className="flex items-center gap-2 mb-4">
							<div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-lg">
								<Bot className="text-[#0B0E14] w-5 h-5" />
							</div>
							<span className="text-lg font-bold text-white">ISE AI</span>
						</div>
						<p className="text-sm leading-relaxed text-gray-500">
							Transformando PyMEs con el poder de la Inteligencia Artificial.
							Innovación accesible para todos.
						</p>
					</div>

					<div>
						<h4 className="mb-4 font-bold text-white">Empresa</h4>
						<ul className="space-y-2 text-sm text-gray-500">
							<li>
								<a
									href="/about-us"
									className="transition-colors hover:text-green-400"
								>
									Sobre Nosotros
								</a>
							</li>
							<li>
								<a
									href="/team"
									className="transition-colors hover:text-green-400"
								>
									Equipo
								</a>
							</li>
							<li>
								<a
									href="/careers"
									className="transition-colors hover:text-green-400"
								>
									Carreras
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-4 font-bold text-white">Servicios</h4>
						<ul className="space-y-2 text-sm text-gray-500">
							<li>
								<a
									href="/consultoria-ia"
									className="transition-colors hover:text-green-400"
								>
									Consultoría IA
								</a>
							</li>
							<li>
								<a
									href="/automatizacion"
									className="transition-colors hover:text-green-400"
								>
									Automatización
								</a>
							</li>
							<li>
								<a
									href="/talleres"
									className="transition-colors hover:text-green-400"
								>
									Talleres
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-4 font-bold text-white">Contacto</h4>
						<ul className="space-y-2 text-sm text-gray-500">
							<li className="flex items-center gap-2">
								<Mail className="w-4 h-4" /> contacto@ise-ai.com
							</li>
							<li className="flex items-center gap-2">
								<Phone className="w-4 h-4" /> +1 (809) 555-0123
							</li>
							<li className="flex items-center gap-2">
								<MapPin className="w-4 h-4" /> Santo Domingo, RD
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-slate-800 md:flex-row">
					<p className="text-sm text-slate-600">
						© 2025 IA Soluciones Empresariales (ISE). Todos los derechos
						reservados.
					</p>
					<div className="flex gap-6 text-sm text-slate-600">
						<a href="/privacy" className="transition-colors hover:text-white">
							Privacidad
						</a>
						<a href="/terms" className="transition-colors hover:text-white">
							Términos
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
