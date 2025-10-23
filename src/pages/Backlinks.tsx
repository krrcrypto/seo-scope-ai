import { Layout } from "@/components/Layout";
import { BacklinkCard } from "@/components/BacklinkCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link as LinkIcon, Download, Search, TrendingUp, ExternalLink } from "lucide-react";

export default function Backlinks() {
  const stats = [
    { label: "Total Backlinks", value: "45,234", change: "+8%" },
    { label: "Dominios Referencia", value: "3,456", change: "+12%" },
    { label: "Domain Authority", value: "67", change: "+3%" },
    { label: "Nuevos (30d)", value: "892", change: "+15%" },
  ];

  const mockBacklinks: Array<{
    url: string;
    domain: string;
    authority: number;
    anchorText: string;
    type: "dofollow" | "nofollow";
    firstSeen: string;
  }> = [
    {
      url: "https://techblog.com/seo-best-practices",
      domain: "techblog.com",
      authority: 78,
      anchorText: "SEO optimization tools",
      type: "dofollow",
      firstSeen: "2024-01-10"
    },
    {
      url: "https://marketinghub.io/digital-strategies",
      domain: "marketinghub.io",
      authority: 65,
      anchorText: "momentum seo platform",
      type: "dofollow",
      firstSeen: "2024-01-08"
    },
    {
      url: "https://news.example.com/tech-tools",
      domain: "news.example.com",
      authority: 82,
      anchorText: "read more",
      type: "nofollow",
      firstSeen: "2024-01-05"
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Backlinks Profile
            </h1>
            <p className="text-muted-foreground mt-1">
              Analiza y monitorea tu perfil de enlaces externos
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button>
              <ExternalLink className="h-4 w-4 mr-2" />
              Análisis Competidores
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardDescription>{stat.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-sm text-success flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="dofollow">Dofollow</TabsTrigger>
            <TabsTrigger value="nofollow">Nofollow</TabsTrigger>
            <TabsTrigger value="lost">Perdidos</TabsTrigger>
            <TabsTrigger value="opportunities">Oportunidades</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por dominio, URL o anchor text..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">Filtrar</Button>
              </div>
              </CardContent>
            </Card>

            {/* Backlinks List */}
            <div className="space-y-4">
              {mockBacklinks.map((backlink, i) => (
                <BacklinkCard key={i} {...backlink} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dofollow">
            <Card>
              <CardHeader>
                <CardTitle>Enlaces Dofollow</CardTitle>
                <CardDescription>Enlaces que transmiten autoridad</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contenido en desarrollo...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nofollow">
            <Card>
              <CardHeader>
                <CardTitle>Enlaces Nofollow</CardTitle>
                <CardDescription>Enlaces sin transmisión de autoridad</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contenido en desarrollo...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lost">
            <Card>
              <CardHeader>
                <CardTitle>Enlaces Perdidos</CardTitle>
                <CardDescription>Backlinks que ya no están activos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contenido en desarrollo...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities">
            <Card>
              <CardHeader>
                <CardTitle>Oportunidades de Link Building</CardTitle>
                <CardDescription>Sitios potenciales para conseguir backlinks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contenido en desarrollo...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
