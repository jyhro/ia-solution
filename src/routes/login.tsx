import useStore from "@/store/useStore";
import { notifyError, notifySuccess } from "@/utils/notify";
import { ArrowRight, Lock } from "lucide-react";
import { useNavigate } from "react-router";

export default function Login() {
	const navigation = useNavigate();
	const { login } = useStore();

	const handleLogin = (email: string, password: string) => {
		// Validaciones mínimas simuladas
		if (!email || !password) {
			notifyError("Completa email y contraseña");
			return;
		}
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
			notifyError("Email inválido");
			return;
		}

		// Simulación de login correcto
		login({
			name: "Carlos Emprendedor",
			email,
			initials: "CE",
		});
		notifySuccess("Sesión iniciada correctamente");
		navigation("/portal");
	};

	return (
		<section className="flex items-center justify-center min-h-screen px-4 pt-20">
			<div className="relative w-full max-w-md p-8 overflow-hidden border border-gray-700 bg-gray-800/50 rounded-2xl">
				<div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-400 to-emerald-600"></div>

				<div className="mb-8 text-center">
					<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-900 rounded-xl">
						<Lock className="w-8 h-8 text-green-400" />
					</div>
					<h2 className="text-2xl font-bold text-white">Portal de Clientes</h2>
					<p className="text-sm text-gray-400">
						Accede a tus cursos y materiales
					</p>
				</div>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						const formData = new FormData(e.currentTarget);
						const email = String(formData.get("email") || "").trim();
						const password = String(formData.get("password") || "").trim();
						handleLogin(email, password);
					}}
					className="space-y-4"
				>
					<div className="space-y-2">
						<label className="text-sm text-gray-400">
							Email
							<input
								name="email"
								type="email"
								defaultValue="cliente@ise.com"
								className="w-full bg-[#0B0E14] border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
							/>
						</label>
					</div>
					<div className="space-y-2">
						<label className="text-sm text-gray-400">
							Contraseña
							<input
								name="password"
								type="password"
								defaultValue="password"
								className="w-full bg-[#0B0E14] border border-gray-700 rounded-lg p-3 text-white focus:border-green-500 focus:outline-none"
							/>
						</label>
					</div>
					<button
						type="submit"
						className="flex items-center justify-center w-full gap-2 py-3 font-bold text-black transition-colors bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
					>
						Iniciar Sesión <ArrowRight className="w-4 h-4" />
					</button>
				</form>

				<div className="mt-6 text-center">
					<p className="text-xs text-gray-500">
						¿No tienes cuenta? Contacta a administración.
					</p>
				</div>
			</div>
		</section>
	);
}
