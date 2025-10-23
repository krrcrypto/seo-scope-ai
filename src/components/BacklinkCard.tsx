import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Link as LinkIcon } from "lucide-react";

interface BacklinkCardProps {
  url: string;
  domain: string;
  authority: number;
  anchorText: string;
  type: "dofollow" | "nofollow";
  firstSeen: string;
}

export function BacklinkCard({ url, domain, authority, anchorText, type, firstSeen }: BacklinkCardProps) {
  const getAuthorityColor = (auth: number) => {
    if (auth >= 70) return "text-success";
    if (auth >= 50) return "text-warning";
    return "text-muted-foreground";
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            {/* Domain and Authority */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <LinkIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{domain}</h3>
                  <Badge variant={type === "dofollow" ? "default" : "secondary"}>
                    {type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Authority: <span className={`font-medium ${getAuthorityColor(authority)}`}>{authority}</span>
                </p>
              </div>
            </div>

            {/* URL */}
            <div className="pl-[52px]">
              <p className="text-sm text-muted-foreground break-all">{url}</p>
            </div>

            {/* Anchor Text */}
            <div className="pl-[52px] flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Anchor:</span>
              <code className="px-2 py-1 rounded bg-muted text-sm">{anchorText}</code>
            </div>

            {/* First Seen */}
            <div className="pl-[52px] text-xs text-muted-foreground">
              Detectado: {new Date(firstSeen).toLocaleDateString('es-ES', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
          </div>

          {/* Actions */}
          <Button variant="ghost" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
