import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  TrendingDown,
  Target,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Users,
  Eye,
  Swords,
  Plus
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

const AICompetitors = () => {
  const { t } = useLanguage();

  const competitors = [
    {
      domain: "competitor1.com",
      aiVisibility: 87,
      change: 12.5,
      totalMentions: 847,
      topEngine: "ChatGPT",
      topQueries: 156,
      shareOfVoice: 28
    },
    {
      domain: "yoursite.com",
      aiVisibility: 72,
      change: 8.3,
      totalMentions: 623,
      topEngine: "Perplexity",
      topQueries: 124,
      shareOfVoice: 21,
      isYou: true
    },
    {
      domain: "competitor2.com",
      aiVisibility: 65,
      change: -3.2,
      totalMentions: 512,
      topEngine: "Google AI",
      topQueries: 98,
      shareOfVoice: 17
    },
    {
      domain: "competitor3.com",
      aiVisibility: 58,
      change: 5.7,
      totalMentions: 398,
      topEngine: "Claude",
      topQueries: 87,
      shareOfVoice: 13
    },
    {
      domain: "competitor4.com",
      aiVisibility: 45,
      change: -8.1,
      totalMentions: 287,
      topEngine: "ChatGPT",
      topQueries: 65,
      shareOfVoice: 10
    }
  ];

  const keywordGap = [
    {
      keyword: "AI content optimization guide",
      yourMentions: 0,
      competitorMentions: 23,
      topCompetitor: "competitor1.com",
      aiVolume: 8500,
      opportunity: "high"
    },
    {
      keyword: "how to rank in ChatGPT",
      yourMentions: 2,
      competitorMentions: 18,
      topCompetitor: "competitor2.com",
      aiVolume: 12300,
      opportunity: "high"
    },
    {
      keyword: "AEO strategy template",
      yourMentions: 5,
      competitorMentions: 15,
      topCompetitor: "competitor1.com",
      aiVolume: 5600,
      opportunity: "medium"
    },
    {
      keyword: "LLM SEO best practices",
      yourMentions: 8,
      competitorMentions: 12,
      topCompetitor: "competitor3.com",
      aiVolume: 7200,
      opportunity: "medium"
    }
  ];

  const getOpportunityBadge = (opp: string) => {
    if (opp === "high") return "bg-success/10 text-success border-success/20";
    if (opp === "medium") return "bg-warning/10 text-warning border-warning/20";
    return "bg-muted text-muted-foreground";
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t.aiCompetitors.title}</h1>
            <p className="text-muted-foreground">{t.aiCompetitors.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder={t.aiCompetitors.addCompetitor}
                className="pl-10 w-64"
              />
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              {t.common.add}
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="pb-2">
              <CardDescription>{t.aiCompetitors.yourVisibility}</CardDescription>
              <CardTitle className="text-3xl font-bold">72%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+8.3% vs last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiCompetitors.marketPosition}</CardDescription>
              <CardTitle className="text-3xl font-bold">#2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-success">
                <ArrowUpRight className="h-4 w-4" />
                <span>+1 position</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiCompetitors.shareOfVoice}</CardDescription>
              <CardTitle className="text-3xl font-bold">21%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={21} className="h-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>{t.aiCompetitors.keywordGapCount}</CardDescription>
              <CardTitle className="text-3xl font-bold">156</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Target className="h-4 w-4" />
                <span>{t.aiCompetitors.opportunities}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competitors Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Swords className="h-5 w-5 text-primary" />
              {t.aiCompetitors.aiVisibilityRanking}
            </CardTitle>
            <CardDescription>{t.aiCompetitors.aiVisibilityRankingDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead>{t.aiCompetitors.domain}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.aiVisibility}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.change}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.totalMentions}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.topEngine}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.shareOfVoice}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {competitors.map((comp, index) => (
                  <TableRow 
                    key={index} 
                    className={comp.isYou ? "bg-primary/5 border-l-2 border-l-primary" : ""}
                  >
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{comp.domain}</span>
                        {comp.isYou && (
                          <Badge variant="secondary" className="text-xs">You</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Progress value={comp.aiVisibility} className="w-20 h-2" />
                        <span className="font-semibold">{comp.aiVisibility}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className={`flex items-center justify-center gap-1 ${comp.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                        {comp.change >= 0 ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span>{Math.abs(comp.change)}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-medium">{comp.totalMentions}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">{comp.topEngine}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Progress value={comp.shareOfVoice} className="w-16 h-2" />
                        <span className="text-sm">{comp.shareOfVoice}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Keyword Gap Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {t.aiCompetitors.keywordGap}
            </CardTitle>
            <CardDescription>{t.aiCompetitors.keywordGapDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.aiCompetitors.keyword}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.yourMentions}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.competitorMentions}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.topCompetitor}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.aiVolume}</TableHead>
                  <TableHead className="text-center">{t.aiCompetitors.opportunity}</TableHead>
                  <TableHead className="text-center">{t.common.actions}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keywordGap.map((kw, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{kw.keyword}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={kw.yourMentions === 0 ? "destructive" : "secondary"}>
                        {kw.yourMentions}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center font-semibold text-primary">
                      {kw.competitorMentions}
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {kw.topCompetitor}
                    </TableCell>
                    <TableCell className="text-center">{kw.aiVolume.toLocaleString()}</TableCell>
                    <TableCell className="text-center">
                      <Badge className={getOpportunityBadge(kw.opportunity)}>
                        {kw.opportunity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Eye className="h-4 w-4" />
                        {t.aiCompetitors.analyze}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AICompetitors;