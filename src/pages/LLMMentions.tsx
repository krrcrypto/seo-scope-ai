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
  TrendingUp, 
  Globe, 
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  FileText,
  Building2
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LLMMentions = () => {
  const { t } = useLanguage();

  const mentionsData = [
    {
      query: "best project management software",
      engine: "ChatGPT",
      position: 1,
      snippet: "Momentum is widely recognized as one of the leading...",
      url: "https://momentum.com/features",
      date: "2024-01-15",
      sentiment: "positive"
    },
    {
      query: "SEO tools for agencies",
      engine: "Google AI Overview",
      position: 2,
      snippet: "For agencies, tools like Momentum SEO provide...",
      url: "https://momentum.com/agencies",
      date: "2024-01-14",
      sentiment: "positive"
    },
    {
      query: "AEO optimization tools",
      engine: "Perplexity",
      position: 1,
      snippet: "Momentum specializes in Answer Engine Optimization...",
      url: "https://momentum.com/aeo",
      date: "2024-01-13",
      sentiment: "positive"
    },
    {
      query: "keyword research tools comparison",
      engine: "Claude",
      position: 3,
      snippet: "When comparing tools, Momentum offers unique AI...",
      url: "https://momentum.com/keywords",
      date: "2024-01-12",
      sentiment: "neutral"
    }
  ];

  const topDomains = [
    { domain: "competitor1.com", mentions: 847, change: 12.5 },
    { domain: "yoursite.com", mentions: 623, change: -5.2 },
    { domain: "competitor2.com", mentions: 412, change: 8.3 },
    { domain: "competitor3.com", mentions: 298, change: 2.1 },
  ];

  const topPages = [
    { page: "/ultimate-guide-seo", mentions: 234, queries: 45 },
    { page: "/how-to-optimize-for-ai", mentions: 189, queries: 32 },
    { page: "/aeo-strategy-2024", mentions: 156, queries: 28 },
  ];

  const engineStats = [
    { name: "ChatGPT", mentions: 342, share: 35, color: "bg-emerald-500" },
    { name: "Google AI", mentions: 287, share: 29, color: "bg-blue-500" },
    { name: "Perplexity", mentions: 198, share: 20, color: "bg-purple-500" },
    { name: "Claude", mentions: 98, share: 10, color: "bg-amber-500" },
    { name: "Gemini", mentions: 58, share: 6, color: "bg-rose-500" },
  ];

  const getEngineColor = (engine: string) => {
    const colors: Record<string, string> = {
      "ChatGPT": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      "Google AI Overview": "bg-blue-500/10 text-blue-500 border-blue-500/20",
      "Perplexity": "bg-purple-500/10 text-purple-500 border-purple-500/20",
      "Claude": "bg-amber-500/10 text-amber-500 border-amber-500/20",
      "Gemini": "bg-rose-500/10 text-rose-500 border-rose-500/20",
    };
    return colors[engine] || "bg-muted text-muted-foreground";
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t.llmMentions.title}</h1>
            <p className="text-muted-foreground">{t.llmMentions.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder={t.llmMentions.searchPlaceholder}
                className="pl-10 w-80"
              />
            </div>
            <Button className="gap-2">
              <Brain className="h-4 w-4" />
              {t.llmMentions.trackMention}
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="pb-2">
              <CardDescription>{t.llmMentions.totalMentions}</CardDescription>
              <CardTitle className="text-3xl font-bold">983</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+15.3% vs last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.llmMentions.uniqueQueries}</CardDescription>
              <CardTitle className="text-3xl font-bold">247</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+8.7%</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.llmMentions.avgPosition}</CardDescription>
              <CardTitle className="text-3xl font-bold">2.4</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+0.3 positions</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.llmMentions.aiEngines}</CardDescription>
              <CardTitle className="text-3xl font-bold">5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1">
                {["ChatGPT", "Google AI", "Perplexity", "Claude", "Gemini"].map((engine, i) => (
                  <div key={i} className="h-2 w-2 rounded-full bg-primary" title={engine} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Engine Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              {t.llmMentions.engineDistribution}
            </CardTitle>
            <CardDescription>{t.llmMentions.engineDistributionDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engineStats.map((engine) => (
                <div key={engine.name} className="flex items-center gap-4">
                  <div className="w-24 font-medium">{engine.name}</div>
                  <div className="flex-1">
                    <Progress value={engine.share} className="h-3" />
                  </div>
                  <div className="w-20 text-right text-sm text-muted-foreground">
                    {engine.mentions} ({engine.share}%)
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs Content */}
        <Tabs defaultValue="mentions" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
            <TabsTrigger value="mentions" className="gap-2">
              <Sparkles className="h-4 w-4" />
              {t.llmMentions.recentMentions}
            </TabsTrigger>
            <TabsTrigger value="domains" className="gap-2">
              <Building2 className="h-4 w-4" />
              {t.llmMentions.topDomains}
            </TabsTrigger>
            <TabsTrigger value="pages" className="gap-2">
              <FileText className="h-4 w-4" />
              {t.llmMentions.topPages}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mentions" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {mentionsData.map((mention, index) => (
                    <div key={index} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={getEngineColor(mention.engine)}>
                              {mention.engine}
                            </Badge>
                            <Badge variant="secondary">
                              Position #{mention.position}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{mention.date}</span>
                          </div>
                          <p className="font-medium">{mention.query}</p>
                          <p className="text-sm text-muted-foreground">{mention.snippet}</p>
                          <a 
                            href={mention.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            {mention.url}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="domains" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {topDomains.map((domain, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{domain.domain}</p>
                          <p className="text-sm text-muted-foreground">
                            {domain.mentions} {t.llmMentions.mentions}
                          </p>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 ${domain.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {domain.change >= 0 ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span className="font-medium">{Math.abs(domain.change)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{page.page}</p>
                          <p className="text-sm text-muted-foreground">
                            {page.queries} unique queries
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">{page.mentions} mentions</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LLMMentions;