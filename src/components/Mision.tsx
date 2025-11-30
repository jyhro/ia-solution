import { Check } from "lucide-react";

export default function Mision() {
	return (
		<section id="mision" className="relative py-20 overflow-hidden">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					<div className="relative">
						<div className="absolute -inset-4 bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl opacity-20 blur-xl"></div>
						<div className="relative p-8 bg-gray-800 border border-gray-700 rounded-2xl">
							<div className="flex flex-col gap-6">
								<div className="p-6 border bg-gray-900/50 rounded-xl border-gray-700/50">
									<h3 className="flex items-center gap-2 mb-2 text-2xl font-bold text-white">
										<span className="w-1 h-8 bg-green-500 rounded-full"></span>
										Nuestra Misión
									</h3>
									<p className="text-gray-400">
										Empoderar a las medianas y pequeñas empresas mediante la
										educación tecnológica y el uso estratégico de herramientas
										de IA, para que logren ser más competitivos, productivos y
										sostenibles.
									</p>
								</div>
								<div className="p-6 border bg-gray-900/50 rounded-xl border-gray-700/50">
									<h3 className="flex items-center gap-2 mb-2 text-2xl font-bold text-white">
										<span className="w-1 h-8 rounded-full bg-emerald-500"></span>
										Nuestra Visión
									</h3>
									<p className="text-gray-400">
										Convertirse en la consultora líder en la República
										Dominicana en integración de IA para PyMEs, promoviendo la
										innovación y transformación digital accesible para todos.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
							Liderando el cambio digital en{" "}
							<span className="text-green-400">República Dominicana</span>
						</h2>

						<p className="mb-8 text-lg leading-relaxed text-gray-400">
							IA Soluciones Empresariales (ISE) nace con el propósito de cerrar
							la brecha digital. No solo implementamos tecnología; fomentamos
							una adopción responsable y ética que respeta el valor humano
							mientras maximiza la eficiencia.
						</p>

						<div className="grid grid-cols-2 gap-6">
							<div>
								<h4 className="mb-2 text-lg font-bold text-white">
									Público Objetivo
								</h4>
								<ul className="space-y-2 text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<Check className="w-4 h-4 text-green-500" /> Emprendedores
									</li>
									<li className="flex items-center gap-2">
										<Check className="w-4 h-4 text-green-500" /> PyMEs
									</li>
									<li className="flex items-center gap-2">
										<Check className="w-4 h-4 text-green-500" /> Freelancers
									</li>
								</ul>
							</div>
							<div>
								<h4 className="mb-2 text-lg font-bold text-white">
									Equipo Lider
								</h4>
								<ul className="space-y-2 text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<Check className="w-4 h-4 text-green-500" /> Especialistas
										en IA
									</li>
									<li className="flex items-center gap-2">
										<Check className="w-4 h-4 text-green-500" /> Marketing
										Digital
									</li>
									<li className="flex items-center gap-2">
										<Check className="w-4 h-4 text-green-500" /> Capacitadores
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
