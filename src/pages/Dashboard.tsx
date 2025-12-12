import { Layout } from "@/components/Layout";
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";
import { 
  TrendingUp, 
  Target,
  Plus,
  ArrowRight,
  Sparkles,
  Brain,
  MessageSquare,
  Cpu
} from "lucide-react";

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="animate-in space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {t.dashboard.title}
            </h1>
            <p className="text-muted-foreground">
              {t.dashboard.subtitle}
            </p>
          </div>
          <Button className="gradient-primary shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            {t.projects.newProject}
          </Button>
        </div>

        {/* AI Insight Banner */}
        <Card className="card-glass p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {t.dashboard.aiInsight}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {t.dashboard.aiInsightText}
              </p>
              <Button variant="outline" size="sm">
                {t.dashboard.runAnalysis}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title={t.dashboard.totalMentions}
            value="1.8K"
            change={23}
            trend="up"
            icon={<MessageSquare className="h-6 w-6" />}
          />
          <MetricCard
            title={t.dashboard.aiVisibility}
            value="78%"
            change={8}
            trend="up"
            icon={<Brain className="h-6 w-6" />}
          />
          <MetricCard
            title={t.dashboard.trackedKeywords}
            value="342"
            change={12}
            trend="up"
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <MetricCard
            title={t.dashboard.activeEngines}
            value={5}
            icon={<Cpu className="h-6 w-6" />}
          />
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t.dashboard.quickActions}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="card-glass p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 group">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t.dashboard.trackMentions}</h3>
                  <p className="text-sm text-muted-foreground">{t.dashboard.trackMentionsDesc}</p>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 group">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t.dashboard.aiKeywordResearch}</h3>
                  <p className="text-sm text-muted-foreground">{t.dashboard.aiKeywordResearchDesc}</p>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 group">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground transition-all">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t.dashboard.competitorAnalysis}</h3>
                  <p className="text-sm text-muted-foreground">{t.dashboard.competitorAnalysisDesc}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Mentions */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {t.dashboard.recentMentions}
            </h2>
            <Button variant="ghost">
              {t.common.viewAll}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <Card className="card-glass p-6">
            <div className="text-center py-8 text-muted-foreground">
              <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>{t.dashboard.mentionsTrend}</p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
