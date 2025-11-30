import { Bot, Lock, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import useStore from "@/store/useStore";

const navLinks = [
	{ name: "Inicio", href: "/" },
	{ name: "Nosotros", href: "/about" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contactanos", href: "/contact" },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { user, isLoggedIn } = useStore();
	const location = useLocation();

	return (
		<nav className="fixed w-full z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-gray-800">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex items-center gap-2 shrink-0">
						<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-green-400 to-emerald-600">
							<Bot className="w-6 h-6 text-white" />
						</div>
						<span className="text-xl font-bold tracking-tight text-white">
							ISE <span className="text-green-400">AI</span>
						</span>
					</div>

					<div className="hidden md:block">
						<div className="flex items-baseline ml-10 space-x-8">
							{navLinks.map((link) => {
								const isActive = location.pathname === link.href;
								return (
									<Link
										key={link.name}
										to={link.href}
										onClick={(e) => {
											if (isActive) e.preventDefault();
										}}
										className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
											isActive
												? "text-white font-semibold"
												: "text-gray-300 hover:text-green-400"
										}`}
										aria-current={isActive ? "page" : undefined}
									>
										{link.name}
									</Link>
								);
							})}
						</div>
					</div>

					<div className="hidden md:block">
						{isLoggedIn ? (
							<Link
								to="/portal"
								className="flex items-center gap-2 px-4 py-2 font-medium text-white transition-all bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700"
							>
								<div className="flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-green-500 rounded-full">
									{user?.initials}
								</div>
								<span>Portal</span>
							</Link>
						) : (
							<Link
								to="/login"
								className="bg-green-500 cursor-pointer text-[#0B0E14] font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.3)] flex items-center gap-2"
							>
								<Lock className="w-4 h-4" /> Zona Clientes
							</Link>
						)}
					</div>

					<div className="flex -mr-2 md:hidden">
						<button
							type="button"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden bg-[#0B0E14] border-b border-gray-800">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navLinks.map((link) => {
							const isActive = location.pathname === link.href;
							return (
								<Link
									key={link.name}
									to={link.href}
									onClick={(e) => {
										if (isActive) e.preventDefault();
										setIsMenuOpen(false);
									}}
									className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
										isActive
											? "text-white font-semibold"
											: "text-gray-300 hover:text-green-400"
									}`}
									aria-current={isActive ? "page" : undefined}
								>
									{link.name}
								</Link>
							);
						})}
						<button
							type="button"
							className="w-full text-left bg-green-500 text-[#0B0E14] font-bold px-3 py-2 rounded-md mt-4"
						>
							Empezar Ahora
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}
