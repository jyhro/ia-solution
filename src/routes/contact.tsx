import { Mail, MapPin, Phone } from "lucide-react";

export default function PricingPage() {
	return (
		<section className="px-4 pt-32 pb-20 mx-auto max-w-7xl min-h-[calc(100vh-5px)]">
			<div className="grid gap-16 md:grid-cols-2 place-content-center place-items-center">
				<div>
					<h2 className="mb-6 text-4xl font-bold text-white">
						Hablemos de tu Proyecto
					</h2>
					<p className="mb-8 text-lg text-gray-400">
						¿Listo para optimizar tu negocio? Completa el formulario y te
						contactaremos para una sesión de diagnóstico gratuita de 15 minutos.
					</p>

					<div className="space-y-6">
						<div className="flex items-center gap-4 text-slate-300">
							<div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-slate-800">
								<Mail className="text-green-400" />
							</div>
							<div>
								<h5 className="font-bold text-white">Email</h5>
								<p className="text-sm">contacto@ise-ai.com</p>
							</div>
						</div>
						<div className="flex items-center gap-4 text-slate-300">
							<div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-slate-800">
								<Phone className="text-green-400" />
							</div>
							<div>
								<h5 className="font-bold text-white">Teléfono</h5>
								<p className="text-sm">+1 (809) 555-0123</p>
							</div>
						</div>
						<div className="flex items-center gap-4 text-slate-300">
							<div className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0 bg-slate-800">
								<MapPin className="text-green-400" />
							</div>
							<div>
								<h5 className="font-bold text-white">Ubicación</h5>
								<p className="text-sm">Santo Domingo, República Dominicana</p>
							</div>
						</div>
					</div>
				</div>

				<div className="p-8 border border-gray-700 bg-gray-800/50 rounded-2xl">
					<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<label className="text-sm text-gray-400">
									Nombre
									<input
										type="text"
										className="w-full bg-[#0B0E14] border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
										placeholder="Juan Pérez"
									/>
								</label>
							</div>
							<div className="space-y-2">
								<label className="text-sm text-gray-400">
									Empresa
									<input
										type="text"
										className="w-full bg-[#0B0E14] border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
										placeholder="Mi Negocio SRL"
									/>
								</label>
							</div>
						</div>
						<div className="space-y-2">
							<label className="text-sm text-gray-400">
								Email
								<input
									type="email"
									className="w-full bg-[#0B0E14] border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
									placeholder="juan@ejemplo.com"
								/>
							</label>
						</div>
						<div className="space-y-2">
							<label className="text-sm text-gray-400">
								Mensaje
								<textarea
									className="w-full bg-[#0B0E14] border border-gray-700 rounded-lg p-3 text-white h-32 focus:border-green-500 focus:outline-none"
									placeholder="Estoy interesado en..."
								></textarea>
							</label>
						</div>
						<button
							type="button"
							className="w-full py-3 font-bold text-black transition-colors bg-green-500 rounded-lg hover:bg-green-600"
						>
							Enviar Mensaje
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
