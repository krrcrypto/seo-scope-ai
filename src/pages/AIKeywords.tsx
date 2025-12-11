import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  TrendingUp, 
  Brain,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Zap,
  Target,
  Plus,
  Download
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AIKeywords = () => {
  const { t } = useLanguage();

  const keywordsData = [
    {
      keyword: "best project management tools",
      aiVolume: 45200,
      googleVolume: 12100,
      aiGrowth: 156,
      difficulty: 45,
      opportunity: 92,
      yourPosition: 2,
      topEngine: "ChatGPT"
    },
    {
      keyword: "how to optimize for AI search",
      aiVolume: 32800,
      googleVolume: 2400,
      aiGrowth: 284,
      difficulty: 32,
      opportunity: 95,
      yourPosition: 1,
      topEngine: "Perplexity"
    },
    {
      keyword: "AEO strategies 2024",
      aiVolume: 28500,
      googleVolume: 880,
      aiGrowth: 420,
      difficulty: 28,
      opportunity: 98,
      yourPosition: 3,
      topEngine: "Claude"
    },
    {
      keyword: "content optimization for LLMs",
      aiVolume: 22100,
      googleVolume: 390,
      aiGrowth: 312,
      difficulty: 35,
      opportunity: 89,
      yourPosition: null,
      topEngine: "Google AI"
    },
    {
      keyword: "semantic SEO best practices",
      aiVolume: 18700,
      googleVolume: 5600,
      aiGrowth: 78,
      difficulty: 52,
      opportunity: 76,
      yourPosition: 5,
      topEngine: "ChatGPT"
    },
  ];

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 30) return "text-success bg-success/10";
    if (difficulty < 60) return "text-warning bg-warning/10";
    return "text-destructive bg-destructive/10";
  };

  const getOpportunityColor = (opportunity: number) => {
    if (opportunity >= 90) return "text-success bg-success/10";
    if (opportunity >= 70) return "text-warning bg-warning/10";
    return "text-muted-foreground bg-muted";
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t.aiKeywords.title}</h1>
            <p className="text-muted-foreground">{t.aiKeywords.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              {t.common.export}
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              {t.aiKeywords.addKeywords}
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="pb-2">
              <CardDescription>{t.aiKeywords.trackedKeywords}</CardDescription>
              <CardTitle className="text-3xl font-bold">1,247</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+124 this month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiKeywords.avgAIVolume}</CardDescription>
              <CardTitle className="text-3xl font-bold">29.4K</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+42% vs Google</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiKeywords.opportunities}</CardDescription>
              <CardTitle className="text-3xl font-bold">342</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                <span>Score &gt; 80</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiKeywords.aiGrowthRate}</CardDescription>
              <CardTitle className="text-3xl font-bold">+187%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <TrendingUp className="h-4 w-4" />
                <span>YoY average</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              {t.aiKeywords.keywordResearch}
            </CardTitle>
            <CardDescription>{t.aiKeywords.keywordResearchDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder={t.aiKeywords.searchPlaceholder}
                  className="pl-10"
                />
              </div>
              <Button className="gap-2">
                <Sparkles className="h-4 w-4" />
                {t.aiKeywords.analyzeKeywords}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Keywords Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{t.aiKeywords.keywordAnalysis}</CardTitle>
                <CardDescription>{t.aiKeywords.keywordAnalysisDesc}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">{t.aiKeywords.keyword}</TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Brain className="h-4 w-4" />
                      {t.aiKeywords.aiVolume}
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Search className="h-4 w-4" />
                      {t.aiKeywords.googleVolume}
                    </div>
                  </TableHead>
                  <TableHead className="text-center">{t.aiKeywords.aiGrowth}</TableHead>
                  <TableHead className="text-center">{t.aiKeywords.difficulty}</TableHead>
                  <TableHead className="text-center">{t.aiKeywords.opportunityScore}</TableHead>
                  <TableHead className="text-center">{t.aiKeywords.yourPosition}</TableHead>
                  <TableHead className="text-center">{t.aiKeywords.topEngine}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keywordsData.map((kw, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{kw.keyword}</TableCell>
                    <TableCell className="text-center">
                      <span className="font-semibold text-primary">{formatNumber(kw.aiVolume)}</span>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {formatNumber(kw.googleVolume)}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1 text-success">
                        <ArrowUpRight className="h-4 w-4" />
                        <span>{kw.aiGrowth}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className={getDifficultyColor(kw.difficulty)}>
                        {kw.difficulty}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className={getOpportunityColor(kw.opportunity)}>
                        {kw.opportunity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {kw.yourPosition ? (
                        <Badge variant="secondary">#{kw.yourPosition}</Badge>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">{kw.topEngine}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* AI vs Traditional Comparison */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                {t.aiKeywords.aiVsTraditional}
              </CardTitle>
              <CardDescription>{t.aiKeywords.aiVsTraditionalDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{t.aiKeywords.aiSearchVolume}</span>
                  <span className="font-medium text-primary">147.3K</span>
                </div>
                <Progress value={75} className="h-3" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{t.aiKeywords.traditionalVolume}</span>
                  <span className="font-medium text-muted-foreground">21.4K</span>
                </div>
                <Progress value={25} className="h-3 [&>div]:bg-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                {t.aiKeywords.aiVsTraditionalNote}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                {t.aiKeywords.volumeByEngine}
              </CardTitle>
              <CardDescription>{t.aiKeywords.volumeByEngineDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "ChatGPT", volume: 52300, share: 35 },
                { name: "Perplexity", volume: 38200, share: 26 },
                { name: "Google AI", volume: 31400, share: 21 },
                { name: "Claude", volume: 18700, share: 13 },
                { name: "Gemini", volume: 7400, share: 5 },
              ].map((engine) => (
                <div key={engine.name} className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium">{engine.name}</div>
                  <div className="flex-1">
                    <Progress value={engine.share} className="h-2" />
                  </div>
                  <div className="w-16 text-right text-sm text-muted-foreground">
                    {formatNumber(engine.volume)}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AIKeywords;