import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProjectProvider } from "@/contexts/ProjectContext";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import LLMMentions from "./pages/LLMMentions";
import AIKeywords from "./pages/AIKeywords";
import AIEngines from "./pages/AIEngines";
import AICompetitors from "./pages/AICompetitors";
import AIContentOptimizer from "./pages/AIContentOptimizer";
import AIBrandMonitor from "./pages/AIBrandMonitor";
import SERPAISummary from "./pages/SERPAISummary";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Integrations from "./pages/Integrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <ProjectProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/llm-mentions" element={<LLMMentions />} />
                <Route path="/ai-keywords" element={<AIKeywords />} />
                <Route path="/ai-engines" element={<AIEngines />} />
                <Route path="/ai-competitors" element={<AICompetitors />} />
                <Route path="/content-optimizer" element={<AIContentOptimizer />} />
                <Route path="/brand-monitor" element={<AIBrandMonitor />} />
                <Route path="/serp-ai-summary" element={<SERPAISummary />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ProjectProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;