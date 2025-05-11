
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import SolicitarServicio from "./pages/SolicitarServicio";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/solicitar" element={<SolicitarServicio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
