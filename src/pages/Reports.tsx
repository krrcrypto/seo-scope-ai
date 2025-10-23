import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Send, Plus, Calendar } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      name: "Reporte Mensual - Enero 2024",
      type: "monthly",
      date: "2024-01-31",
      status: "completed",
      project: "E-commerce Principal"
    },
    {
      name: "Auditoría Técnica Completa",
      type: "audit",
      date: "2024-01-25",
      status: "completed",
      project: "Blog Corporativo"
    },
    {
      name: "Análisis de Competidores Q1",
      type: "competitor",
      date: "2024-01-20",
      status: "draft",
      project: "Todos los proyectos"
    },
  ];

  const templates = [
    {
      name: "Reporte Ejecutivo",
      description: "Resumen de alto nivel para stakeholders",
      icon: FileText
    },
    {
      name: "Reporte Técnico Completo",
      description: "Análisis detallado de todos los aspectos SEO",
      icon: FileText
    },
    {
      name: "Reporte de Rankings",
      description: "Seguimiento de posiciones de keywords",
      icon: FileText
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Reportes
            </h1>
            <p className="text-muted-foreground mt-1">
              Genera y gestiona reportes personalizados para tus clientes
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Reporte
          </Button>
        </div>

        {/* Templates */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Plantillas Disponibles</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {templates.map((template, i) => (
              <Card key={i} className="hover:shadow-glow transition-all cursor-pointer">
                <CardHeader>
                  <template.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Usar Plantilla
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Reportes Recientes</h2>
          <div className="space-y-4">
            {reports.map((report, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{report.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {report.project} • {report.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={report.status === "completed" ? "default" : "secondary"}>
                        {report.status === "completed" ? "Completado" : "Borrador"}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scheduled Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Reportes Programados</CardTitle>
            <CardDescription>Automatiza el envío de reportes periódicos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-lg border">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Reporte Mensual Automático</p>
                  <p className="text-sm text-muted-foreground">
                    Se envía el último día de cada mes a las 9:00 AM
                  </p>
                </div>
              </div>
              <Button variant="outline">Configurar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
