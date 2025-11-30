import { Download, FileText, LogOut, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router";
import useStore from "@/store/useStore";

export default function PortalPage() {
	const { user, logout } = useStore();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<section className="px-4 pb-20 mx-auto pt-28 max-w-7xl">
			<div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
				<div>
					<h1 className="text-3xl font-bold text-white">Hola, {user.name}</h1>
					<p className="text-slate-400">Bienvenido a tu panel de control.</p>
				</div>
				<button
					type="button"
					onClick={handleLogout}
					className="flex items-center gap-2 text-sm font-medium text-red-400 cursor-pointer hover:text-red-300"
				>
					<LogOut className="w-4 h-4" /> Cerrar Sesión
				</button>
			</div>

			<div className="grid gap-8 md:grid-cols-3">
				{/* Sidebar / Stats */}
				<div className="space-y-6">
					<div className="p-6 border bg-slate-800 rounded-xl border-slate-700">
						<h3 className="mb-4 font-bold text-white">Tu Progreso</h3>
						<div className="space-y-4">
							<div>
								<div className="flex justify-between mb-1 text-xs text-slate-400">
									<span>Curso ChatGPT Básico</span>
									<span>80%</span>
								</div>
								<div className="w-full h-2 rounded-full bg-slate-900">
									<div
										className="h-2 bg-green-500 rounded-full"
										style={{ width: "80%" }}
									></div>
								</div>
							</div>
							<div>
								<div className="flex justify-between mb-1 text-xs text-slate-400">
									<span>Automatización Email</span>
									<span>30%</span>
								</div>
								<div className="w-full h-2 rounded-full bg-slate-900">
									<div
										className="h-2 bg-blue-500 rounded-full"
										style={{ width: "30%" }}
									></div>
								</div>
							</div>
						</div>
					</div>

					<div className="p-6 border bg-slate-800 rounded-xl border-slate-700">
						<h3 className="mb-4 font-bold text-white">Próximos Eventos</h3>
						<div className="flex items-start gap-3 mb-4">
							<div className="bg-slate-900 p-2 rounded text-center min-w-[50px]">
								<span className="block text-xs uppercase text-slate-500">
									NOV
								</span>
								<span className="block text-xl font-bold text-white">28</span>
							</div>
							<div>
								<h4 className="text-sm font-bold text-white">
									Webinar: IA en Finanzas
								</h4>
								<p className="text-xs text-slate-500">10:00 AM - Zoom</p>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content Area */}
				<div className="space-y-6 md:col-span-2">
					<div className="grid grid-cols-2 gap-4">
						<button
							type="button"
							className="p-6 text-left transition-colors border bg-slate-800 hover:bg-slate-700 rounded-xl border-slate-700 group"
						>
							<PlayCircle className="w-8 h-8 mb-3 text-green-400 transition-transform group-hover:scale-110" />
							<h4 className="font-bold text-white">Continuar Aprendiendo</h4>
							<p className="mt-1 text-xs text-slate-400">
								Retoma donde lo dejaste
							</p>
						</button>
						<button
							type="button"
							className="p-6 text-left transition-colors border bg-slate-800 hover:bg-slate-700 rounded-xl border-slate-700 group"
						>
							<Download className="w-8 h-8 mb-3 text-blue-400 transition-transform group-hover:scale-110" />
							<h4 className="font-bold text-white">Recursos Descargables</h4>
							<p className="mt-1 text-xs text-slate-400">
								Plantillas y guías PDF
							</p>
						</button>
					</div>

					<div className="bg-[#0d1117] rounded-xl border border-slate-800 overflow-hidden">
						<div className="flex items-center justify-between p-4 border-b border-slate-800">
							<h3 className="font-bold text-white">Mis Documentos</h3>
							<button
								type="button"
								className="text-xs text-green-400 hover:text-green-300"
							>
								Ver todo
							</button>
						</div>
						<div className="p-4 space-y-2">
							{[
								"Factura #001 - Octubre",
								"Certificado Taller IA",
								"Propuesta Consultoría v2",
							].map((doc, i) => (
								<div
									key={`doc-${i.toString()}`}
									className="flex items-center justify-between p-3 transition-colors rounded-lg cursor-pointer hover:bg-slate-800/50 group"
								>
									<div className="flex items-center gap-3">
										<FileText className="w-4 h-4 text-slate-500 group-hover:text-white" />
										<span className="text-sm text-slate-300">{doc}</span>
									</div>
									<Download className="w-4 h-4 text-slate-600 group-hover:text-green-400" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
