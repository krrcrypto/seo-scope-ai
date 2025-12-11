import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Search, 
  MessageSquare,
  Sparkles,
  ExternalLink,
  Play,
  Clock,
  CheckCircle2,
  AlertCircle,
  Bot,
  Zap
} from "lucide-react";

const AIEngines = () => {
  const { t } = useLanguage();

  const engines = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      icon: "🤖",
      status: "active",
      models: ["GPT-4o", "GPT-4 Turbo", "GPT-3.5 Turbo"],
      lastQuery: "2 mins ago",
      queriesTotal: 1247,
      mentionsFound: 342,
      description: t.aiEngines.chatgptDesc
    },
    {
      id: "claude",
      name: "Claude",
      icon: "🧠",
      status: "active",
      models: ["Claude 3.5 Sonnet", "Claude 3 Opus", "Claude 3 Haiku"],
      lastQuery: "5 mins ago",
      queriesTotal: 856,
      mentionsFound: 198,
      description: t.aiEngines.claudeDesc
    },
    {
      id: "gemini",
      name: "Google Gemini",
      icon: "✨",
      status: "active",
      models: ["Gemini 1.5 Pro", "Gemini 1.5 Flash"],
      lastQuery: "8 mins ago",
      queriesTotal: 634,
      mentionsFound: 156,
      description: t.aiEngines.geminiDesc
    },
    {
      id: "perplexity",
      name: "Perplexity",
      icon: "🔍",
      status: "active",
      models: ["Perplexity Online", "Perplexity Pro"],
      lastQuery: "3 mins ago",
      queriesTotal: 945,
      mentionsFound: 287,
      description: t.aiEngines.perplexityDesc
    },
    {
      id: "googleai",
      name: "Google AI Overview",
      icon: "🌐",
      status: "active",
      models: ["AI Mode SERP"],
      lastQuery: "1 min ago",
      queriesTotal: 1523,
      mentionsFound: 423,
      description: t.aiEngines.googleAIDesc
    }
  ];

  const recentQueries = [
    {
      query: "What are the best SEO tools for small businesses?",
      engine: "ChatGPT",
      status: "completed",
      mentions: 3,
      timestamp: "2024-01-15 14:32"
    },
    {
      query: "How to optimize content for AI search engines?",
      engine: "Perplexity",
      status: "completed",
      mentions: 2,
      timestamp: "2024-01-15 14:28"
    },
    {
      query: "Best practices for Answer Engine Optimization",
      engine: "Claude",
      status: "processing",
      mentions: null,
      timestamp: "2024-01-15 14:25"
    },
    {
      query: "SEO trends 2024",
      engine: "Google AI",
      status: "completed",
      mentions: 1,
      timestamp: "2024-01-15 14:20"
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t.aiEngines.title}</h1>
            <p className="text-muted-foreground">{t.aiEngines.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Clock className="h-4 w-4" />
              {t.aiEngines.queryHistory}
            </Button>
            <Button className="gap-2">
              <MessageSquare className="h-4 w-4" />
              {t.aiEngines.newQuery}
            </Button>
          </div>
        </div>

        {/* AI Query Input */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              {t.aiEngines.multiEngineQuery}
            </CardTitle>
            <CardDescription>{t.aiEngines.multiEngineQueryDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder={t.aiEngines.queryPlaceholder}
                  className="pl-10"
                />
              </div>
              <Button className="gap-2">
                <Play className="h-4 w-4" />
                {t.aiEngines.runQuery}
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {engines.map((engine) => (
                <Badge 
                  key={engine.id} 
                  variant="secondary" 
                  className="gap-1 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span>{engine.icon}</span>
                  {engine.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Engines Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {engines.map((engine) => (
            <Card key={engine.id} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl">
                      {engine.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{engine.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {engine.lastQuery}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    {t.aiEngines.active}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{engine.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {engine.models.map((model, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {model}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
                  <div>
                    <p className="text-2xl font-bold">{engine.queriesTotal}</p>
                    <p className="text-xs text-muted-foreground">{t.aiEngines.totalQueries}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{engine.mentionsFound}</p>
                    <p className="text-xs text-muted-foreground">{t.aiEngines.mentionsFound}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2">
                  <Bot className="h-4 w-4" />
                  {t.aiEngines.queryEngine}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Queries */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              {t.aiEngines.recentQueries}
            </CardTitle>
            <CardDescription>{t.aiEngines.recentQueriesDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border">
              {recentQueries.map((query, index) => (
                <div key={index} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{query.query}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">{query.engine}</Badge>
                        <span>•</span>
                        <span>{query.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {query.status === "completed" ? (
                      <>
                        <Badge variant="secondary">
                          {query.mentions} {t.aiEngines.mentions}
                        </Badge>
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      </>
                    ) : (
                      <Badge variant="outline" className="gap-1">
                        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                        {t.aiEngines.processing}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AIEngines;