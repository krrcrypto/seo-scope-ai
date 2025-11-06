import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { BarChart3, Search, Link2, Zap, CheckCircle, AlertCircle } from "lucide-react";

export default function Integrations() {
  const integrations = [
    {
      name: "Google Search Console",
      description: "Importa datos de clicks, impresiones y posiciones desde GSC",
      icon: <Search className="h-8 w-8 text-primary" />,
      status: "connected",
      lastSync: "Hace 2 horas",
      features: ["Queries", "Páginas", "Países", "Dispositivos"],
    },
    {
      name: "Google Analytics",
      description: "Conecta GA4 para análisis de tráfico y conversiones",
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      status: "connected",
      lastSync: "Hace 30 minutos",
      features: ["Tráfico orgánico", "Conversiones", "Comportamiento", "Eventos"],
    },
    {
      name: "DataForSEO API",
      description: "Acceso a datos de SERP, keywords y backlinks",
      icon: <Link2 className="h-8 w-8 text-success" />,
      status: "connected",
      lastSync: "En tiempo real",
      features: ["SERP", "Keywords", "Backlinks", "On-Page"],
    },
    {
      name: "Zapier",
      description: "Automatiza workflows y reportes",
      icon: <Zap className="h-8 w-8 text-warning" />,
      status: "disconnected",
      lastSync: null,
      features: ["Webhooks", "Automatizaciones", "Reportes", "Alertas"],
    },
  ];

  const dataSync = [
    { source: "Google Search Console", items: "45,234 queries", status: "synced", date: "2024-01-15" },
    { source: "Google Analytics", items: "125,678 sesiones", status: "synced", date: "2024-01-15" },
    { source: "DataForSEO", items: "2,456 keywords", status: "syncing", date: "En progreso" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Integraciones
          </h1>
          <p className="text-muted-foreground mt-1">
            Conecta tus herramientas favoritas para un análisis completo
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {integrations.map((integration, i) => (
            <Card key={i} className="card-glass">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {integration.icon}
                    <div>
                      <CardTitle>{integration.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {integration.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant={integration.status === "connected" ? "default" : "secondary"}
                    className={
                      integration.status === "connected" ? "bg-success" : ""
                    }
                  >
                    {integration.status === "connected" ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Conectado
                      </>
                    ) : (
                      "Desconectado"
                    )}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {integration.features.map((feature, j) => (
                    <Badge key={j} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {integration.lastSync && (
                  <p className="text-sm text-muted-foreground">
                    Última sincronización: {integration.lastSync}
                  </p>
                )}

                <div className="flex gap-2">
                  {integration.status === "connected" ? (
                    <>
                      <Button variant="outline" className="flex-1">
                        Configurar
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Desconectar
                      </Button>
                    </>
                  ) : (
                    <Button className="w-full gradient-primary">
                      Conectar {integration.name}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sync Status */}
        <Card>
          <CardHeader>
            <CardTitle>Estado de Sincronización</CardTitle>
            <CardDescription>
              Últimas actualizaciones de datos desde integraciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dataSync.map((sync, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-3">
                    {sync.status === "synced" ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-warning animate-pulse" />
                    )}
                    <div>
                      <p className="font-medium">{sync.source}</p>
                      <p className="text-sm text-muted-foreground">{sync.items}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={sync.status === "synced" ? "default" : "secondary"}
                      className={sync.status === "synced" ? "bg-success" : ""}
                    >
                      {sync.status === "synced" ? "Sincronizado" : "Sincronizando..."}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">{sync.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Auto Sync Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Configuración de Sincronización</CardTitle>
            <CardDescription>
              Controla cuándo y cómo se actualizan tus datos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sincronización automática</p>
                <p className="text-sm text-muted-foreground">
                  Actualiza datos cada hora
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notificaciones de sincronización</p>
                <p className="text-sm text-muted-foreground">
                  Recibe alertas cuando los datos se actualicen
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Backup automático</p>
                <p className="text-sm text-muted-foreground">
                  Guarda copias de seguridad diariamente
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
