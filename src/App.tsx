import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Keywords from "./pages/Keywords";
import Backlinks from "./pages/Backlinks";
import AEO from "./pages/AEO";
import Audit from "./pages/Audit";
import Competitors from "./pages/Competitors";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import LocalSEO from "./pages/LocalSEO";
import BrandMonitoring from "./pages/BrandMonitoring";
import ContentOptimizer from "./pages/ContentOptimizer";
import YouTubeSEO from "./pages/YouTubeSEO";
import Integrations from "./pages/Integrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/keywords" element={<Keywords />} />
            <Route path="/backlinks" element={<Backlinks />} />
            <Route path="/aeo" element={<AEO />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/competitors" element={<Competitors />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/local-seo" element={<LocalSEO />} />
            <Route path="/brand-monitoring" element={<BrandMonitoring />} />
            <Route path="/content-optimizer" element={<ContentOptimizer />} />
            <Route path="/youtube-seo" element={<YouTubeSEO />} />
            <Route path="/integrations" element={<Integrations />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
