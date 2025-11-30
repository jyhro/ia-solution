import Mision from "@/components/Mision";
import { BarChart3, Bot, Brain, User, Users } from "lucide-react";
import Railin from '@/assets/railin-guzman.webp'
import Yeiser from '@/assets/yeiser-jimenez.webp'
import Malena from '@/assets/malena-colon.webp'
import Gabriel from '@/assets/gabriel-soriano.webp'

interface TeamMember {
	id: number;
	photo: string;
	role: string;
	name: string;
	icon: React.ReactNode;
}

const TEAM: TeamMember[] = [
	{
		id: 1,
		photo: Gabriel,
		role: "Director General (CEO)",
		name: "Gabriel Soriano",
		icon: <User className="w-12 h-12 text-green-400" />,
	},
	{
		id: 2,
		photo: Malena,
		role: "Coord. Capacitación",
		name: "Malena Colón",
		icon: <Users className="w-12 h-12 text-blue-400" />,
	},
	{
		id: 3,
		photo: Railin,
		role: "Esp. IA & Automatización",
		name: "Railin Guzmán",
		icon: <Brain className="w-12 h-12 text-purple-400" />,
	},
	{
		id: 4,
		photo: Yeiser,
		role: "Marketing Digital",
		name: "Yeiser Jimenez",
		icon: <BarChart3 className="w-12 h-12 text-pink-400" />,
	},
	{
		id: 5,
		photo: "",
		role: "Asistente Virtual",
		name: "ISE Bot v1.0",
		icon: <Bot className="w-12 h-12 text-emerald-400" />,
	},
];

export default function About() {
	return (
		<section className="px-4 pt-32 pb-20 mx-auto max-w-7xl">
			<div className="mb-16 text-center">
				<h2 className="mb-6 text-4xl font-bold text-white">Quiénes Somos</h2>
				<p className="max-w-3xl mx-auto text-slate-400">
					Somos un grupo de estudiantes de la UNAD y profesionales apasionados
					por la tecnología, con la misión de democratizar el acceso a la
					Inteligencia Artificial en República Dominicana.
				</p>
			</div>

			<Mision />

			<h3 className="mb-10 text-3xl font-bold text-center text-white">
				Nuestro Equipo
			</h3>
			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
				{TEAM.map((member) => (
					<div key={member.id} className="text-center group">
						<div className="relative">
							<div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 transition-colors border-2 rounded-full bg-slate-800 border-slate-700 group-hover:border-green-500">
								{member.photo ? (
									<img
										src={member.photo}
										alt={member.name}
										className="object-cover w-full h-full rounded-full"
									/>
								) : (
									member.icon
								)}
							</div>
							{member.photo && (
								<div className="absolute top-0 flex items-center justify-center w-6 h-6 p-1 bg-gray-600 rounded-full right-18">
									{member.icon}
								</div>
							)}
						</div>
						<h4 className="font-bold text-white">{member.name}</h4>
						<p className="mt-1 text-xs tracking-wider text-green-500 uppercase">
							{member.role}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
