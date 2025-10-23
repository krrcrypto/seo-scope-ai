import { Layout } from "@/components/Layout";
import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  Link2, 
  Target,
  Plus,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Dashboard = () => {
  const mockProjects = [
    {
      name: "Proyecto Demo",
      domain: "example.com",
      status: "healthy" as const,
      organicTraffic: 45230,
      domainRank: 68,
      backlinks: 1243,
      lastAudit: "Hace 2 días",
    },
    {
      name: "Cliente Principal",
      domain: "cliente-principal.com",
      status: "warning" as const,
      organicTraffic: 23100,
      domainRank: 54,
      backlinks: 856,
      lastAudit: "Hace 5 días",
    },
  ];

  return (
    <Layout>
      <div className="animate-in space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Dashboard SEO
            </h1>
            <p className="text-muted-foreground">
              Métricas en tiempo real de tus proyectos
            </p>
          </div>
          <Button className="gradient-primary shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Proyecto
          </Button>
        </div>

        {/* AI Insight Banner */}
        <Card className="card-glass p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Insight de IA
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Se detectó una caída del 15% en el tráfico orgánico de "example.com" 
                en los últimos 7 días. Esto coincide con la pérdida de rankings para 
                8 palabras clave de alto volumen.
              </p>
              <Button variant="outline" size="sm">
                Analizar Problema
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Tráfico Total"
            value="68.3K"
            change={12}
            trend="up"
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <MetricCard
            title="Proyectos Activos"
            value={12}
            icon={<Users className="h-6 w-6" />}
          />
          <MetricCard
            title="Backlinks Totales"
            value="2.1K"
            change={8}
            trend="up"
            icon={<Link2 className="h-6 w-6" />}
          />
          <MetricCard
            title="Avg. Domain Rank"
            value={61}
            change={-3}
            trend="down"
            icon={<Target className="h-6 w-6" />}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="card-glass p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 group">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AEO Analysis</h3>
                <p className="text-sm text-muted-foreground">Optimiza para respuestas</p>
              </div>
            </div>
          </Card>

          <Card className="card-glass p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 group">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Auditoría Técnica</h3>
                <p className="text-sm text-muted-foreground">Priorizada por IA</p>
              </div>
            </div>
          </Card>

          <Card className="card-glass p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 group">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground transition-all">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Competidores</h3>
                <p className="text-sm text-muted-foreground">Análisis de gaps</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Proyectos Recientes
            </h2>
            <Button variant="ghost">
              Ver Todos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {mockProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
