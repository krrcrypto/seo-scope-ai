import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, AlertCircle } from "lucide-react";

interface ProjectCardProps {
  name: string;
  domain: string;
  status: "healthy" | "warning" | "critical";
  organicTraffic: number;
  domainRank: number;
  backlinks: number;
  lastAudit?: string;
}

export const ProjectCard = ({
  name,
  domain,
  status,
  organicTraffic,
  domainRank,
  backlinks,
  lastAudit,
}: ProjectCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "healthy":
        return "bg-success/10 text-success border-success/20";
      case "warning":
        return "bg-warning/10 text-warning border-warning/20";
      case "critical":
        return "bg-destructive/10 text-destructive border-destructive/20";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "healthy":
        return "Saludable";
      case "warning":
        return "Atención";
      case "critical":
        return "Crítico";
    }
  };

  return (
    <Card className="card-glass p-6 transition-all hover:shadow-lg group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <a
            href={`https://${domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mt-1"
          >
            {domain}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <Badge className={getStatusColor()}>
          {status === "critical" && <AlertCircle className="h-3 w-3 mr-1" />}
          {getStatusText()}
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground">Tráfico Org.</p>
          <p className="text-lg font-semibold text-foreground mt-1">
            {organicTraffic.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Domain Rank</p>
          <p className="text-lg font-semibold text-foreground mt-1">{domainRank}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Backlinks</p>
          <p className="text-lg font-semibold text-foreground mt-1">
            {backlinks.toLocaleString()}
          </p>
        </div>
      </div>

      {lastAudit && (
        <p className="text-xs text-muted-foreground mb-4">
          Última auditoría: {lastAudit}
        </p>
      )}

      <Button className="w-full" variant="outline">
        <TrendingUp className="h-4 w-4 mr-2" />
        Ver Detalles
      </Button>
    </Card>
  );
};
