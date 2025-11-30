import { Toaster } from "sonner";

// Componente centralizado para estilos consistentes del sistema de toasts
export default function AppToaster() {
  return (
    <Toaster
      position="bottom-left"
      richColors
      closeButton
      theme="dark"
      expand={false}
      toastOptions={{
        classNames: {
          toast:
            "group bg-[#0B0E14]/95 border border-gray-700/70 backdrop-blur-sm text-white shadow-[0_0_0_1px_rgba(74,222,128,0.25),0_4px_18px_-2px_rgba(0,0,0,0.5),0_8px_30px_-4px_rgba(16,185,129,0.25)] rounded-xl px-4 py-3 flex gap-3 items-start",
          title: "font-semibold text-white tracking-tight text-sm",
          description: "text-xs text-gray-400 leading-relaxed",
          actionButton:
            "bg-green-500 hover:bg-green-600 text-black font-semibold text-xs px-3 py-1 rounded-md transition-colors",
          cancelButton:
            "bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 text-xs px-3 py-1 rounded-md transition-colors",
        },
        style: {
          // Fallback inline styles (la mayoría viene de Tailwind arriba)
        },
      }}
    />
  );
}
