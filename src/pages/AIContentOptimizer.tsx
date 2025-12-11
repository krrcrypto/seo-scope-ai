import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Search, 
  Sparkles,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Brain,
  Lightbulb,
  Target,
  BookOpen,
  MessageSquare,
  Wand2,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AIContentOptimizer = () => {
  const { t } = useLanguage();

  const aiScores = {
    overall: 72,
    citability: 68,
    entityCoverage: 85,
    questionAnswering: 74,
    factualAccuracy: 89,
    structuredData: 45
  };

  const recommendations = [
    {
      type: "critical",
      title: t.aiContentOptimizer.addStructuredData,
      description: t.aiContentOptimizer.addStructuredDataDesc,
      impact: "high"
    },
    {
      type: "warning",
      title: t.aiContentOptimizer.expandEntityCoverage,
      description: t.aiContentOptimizer.expandEntityCoverageDesc,
      impact: "medium"
    },
    {
      type: "suggestion",
      title: t.aiContentOptimizer.addFAQSection,
      description: t.aiContentOptimizer.addFAQSectionDesc,
      impact: "medium"
    },
    {
      type: "suggestion",
      title: t.aiContentOptimizer.includeCitations,
      description: t.aiContentOptimizer.includeCitationsDesc,
      impact: "low"
    }
  ];

  const entities = [
    { name: "Answer Engine Optimization", status: "found", relevance: 95 },
    { name: "AI Search", status: "found", relevance: 88 },
    { name: "ChatGPT", status: "found", relevance: 82 },
    { name: "Content Optimization", status: "missing", relevance: 90 },
    { name: "SERP Features", status: "missing", relevance: 75 },
    { name: "Knowledge Graph", status: "partial", relevance: 70 }
  ];

  const questions = [
    { question: "What is Answer Engine Optimization?", answered: true },
    { question: "How does AEO differ from SEO?", answered: true },
    { question: "How to optimize for AI search engines?", answered: false },
    { question: "What tools are best for AEO?", answered: false },
    { question: "How do LLMs select sources?", answered: true }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "critical": return <XCircle className="h-5 w-5 text-destructive" />;
      case "warning": return <AlertCircle className="h-5 w-5 text-warning" />;
      default: return <Lightbulb className="h-5 w-5 text-primary" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t.aiContentOptimizer.title}</h1>
            <p className="text-muted-foreground">{t.aiContentOptimizer.subtitle}</p>
          </div>
          <Button className="gap-2">
            <Wand2 className="h-4 w-4" />
            {t.aiContentOptimizer.generateBrief}
          </Button>
        </div>

        {/* URL Analysis Input */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              {t.aiContentOptimizer.analyzeContent}
            </CardTitle>
            <CardDescription>{t.aiContentOptimizer.analyzeContentDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder={t.aiContentOptimizer.urlPlaceholder}
                  className="pl-10"
                />
              </div>
              <Button className="gap-2">
                <Sparkles className="h-4 w-4" />
                {t.common.analyze}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Optimization Scores */}
        <div className="grid gap-4 md:grid-cols-6">
          <Card className="md:col-span-2 border-primary/20">
            <CardHeader className="text-center pb-2">
              <CardDescription>{t.aiContentOptimizer.overallScore}</CardDescription>
              <CardTitle className={`text-5xl font-bold ${getScoreColor(aiScores.overall)}`}>
                {aiScores.overall}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={aiScores.overall} className="h-3" />
            </CardContent>
          </Card>
          
          {[
            { key: "citability", label: t.aiContentOptimizer.citability, score: aiScores.citability },
            { key: "entityCoverage", label: t.aiContentOptimizer.entityCoverage, score: aiScores.entityCoverage },
            { key: "questionAnswering", label: t.aiContentOptimizer.questionAnswering, score: aiScores.questionAnswering },
            { key: "structuredData", label: t.aiContentOptimizer.structuredData, score: aiScores.structuredData },
          ].map((item) => (
            <Card key={item.key}>
              <CardHeader className="pb-2">
                <CardDescription className="text-xs">{item.label}</CardDescription>
                <CardTitle className={`text-2xl font-bold ${getScoreColor(item.score)}`}>
                  {item.score}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={item.score} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Analysis Tabs */}
        <Tabs defaultValue="recommendations" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
            <TabsTrigger value="recommendations" className="gap-2">
              <Lightbulb className="h-4 w-4" />
              {t.aiContentOptimizer.recommendations}
            </TabsTrigger>
            <TabsTrigger value="entities" className="gap-2">
              <Target className="h-4 w-4" />
              {t.aiContentOptimizer.entities}
            </TabsTrigger>
            <TabsTrigger value="questions" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              {t.aiContentOptimizer.questions}
            </TabsTrigger>
            <TabsTrigger value="brief" className="gap-2">
              <BookOpen className="h-4 w-4" />
              {t.aiContentOptimizer.contentBrief}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t.aiContentOptimizer.aiRecommendations}</CardTitle>
                <CardDescription>{t.aiContentOptimizer.aiRecommendationsDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    {getTypeIcon(rec.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{rec.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {rec.impact} impact
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1">
                      {t.aiContentOptimizer.fix}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="entities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t.aiContentOptimizer.entityAnalysis}</CardTitle>
                <CardDescription>{t.aiContentOptimizer.entityAnalysisDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {entities.map((entity, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border border-border"
                    >
                      <div className="flex items-center gap-3">
                        {entity.status === "found" && <CheckCircle2 className="h-5 w-5 text-success" />}
                        {entity.status === "missing" && <XCircle className="h-5 w-5 text-destructive" />}
                        {entity.status === "partial" && <AlertCircle className="h-5 w-5 text-warning" />}
                        <span className="font-medium">{entity.name}</span>
                      </div>
                      <Badge variant="secondary">{entity.relevance}%</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t.aiContentOptimizer.questionsCovered}</CardTitle>
                <CardDescription>{t.aiContentOptimizer.questionsCoveredDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {questions.map((q, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border border-border"
                    >
                      <div className="flex items-center gap-3">
                        {q.answered ? (
                          <CheckCircle2 className="h-5 w-5 text-success" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive" />
                        )}
                        <span>{q.question}</span>
                      </div>
                      {!q.answered && (
                        <Button variant="outline" size="sm" className="gap-1">
                          <Wand2 className="h-4 w-4" />
                          {t.aiContentOptimizer.generateAnswer}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="brief" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                  {t.aiContentOptimizer.aiContentBrief}
                </CardTitle>
                <CardDescription>{t.aiContentOptimizer.aiContentBriefDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.aiContentOptimizer.targetKeyword}</label>
                  <Input placeholder={t.aiContentOptimizer.targetKeywordPlaceholder} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.aiContentOptimizer.contentGoal}</label>
                  <Textarea 
                    placeholder={t.aiContentOptimizer.contentGoalPlaceholder}
                    rows={3}
                  />
                </div>
                <Button className="w-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  {t.aiContentOptimizer.generateAIBrief}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AIContentOptimizer;