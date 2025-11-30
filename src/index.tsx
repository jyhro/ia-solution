import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import useStore from "./store/useStore";

const Layout = lazy(() => import("@/routes/layout"));
const Home = lazy(() => import("@/routes"));
const Servicios = lazy(() => import("@/routes/services"));
const About = lazy(() => import("@/routes/about"));
const Blog = lazy(() => import("@/routes/blog"));
const Pricing = lazy(() => import("@/routes/contact"));
const Login = lazy(() => import("@/routes/login"));
const PortalPage = lazy(() => import("@/routes/portal"));
const NotFound = lazy(() => import("@/routes/not-found"));

function Loading() {
	return (
		<div className="min-h-screen bg-[#0B0E14]">
			{/* soft ambient glow to match site */}
			<div className="fixed inset-0 pointer-events-none -z-10">
				<div className="absolute top-24 left-10 w-72 h-72 bg-green-500/15 rounded-full blur-[100px]"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>
			</div>

			<div className="px-4 mx-auto max-w-7xl">
				<div className="flex items-center justify-center min-h-screen">
					<div className="flex items-center gap-4 px-5 py-4 border border-gray-800 rounded-2xl bg-gray-800/50 shadow-[0_0_30px_rgba(74,222,128,0.15)]">
						<span className="relative inline-flex w-6 h-6">
							<span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-10"></span>
							<svg
								className="w-6 h-6 text-green-400 animate-spin"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
								/>
							</svg>
						</span>
						<div className="flex flex-col">
							<span className="text-sm font-semibold text-white">Cargando</span>
							<span className="text-xs text-gray-400">
								Preparando contenido…
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Main() {
	const { isLoggedIn } = useStore();

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="services" element={<Servicios />} />
					<Route path="about" element={<About />} />
					<Route path="blog" element={<Blog />} />
					<Route path="contact" element={<Pricing />} />
					<Route path="portal" element={isLoggedIn ? <PortalPage /> : <Login />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
}
