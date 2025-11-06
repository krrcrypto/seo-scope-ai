import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, TrendingUp, MessageSquare, Globe, ThumbsUp, ThumbsDown, Minus, Search } from "lucide-react";

export default function BrandMonitoring() {
  const mentions = [
    {
      source: "TechBlog España",
      url: "https://techblog.es/review-momentum",
      title: "Review: Las mejores herramientas SEO de 2024",
      sentiment: "positive",
      date: "2024-01-15",
      type: "blog",
      excerpt: "Momentum SEO destaca por su enfoque en IA..."
    },
    {
      source: "ForoMarketing.com",
      url: "https://foromarketing.com/thread/12345",
      title: "¿Alguien ha probado Momentum SEO?",
      sentiment: "neutral",
      date: "2024-01-14",
      type: "forum",
      excerpt: "Busco opiniones sobre esta plataforma..."
    },
    {
      source: "Twitter @seoexpert",
      url: "https://twitter.com/seoexpert/status/123",
      title: "Tweet sobre Momentum",
      sentiment: "positive",
      date: "2024-01-13",
      type: "social",
      excerpt: "Impresionado con las capacidades de IA de @MomentumSEO"
    },
  ];

  const sentimentStats = {
    positive: 67,
    neutral: 25,
    negative: 8,
  };

  const aiMentions = [
    { engine: "ChatGPT", mentions: 15, trend: "up", change: 5 },
    { engine: "Claude", mentions: 8, trend: "up", change: 3 },
    { engine: "Gemini", mentions: 12, trend: "neutral", change: 0 },
    { engine: "Perplexity", mentions: 6, trend: "down", change: -2 },
  ];

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <ThumbsUp className="h-4 w-4 text-success" />;
      case "negative":
        return <ThumbsDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-success";
      case "negative":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Brand Monitoring & AI Mentions
            </h1>
            <p className="text-muted-foreground mt-1">
              Rastrea menciones de tu marca en la web y en motores de IA
            </p>
          </div>
          <Button>
            <Bell className="h-4 w-4 mr-2" />
            Configurar Alertas
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Menciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold">1,234</span>
                <span className="text-sm text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +15%
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Menciones Positivas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-success">{sentimentStats.positive}%</span>
                <ThumbsUp className="h-5 w-5 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Menciones en IA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold">41</span>
                <span className="text-sm text-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +8
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Reach Estimado</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">2.5M</span>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="mentions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="mentions">Menciones Web</TabsTrigger>
            <TabsTrigger value="ai">Menciones en IA</TabsTrigger>
            <TabsTrigger value="sentiment">Análisis de Sentimiento</TabsTrigger>
          </TabsList>

          <TabsContent value="mentions" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Menciones Recientes</CardTitle>
                    <CardDescription>Últimas referencias a tu marca en la web</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Filtrar por fuente..." className="w-64" />
                    <Button variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mentions.map((mention, i) => (
                    <div key={i} className="p-4 rounded-lg border space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{mention.source}</span>
                            <Badge variant="outline">{mention.type}</Badge>
                            {getSentimentIcon(mention.sentiment)}
                          </div>
                          <h4 className="font-semibold mb-1">{mention.title}</h4>
                          <p className="text-sm text-muted-foreground">{mention.excerpt}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                          {mention.date}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Ver Completo</Button>
                        <Button variant="outline" size="sm">Responder</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Menciones en Motores de IA</CardTitle>
                <CardDescription>
                  Cuántas veces tu marca es mencionada en respuestas de IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {aiMentions.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{item.engine}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.mentions} menciones últimos 30 días
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.trend === "up" && (
                          <Badge variant="default" className="bg-success">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +{item.change}
                          </Badge>
                        )}
                        {item.trend === "down" && (
                          <Badge variant="destructive">
                            <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                            {item.change}
                          </Badge>
                        )}
                        {item.trend === "neutral" && (
                          <Badge variant="secondary">
                            <Minus className="h-3 w-3 mr-1" />
                            {item.change}
                          </Badge>
                        )}
                        <Button variant="outline" size="sm">Ver Detalles</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sentiment" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-success/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <ThumbsUp className="h-5 w-5" />
                    Positivo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-success">{sentimentStats.positive}%</p>
                  <p className="text-sm text-muted-foreground mt-1">827 menciones</p>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-muted-foreground">
                    <Minus className="h-5 w-5" />
                    Neutral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{sentimentStats.neutral}%</p>
                  <p className="text-sm text-muted-foreground mt-1">309 menciones</p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <ThumbsDown className="h-5 w-5" />
                    Negativo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-destructive">{sentimentStats.negative}%</p>
                  <p className="text-sm text-muted-foreground mt-1">98 menciones</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
