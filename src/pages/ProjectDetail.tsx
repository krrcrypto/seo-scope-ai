import { Layout } from "@/components/Layout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Search, 
  Link as LinkIcon, 
  FileText,
  AlertCircle,
  CheckCircle,
  Activity
} from "lucide-react";

export default function ProjectDetail() {
  // Mock data
  const project = {
    name: "E-commerce Principal",
    domain: "example.com",
    status: "healthy",
    lastAudit: "2024-01-15"
  };

  const metrics = [
    { title: "Tráfico Orgánico", value: "245K", change: 12, trend: "up" as const, icon: <TrendingUp className="h-6 w-6" />, suffix: "/mes" },
    { title: "Domain Rank", value: "87", change: 3, trend: "up" as const, icon: <Activity className="h-6 w-6" /> },
    { title: "Keywords Top 10", value: "1,234", change: -5, trend: "down" as const, icon: <Search className="h-6 w-6" /> },
    { title: "Backlinks", value: "45.2K", change: 8, trend: "up" as const, icon: <LinkIcon className="h-6 w-6" /> },
  ];

  const recentIssues = [
    { severity: "critical", count: 3, label: "Críticos" },
    { severity: "warning", count: 15, label: "Advertencias" },
    { severity: "info", count: 42, label: "Informativos" },
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {project.name}
            </h1>
            <p className="text-muted-foreground mt-1 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {project.domain}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Exportar Reporte
            </Button>
            <Button>
              <Activity className="h-4 w-4 mr-2" />
              Nueva Auditoría
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="backlinks">Backlinks</TabsTrigger>
          <TabsTrigger value="content">Contenido</TabsTrigger>
          <TabsTrigger value="technical">Técnico</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Health Score */}
          <Card>
            <CardHeader>
              <CardTitle>Estado de Salud SEO</CardTitle>
              <CardDescription>Análisis general del sitio web</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Performance</span>
                  <span className="text-muted-foreground">92/100</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">SEO Score</span>
                  <span className="text-muted-foreground">85/100</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Accessibility</span>
                  <span className="text-muted-foreground">78/100</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Issues */}
          <Card>
            <CardHeader>
              <CardTitle>Issues Detectados</CardTitle>
              <CardDescription>Última auditoría: {project.lastAudit}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentIssues.map((issue, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      {issue.severity === "critical" && <AlertCircle className="h-5 w-5 text-destructive" />}
                      {issue.severity === "warning" && <AlertCircle className="h-5 w-5 text-warning" />}
                      {issue.severity === "info" && <CheckCircle className="h-5 w-5 text-muted-foreground" />}
                      <span className="font-medium">{issue.label}</span>
                    </div>
                    <Badge variant={issue.severity === "critical" ? "destructive" : "secondary"}>
                      {issue.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords">
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Keywords</CardTitle>
              <CardDescription>Seguimiento de posicionamiento de palabras clave</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contenido de keywords en desarrollo...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backlinks">
          <Card>
            <CardHeader>
              <CardTitle>Perfil de Backlinks</CardTitle>
              <CardDescription>Enlaces externos que apuntan a tu sitio</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contenido de backlinks en desarrollo...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Estrategia de Contenido</CardTitle>
              <CardDescription>Optimización y planificación de contenido</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contenido en desarrollo...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Auditoría Técnica</CardTitle>
              <CardDescription>Problemas técnicos y optimizaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Auditoría técnica en desarrollo...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
