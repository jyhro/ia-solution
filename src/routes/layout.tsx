import AppToaster from "@/components/AppToaster";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router";

export default function Layout() {
	return (
		<main>
			{/* Componente que fuerza scroll al top en cada cambio de ruta */}
			<ScrollToTop />
			{/* Toaster global con estilos del proyecto */}
			<AppToaster />
			<Navbar />
			<Outlet />
			<Footer />
			<ChatWidget />
		</main>
	);
}
