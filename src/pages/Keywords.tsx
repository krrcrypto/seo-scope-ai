import { Layout } from "@/components/Layout";
import { KeywordTable } from "@/components/KeywordTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Plus, TrendingUp } from "lucide-react";

export default function Keywords() {
  const stats = [
    { label: "Total Keywords", value: "2,456", change: "+12%" },
    { label: "Top 3", value: "234", change: "+5%" },
    { label: "Top 10", value: "1,234", change: "+8%" },
    { label: "Top 50", value: "1,856", change: "+3%" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Keywords Tracking
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitorea y analiza el posicionamiento de tus palabras clave
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Añadir Keywords
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardDescription>{stat.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-sm text-success flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar keywords..."
                  className="w-full pl-10"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Posición" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="top3">Top 3</SelectItem>
                  <SelectItem value="top10">Top 10</SelectItem>
                  <SelectItem value="top50">Top 50</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="volume">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="volume">Volumen</SelectItem>
                  <SelectItem value="position">Posición</SelectItem>
                  <SelectItem value="change">Cambio</SelectItem>
                  <SelectItem value="difficulty">Dificultad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Keywords Table */}
        <KeywordTable />
      </div>
    </Layout>
  );
}
