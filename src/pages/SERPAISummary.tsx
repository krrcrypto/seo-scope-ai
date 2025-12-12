import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Search, 
  Sparkles,
  Link2,
  Quote,
  ListChecks,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Copy,
  Download,
  RefreshCw,
  Lightbulb,
  Target,
  CheckCircle2
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SERPAISummary = () => {
  const { t } = useLanguage();

  const summaryResult = {
    keyword: "how to optimize content for AI search engines",
    generatedSummary: `Content optimization for AI search engines requires a fundamentally different approach than traditional SEO. Here are the key strategies:

**1. Entity-First Content Structure**
Focus on clearly defining entities, their relationships, and providing comprehensive answers to user questions. AI engines prioritize content that demonstrates expertise and provides verifiable facts.

**2. Question-Answer Format**
Structure content around common questions users ask. Use clear headings, bullet points, and direct answers. AI engines favor content that directly addresses user intent.

**3. Citation-Worthy Content**
Create original research, data, and insights that AI engines can cite. Include statistics, case studies, and expert quotes that add credibility.

**4. Semantic Richness**
Use related terms, synonyms, and contextual language. AI engines understand semantic relationships and prefer content with rich, natural language.`,
    sources: [
      { url: "https://example.com/ai-seo-guide", title: "Complete AI SEO Guide 2024", position: 1 },
      { url: "https://example2.com/llm-optimization", title: "LLM Content Optimization", position: 2 },
      { url: "https://example3.com/aeo-strategies", title: "AEO Best Practices", position: 3 },
    ],
    entities: [
      { name: "AI search engines", type: "Technology", relevance: 95 },
      { name: "Content optimization", type: "Concept", relevance: 92 },
      { name: "SEO", type: "Industry", relevance: 88 },
      { name: "LLM", type: "Technology", relevance: 85 },
      { name: "User intent", type: "Concept", relevance: 78 },
    ],
    questions: [
      "What is the best way to optimize for AI search?",
      "How do AI engines differ from traditional search?",
      "What content formats work best for LLMs?",
      "How to measure AI search optimization success?",
      "What are the key ranking factors for AI engines?",
    ],
    recommendations: [
      { priority: "high", text: "Add FAQ schema markup to improve AI engine understanding" },
      { priority: "high", text: "Include original data and statistics in your content" },
      { priority: "medium", text: "Structure content with clear entity definitions" },
      { priority: "medium", text: "Add expert quotes and citations for credibility" },
      { priority: "low", text: "Optimize meta descriptions for AI summarization" },
    ]
  };

  const recentSummaries = [
    { keyword: "best project management tools", date: "2024-01-15", sources: 12 },
    { keyword: "how to improve website speed", date: "2024-01-14", sources: 8 },
    { keyword: "seo trends 2024", date: "2024-01-13", sources: 15 },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t.serpAISummary.title}</h1>
            <p className="text-muted-foreground">{t.serpAISummary.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              {t.serpAISummary.history}
            </Button>
          </div>
        </div>

        {/* Search Input */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              {t.serpAISummary.generateSummary}
            </CardTitle>
            <CardDescription>{t.serpAISummary.generateSummaryDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder={t.serpAISummary.keywordPlaceholder}
                  className="pl-10"
                  defaultValue="how to optimize content for AI search engines"
                />
              </div>
              <Button className="gap-2">
                <Sparkles className="h-4 w-4" />
                {t.serpAISummary.analyze}
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.serpAISummary.customPrompt}</label>
              <Textarea 
                placeholder={t.serpAISummary.promptPlaceholder}
                className="min-h-[80px]"
                defaultValue="Summarize the top-ranking content for this query and identify the key topics, entities, and questions covered. Focus on actionable insights."
              />
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      {t.serpAISummary.aiGeneratedSummary}
                    </CardTitle>
                    <CardDescription>
                      {t.serpAISummary.basedOn} {summaryResult.sources.length} {t.serpAISummary.topSources}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div className="whitespace-pre-line text-sm text-foreground">
                    {summaryResult.generatedSummary}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for detailed analysis */}
            <Tabs defaultValue="sources" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="sources" className="gap-2">
                  <Link2 className="h-4 w-4" />
                  {t.serpAISummary.sources}
                </TabsTrigger>
                <TabsTrigger value="entities" className="gap-2">
                  <Target className="h-4 w-4" />
                  {t.serpAISummary.entities}
                </TabsTrigger>
                <TabsTrigger value="questions" className="gap-2">
                  <HelpCircle className="h-4 w-4" />
                  {t.serpAISummary.questions}
                </TabsTrigger>
                <TabsTrigger value="recommendations" className="gap-2">
                  <Lightbulb className="h-4 w-4" />
                  {t.serpAISummary.recommendations}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sources">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {summaryResult.sources.map((source, index) => (
                        <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <span className="font-bold text-primary">#{source.position}</span>
                            </div>
                            <div>
                              <p className="font-medium">{source.title}</p>
                              <p className="text-sm text-muted-foreground">{source.url}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-1">
                            {t.serpAISummary.viewPage}
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="entities">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {summaryResult.entities.map((entity, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-40">
                            <p className="font-medium">{entity.name}</p>
                            <Badge variant="secondary" className="text-xs">{entity.type}</Badge>
                          </div>
                          <div className="flex-1">
                            <Progress value={entity.relevance} className="h-2" />
                          </div>
                          <div className="w-16 text-right text-sm font-medium">
                            {entity.relevance}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="questions">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {summaryResult.questions.map((question, index) => (
                        <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <HelpCircle className="h-5 w-5 text-primary" />
                            <span className="font-medium">{question}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            {t.serpAISummary.generateAnswer}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations">
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {summaryResult.recommendations.map((rec, index) => (
                        <div key={index} className={`flex items-start gap-3 p-3 rounded-lg border ${
                          rec.priority === 'high' 
                            ? 'border-destructive/20 bg-destructive/5' 
                            : rec.priority === 'medium'
                            ? 'border-warning/20 bg-warning/5'
                            : 'border-border bg-muted/50'
                        }`}>
                          <CheckCircle2 className={`h-5 w-5 mt-0.5 ${
                            rec.priority === 'high' 
                              ? 'text-destructive' 
                              : rec.priority === 'medium'
                              ? 'text-warning'
                              : 'text-muted-foreground'
                          }`} />
                          <div className="flex-1">
                            <p className="font-medium">{rec.text}</p>
                            <Badge variant="secondary" className="mt-1 text-xs capitalize">
                              {rec.priority} priority
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.serpAISummary.analysisStats}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t.serpAISummary.sourcesAnalyzed}</span>
                  <span className="font-bold">{summaryResult.sources.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t.serpAISummary.entitiesFound}</span>
                  <span className="font-bold">{summaryResult.entities.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t.serpAISummary.questionsIdentified}</span>
                  <span className="font-bold">{summaryResult.questions.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t.serpAISummary.recommendationsCount}</span>
                  <span className="font-bold">{summaryResult.recommendations.length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Content Score */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  {t.serpAISummary.contentGapScore}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary">73</div>
                  <p className="text-sm text-muted-foreground">{t.serpAISummary.outOf100}</p>
                </div>
                <Progress value={73} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  {t.serpAISummary.gapScoreDesc}
                </p>
              </CardContent>
            </Card>

            {/* Recent Summaries */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.serpAISummary.recentSummaries}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {recentSummaries.map((summary, index) => (
                    <div key={index} className="p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                      <p className="font-medium text-sm">{summary.keyword}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{summary.date}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{summary.sources} sources</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SERPAISummary;
