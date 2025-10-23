import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileSearch, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const Audit = () => {
  return (
    <Layout>
      <div className="animate-in space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Auditoría Técnica
            </h1>
            <p className="text-muted-foreground">
              Análisis completo priorizado por IA
            </p>
          </div>
          <Button className="gradient-primary shadow-glow">
            <FileSearch className="h-4 w-4 mr-2" />
            Nueva Auditoría
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">245</p>
                <p className="text-sm text-muted-foreground">Páginas OK</p>
              </div>
            </div>
          </Card>

          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10 text-warning">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">38</p>
                <p className="text-sm text-muted-foreground">Advertencias</p>
              </div>
            </div>
          </Card>

          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <XCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Críticos</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="card-glass">
          <div className="border-b border-border p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Problemas Priorizados por IA
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Ordenados por impacto estimado en el rendimiento
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                {
                  title: "5 cadenas de redirección críticas",
                  impact: "Alto",
                  description: "Afectan páginas con 15K visitas mensuales",
                  severity: "destructive" as const,
                },
                {
                  title: "38 imágenes sin atributo alt",
                  impact: "Medio",
                  description: "En páginas principales del sitio",
                  severity: "warning" as const,
                },
                {
                  title: "Velocidad de carga > 3s en móvil",
                  impact: "Alto",
                  description: "Core Web Vitals por debajo del umbral",
                  severity: "destructive" as const,
                },
              ].map((issue, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between rounded-lg border border-border p-4 transition-all hover:border-primary/50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-medium text-foreground">
                        {issue.title}
                      </h3>
                      <Badge
                        variant={issue.severity === "destructive" ? "destructive" : "default"}
                        className="text-xs"
                      >
                        {issue.impact}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {issue.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Audit;
