import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./global.css";
import App from "./index.tsx";

const rootEl = document.getElementById("root");

if (!rootEl) {
	throw new Error("Root element #root not found");
}

createRoot(rootEl).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
