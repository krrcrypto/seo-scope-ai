import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, FileText, Brain, Target, CheckCircle, AlertCircle } from "lucide-react";

export default function ContentOptimizer() {
  const aiRecommendations = [
    {
      type: "structure",
      priority: "high",
      title: "Agregar sección de FAQ",
      description: "Los motores de IA priorizan contenido en formato pregunta-respuesta",
      impact: "Alto"
    },
    {
      type: "entity",
      priority: "medium",
      title: "Incluir entidades relacionadas",
      description: "Menciona: 'optimización', 'algoritmo', 'machine learning'",
      impact: "Medio"
    },
    {
      type: "depth",
      priority: "high",
      title: "Expandir sección técnica",
      description: "Contenido actual: 450 palabras. Recomendado: 800+ palabras",
      impact: "Alto"
    },
  ];

  const contentScore = {
    overall: 72,
    readability: 85,
    aiOptimization: 68,
    seoTraditional: 79,
    entityCoverage: 65,
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Optimizador de Contenido para IA
            </h1>
            <p className="text-muted-foreground mt-1">
              Optimiza tu contenido para ser citado por motores de IA
            </p>
          </div>
          <Button className="gradient-primary">
            <Sparkles className="h-4 w-4 mr-2" />
            Analizar con IA
          </Button>
        </div>

        {/* Score Overview */}
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="border-primary">
            <CardHeader className="pb-2">
              <CardDescription>Score General</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{contentScore.overall}</p>
              <p className="text-xs text-muted-foreground mt-1">de 100</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Legibilidad</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">{contentScore.readability}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Optimización IA</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-warning">{contentScore.aiOptimization}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>SEO Tradicional</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">{contentScore.seoTraditional}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Cobertura Entidades</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-warning">{contentScore.entityCoverage}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Tu Contenido
              </CardTitle>
              <CardDescription>
                Pega tu contenido o URL para análisis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  URL o Título del Artículo
                </label>
                <Input placeholder="https://tudominio.com/articulo" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Contenido Principal
                </label>
                <Textarea
                  placeholder="Pega aquí el contenido de tu artículo..."
                  className="min-h-[300px]"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Keyword Objetivo
                </label>
                <Input placeholder="seo con inteligencia artificial" />
              </div>
              <Button className="w-full gradient-primary">
                <Brain className="h-4 w-4 mr-2" />
                Analizar Contenido
              </Button>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Recomendaciones IA
              </CardTitle>
              <CardDescription>
                Mejoras sugeridas para optimización en motores de IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiRecommendations.map((rec, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg border ${
                      rec.priority === "high" ? "border-primary/50 bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {rec.priority === "high" ? (
                          <AlertCircle className="h-4 w-4 text-primary" />
                        ) : (
                          <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        )}
                        <h4 className="font-semibold">{rec.title}</h4>
                      </div>
                      <Badge
                        variant={rec.priority === "high" ? "default" : "secondary"}
                      >
                        Impacto {rec.impact}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {rec.description}
                    </p>
                    <Button size="sm" variant="outline">
                      Aplicar Sugerencia
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Tabs */}
        <Tabs defaultValue="entities" className="space-y-4">
          <TabsList>
            <TabsTrigger value="entities">Entidades</TabsTrigger>
            <TabsTrigger value="questions">Preguntas PAA</TabsTrigger>
            <TabsTrigger value="competitors">Competidores</TabsTrigger>
          </TabsList>

          <TabsContent value="entities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Entidades Detectadas</CardTitle>
                <CardDescription>
                  Entidades semánticas identificadas en tu contenido vs. competencia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">inteligencia artificial</Badge>
                  <Badge variant="default">machine learning</Badge>
                  <Badge variant="default">SEO</Badge>
                  <Badge variant="outline">optimización (falta)</Badge>
                  <Badge variant="outline">algoritmo (falta)</Badge>
                  <Badge variant="outline">ranking (falta)</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>People Also Ask</CardTitle>
                <CardDescription>
                  Preguntas relacionadas que deberías responder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg border">
                    <p className="font-medium">¿Qué es el SEO con IA?</p>
                    <Button variant="link" size="sm" className="px-0">
                      Generar respuesta con IA
                    </Button>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <p className="font-medium">¿Cómo optimizar para ChatGPT?</p>
                    <Button variant="link" size="sm" className="px-0">
                      Generar respuesta con IA
                    </Button>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <p className="font-medium">¿Cuáles son las mejores herramientas SEO?</p>
                    <Button variant="link" size="sm" className="px-0">
                      Generar respuesta con IA
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Competencia</CardTitle>
                <CardDescription>
                  Contenido que está siendo citado por motores de IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ingresa URLs de competidores para analizar...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
