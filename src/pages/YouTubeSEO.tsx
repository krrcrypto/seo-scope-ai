import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Youtube, TrendingUp, Eye, ThumbsUp, MessageSquare, Play, Search } from "lucide-react";

export default function YouTubeSEO() {
  const videoStats = [
    { label: "Videos Rankeados", value: "45", change: "+5" },
    { label: "Views Totales", value: "125K", change: "+12%" },
    { label: "Engagement", value: "8.5%", change: "+1.2%" },
    { label: "Suscriptores", value: "12.3K", change: "+234" },
  ];

  const trackedVideos = [
    {
      title: "Cómo hacer SEO en 2024",
      url: "https://youtube.com/watch?v=123",
      keyword: "seo 2024",
      position: 3,
      views: 45200,
      likes: 1230,
      comments: 89,
      change: 2,
    },
    {
      title: "Tutorial Completo de SEO Local",
      url: "https://youtube.com/watch?v=456",
      keyword: "seo local tutorial",
      position: 7,
      views: 23100,
      likes: 567,
      comments: 45,
      change: -1,
    },
  ];

  const keywordOpportunities = [
    { keyword: "seo para principiantes", volume: 8900, difficulty: "baja", videos: 12 },
    { keyword: "optimizar youtube", volume: 6700, difficulty: "media", videos: 45 },
    { keyword: "marketing digital 2024", volume: 12400, difficulty: "alta", videos: 89 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              YouTube SEO
            </h1>
            <p className="text-muted-foreground mt-1">
              Optimiza y rastrea tus videos en YouTube
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Youtube className="h-4 w-4 mr-2" />
              Conectar Canal
            </Button>
            <Button>
              <Play className="h-4 w-4 mr-2" />
              Añadir Video
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-4">
          {videoStats.map((stat, i) => (
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

        {/* Main Tabs */}
        <Tabs defaultValue="videos" className="space-y-6">
          <TabsList>
            <TabsTrigger value="videos">Mis Videos</TabsTrigger>
            <TabsTrigger value="opportunities">Oportunidades</TabsTrigger>
            <TabsTrigger value="competitors">Competidores</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Videos Rastreados</CardTitle>
                    <CardDescription>Seguimiento de ranking y métricas</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Buscar video..." className="w-64" />
                    <Button variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackedVideos.map((video, i) => (
                    <div key={i} className="p-4 rounded-lg border space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{video.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Keyword objetivo: <span className="font-medium">{video.keyword}</span>
                          </p>
                        </div>
                        <Badge variant="secondary">Pos. {video.position}</Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{video.views.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">Views</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{video.likes}</p>
                            <p className="text-xs text-muted-foreground">Likes</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{video.comments}</p>
                            <p className="text-xs text-muted-foreground">Comentarios</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Ver en YouTube</Button>
                        <Button variant="outline" size="sm">Optimizar</Button>
                        <Button variant="outline" size="sm">Historial</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Oportunidades de Keywords</CardTitle>
                <CardDescription>
                  Keywords con buen volumen y competencia manejable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {keywordOpportunities.map((opp, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex-1">
                        <p className="font-medium">{opp.keyword}</p>
                        <p className="text-sm text-muted-foreground">
                          {opp.videos} videos en top 10
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm font-medium">{opp.volume.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">búsquedas/mes</p>
                        </div>
                        <Badge
                          variant={
                            opp.difficulty === "baja"
                              ? "default"
                              : opp.difficulty === "media"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {opp.difficulty}
                        </Badge>
                        <Button size="sm">Crear Video</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Competidores</CardTitle>
                <CardDescription>Canales que compiten por las mismas keywords</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input placeholder="Agregar canal competidor..." />
                  <p className="text-sm text-muted-foreground">
                    Agrega canales de YouTube para analizar su estrategia de contenido
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
