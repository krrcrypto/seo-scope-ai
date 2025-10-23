import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, MessageSquare, FileText } from "lucide-react";

const AEO = () => {
  return (
    <Layout>
      <div className="animate-in space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            AEO Content Hub
          </h1>
          <p className="text-muted-foreground">
            Optimización para motores de respuestas con IA
          </p>
        </div>

        <Card className="card-glass p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-white shadow-glow">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Descubre Oportunidades de Contenido
              </h2>
              <p className="text-sm text-muted-foreground">
                Ingresa una palabra clave para descubrir preguntas relacionadas 
                y generar briefs de contenido optimizados para featured snippets
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Input
              placeholder="Ej: marketing digital, SEO técnico, link building..."
              className="flex-1"
            />
            <Button className="gradient-primary">
              <Sparkles className="h-4 w-4 mr-2" />
              Analizar
            </Button>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">
                People Also Ask
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Descubre todas las preguntas relacionadas que aparecen en 
              los resultados de búsqueda
            </p>
          </Card>

          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-foreground">
                Content Briefs con IA
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Genera briefs estructurados optimizados para capturar 
              featured snippets
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AEO;
