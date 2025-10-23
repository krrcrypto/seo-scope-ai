import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Keyword {
  keyword: string;
  position: number;
  previousPosition: number;
  volume: number;
  difficulty: number;
  url: string;
  traffic: number;
}

export function KeywordTable() {
  const keywords: Keyword[] = [
    {
      keyword: "seo optimization tools",
      position: 3,
      previousPosition: 5,
      volume: 12500,
      difficulty: 68,
      url: "/blog/seo-tools",
      traffic: 450
    },
    {
      keyword: "best seo software",
      position: 7,
      previousPosition: 7,
      volume: 8900,
      difficulty: 72,
      url: "/products/seo-platform",
      traffic: 320
    },
    {
      keyword: "keyword research tool",
      position: 12,
      previousPosition: 9,
      volume: 15200,
      difficulty: 65,
      url: "/tools/keyword-research",
      traffic: 280
    },
    {
      keyword: "technical seo audit",
      position: 5,
      previousPosition: 8,
      volume: 6700,
      difficulty: 58,
      url: "/services/technical-audit",
      traffic: 195
    },
  ];

  const getPositionChange = (current: number, previous: number) => {
    const change = previous - current;
    if (change > 0) return { icon: TrendingUp, color: "text-success", value: `+${change}` };
    if (change < 0) return { icon: TrendingDown, color: "text-destructive", value: change };
    return { icon: Minus, color: "text-muted-foreground", value: "0" };
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty >= 70) return "destructive";
    if (difficulty >= 50) return "secondary";
    return "default";
  };

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Keyword</TableHead>
            <TableHead className="text-center">Posición</TableHead>
            <TableHead className="text-center">Cambio</TableHead>
            <TableHead className="text-right">Volumen</TableHead>
            <TableHead className="text-center">Dificultad</TableHead>
            <TableHead className="text-right">Tráfico Est.</TableHead>
            <TableHead>URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keywords.map((kw, i) => {
            const change = getPositionChange(kw.position, kw.previousPosition);
            const ChangeIcon = change.icon;
            
            return (
              <TableRow key={i}>
                <TableCell className="font-medium">{kw.keyword}</TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline">{kw.position}</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <span className={`flex items-center justify-center gap-1 ${change.color}`}>
                    <ChangeIcon className="h-3 w-3" />
                    {change.value}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {kw.volume.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant={getDifficultyColor(kw.difficulty)}>
                    {kw.difficulty}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {kw.traffic.toLocaleString()}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {kw.url}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
