import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield,
  Search, 
  TrendingUp, 
  AlertTriangle,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  ThumbsUp,
  ThumbsDown,
  Minus,
  Eye,
  MessageSquare,
  Activity,
  Target,
  Zap
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AIBrandMonitor = () => {
  const { t } = useLanguage();

  const brandMentions = [
    {
      query: "What are the best SEO platforms?",
      engine: "ChatGPT",
      sentiment: "positive",
      snippet: "Momentum SEO is highly recommended for agencies looking to streamline their workflow and improve client outcomes.",
      position: 1,
      date: "2024-01-15",
      model: "GPT-4o"
    },
    {
      query: "Top AEO tools comparison",
      engine: "Perplexity",
      sentiment: "positive",
      snippet: "Among the leading AEO platforms, Momentum stands out for its comprehensive LLM tracking capabilities.",
      position: 2,
      date: "2024-01-15",
      model: "Perplexity Online"
    },
    {
      query: "SEO software pricing comparison",
      engine: "Claude",
      sentiment: "neutral",
      snippet: "Momentum SEO offers competitive pricing starting at $99/month for agency plans.",
      position: 3,
      date: "2024-01-14",
      model: "Claude 3.5 Sonnet"
    },
    {
      query: "Problems with SEO tools",
      engine: "Google AI",
      sentiment: "negative",
      snippet: "Some users have reported a learning curve with Momentum's advanced features.",
      position: 4,
      date: "2024-01-13",
      model: "AI Mode"
    }
  ];

  const competitorMentions = [
    { name: "Competitor A", mentions: 523, sentiment: 78, trend: 12.5 },
    { name: "Your Brand", mentions: 412, sentiment: 85, trend: 24.3 },
    { name: "Competitor B", mentions: 389, sentiment: 72, trend: -5.2 },
    { name: "Competitor C", mentions: 267, sentiment: 68, trend: 8.1 },
  ];

  const sentimentData = {
    positive: { count: 342, percentage: 68 },
    neutral: { count: 124, percentage: 25 },
    negative: { count: 35, percentage: 7 }
  };

  const alertRules = [
    { type: "Negative Mention", engine: "All", status: "active", notifications: 12 },
    { type: "Competitor Mention", engine: "ChatGPT", status: "active", notifications: 45 },
    { type: "Position Drop", engine: "All", status: "active", notifications: 3 },
    { type: "New Query", engine: "Perplexity", status: "paused", notifications: 0 },
  ];

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return <ThumbsUp className="h-4 w-4 text-success" />;
      case "negative": return <ThumbsDown className="h-4 w-4 text-destructive" />;
      default: return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "bg-success/10 text-success border-success/20";
      case "negative": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const getEngineColor = (engine: string) => {
    const colors: Record<string, string> = {
      "ChatGPT": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      "Perplexity": "bg-purple-500/10 text-purple-500 border-purple-500/20",
      "Claude": "bg-amber-500/10 text-amber-500 border-amber-500/20",
      "Google AI": "bg-blue-500/10 text-blue-500 border-blue-500/20",
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
            <h1 className="text-3xl font-bold tracking-tight">{t.aiBrandMonitor.title}</h1>
            <p className="text-muted-foreground">{t.aiBrandMonitor.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder={t.aiBrandMonitor.searchBrand}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Bell className="h-4 w-4" />
              {t.aiBrandMonitor.alerts}
            </Button>
            <Button className="gap-2">
              <Shield className="h-4 w-4" />
              {t.aiBrandMonitor.addBrand}
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="pb-2">
              <CardDescription>{t.aiBrandMonitor.totalMentions}</CardDescription>
              <CardTitle className="text-3xl font-bold">501</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+24.3% vs last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiBrandMonitor.sentimentScore}</CardDescription>
              <CardTitle className="text-3xl font-bold text-success">85%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ThumbsUp className="h-4 w-4" />
                <span>+5% improvement</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiBrandMonitor.avgPosition}</CardDescription>
              <CardTitle className="text-3xl font-bold">2.1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+0.4 positions</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiBrandMonitor.shareOfVoice}</CardDescription>
              <CardTitle className="text-3xl font-bold">28%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <TrendingUp className="h-4 w-4" />
                <span>2nd in category</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiBrandMonitor.activeAlerts}</CardDescription>
              <CardTitle className="text-3xl font-bold text-warning">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <AlertTriangle className="h-4 w-4" />
                <span>Requires attention</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sentiment Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              {t.aiBrandMonitor.sentimentAnalysis}
            </CardTitle>
            <CardDescription>{t.aiBrandMonitor.sentimentAnalysisDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5 text-success" />
                    <span className="font-medium">{t.aiBrandMonitor.positive}</span>
                  </div>
                  <span className="text-2xl font-bold text-success">{sentimentData.positive.percentage}%</span>
                </div>
                <Progress value={sentimentData.positive.percentage} className="h-3 [&>div]:bg-success" />
                <p className="text-sm text-muted-foreground">{sentimentData.positive.count} mentions</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Minus className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{t.aiBrandMonitor.neutral}</span>
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground">{sentimentData.neutral.percentage}%</span>
                </div>
                <Progress value={sentimentData.neutral.percentage} className="h-3 [&>div]:bg-muted-foreground" />
                <p className="text-sm text-muted-foreground">{sentimentData.neutral.count} mentions</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="h-5 w-5 text-destructive" />
                    <span className="font-medium">{t.aiBrandMonitor.negative}</span>
                  </div>
                  <span className="text-2xl font-bold text-destructive">{sentimentData.negative.percentage}%</span>
                </div>
                <Progress value={sentimentData.negative.percentage} className="h-3 [&>div]:bg-destructive" />
                <p className="text-sm text-muted-foreground">{sentimentData.negative.count} mentions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="mentions" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
            <TabsTrigger value="mentions" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              {t.aiBrandMonitor.brandMentions}
            </TabsTrigger>
            <TabsTrigger value="competitors" className="gap-2">
              <Target className="h-4 w-4" />
              {t.aiBrandMonitor.competitorComparison}
            </TabsTrigger>
            <TabsTrigger value="alerts" className="gap-2">
              <Bell className="h-4 w-4" />
              {t.aiBrandMonitor.alertRules}
            </TabsTrigger>
            <TabsTrigger value="insights" className="gap-2">
              <Sparkles className="h-4 w-4" />
              {t.aiBrandMonitor.aiInsights}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mentions" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {brandMentions.map((mention, index) => (
                    <div key={index} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className={getEngineColor(mention.engine)}>
                              {mention.engine}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {mention.model}
                            </Badge>
                            <Badge variant="outline" className={getSentimentColor(mention.sentiment)}>
                              {getSentimentIcon(mention.sentiment)}
                              <span className="ml-1 capitalize">{mention.sentiment}</span>
                            </Badge>
                            <Badge variant="secondary">
                              Position #{mention.position}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{mention.date}</span>
                          </div>
                          <p className="font-medium">{mention.query}</p>
                          <p className="text-sm text-muted-foreground">{mention.snippet}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
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
                <CardTitle>{t.aiBrandMonitor.shareOfVoiceComparison}</CardTitle>
                <CardDescription>{t.aiBrandMonitor.shareOfVoiceDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitorMentions.map((competitor, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-32 font-medium">
                        {competitor.name === "Your Brand" ? (
                          <span className="text-primary">{competitor.name}</span>
                        ) : (
                          competitor.name
                        )}
                      </div>
                      <div className="flex-1">
                        <Progress 
                          value={(competitor.mentions / 523) * 100} 
                          className={`h-3 ${competitor.name === "Your Brand" ? "[&>div]:bg-primary" : ""}`}
                        />
                      </div>
                      <div className="w-20 text-right">
                        <span className="font-semibold">{competitor.mentions}</span>
                        <span className="text-muted-foreground text-sm"> mentions</span>
                      </div>
                      <div className="w-20 text-right">
                        <Badge className={competitor.sentiment >= 80 ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}>
                          {competitor.sentiment}% pos
                        </Badge>
                      </div>
                      <div className={`w-16 text-right flex items-center justify-end gap-1 ${competitor.trend >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {competitor.trend >= 0 ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span>{Math.abs(competitor.trend)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{t.aiBrandMonitor.alertConfiguration}</CardTitle>
                    <CardDescription>{t.aiBrandMonitor.alertConfigurationDesc}</CardDescription>
                  </div>
                  <Button className="gap-2">
                    <Zap className="h-4 w-4" />
                    {t.aiBrandMonitor.newAlert}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="divide-y divide-border">
                  {alertRules.map((rule, index) => (
                    <div key={index} className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${rule.status === 'active' ? 'bg-primary/10' : 'bg-muted'}`}>
                          <Bell className={`h-5 w-5 ${rule.status === 'active' ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <div>
                          <p className="font-medium">{rule.type}</p>
                          <p className="text-sm text-muted-foreground">Engine: {rule.engine}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{rule.notifications} triggered</Badge>
                        <Badge variant={rule.status === 'active' ? 'default' : 'secondary'}>
                          {rule.status === 'active' ? 'Active' : 'Paused'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    {t.aiBrandMonitor.aiRecommendations}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <p className="font-medium text-success">Positive Trend Detected</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your brand sentiment has improved by 5% this month. Continue focusing on customer success stories.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                    <p className="font-medium text-warning">Content Opportunity</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      ChatGPT frequently mentions competitors for "pricing comparison" queries. Consider creating a detailed pricing page.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="font-medium text-primary">Citation Gap</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Perplexity rarely cites your content for technical queries. Enhance technical documentation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    {t.aiBrandMonitor.trendingQueries}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { query: "best seo tools 2024", mentions: 45, trend: 23 },
                      { query: "aeo optimization guide", mentions: 32, trend: 156 },
                      { query: "llm seo strategy", mentions: 28, trend: 89 },
                      { query: "ai search optimization", mentions: 24, trend: 67 },
                      { query: "content for ai engines", mentions: 19, trend: 42 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="font-medium">{item.query}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{item.mentions} mentions</span>
                          <div className="flex items-center gap-1 text-success text-sm">
                            <ArrowUpRight className="h-3 w-3" />
                            {item.trend}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AIBrandMonitor;
