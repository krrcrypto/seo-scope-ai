import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Target, TrendingUp, Link2 } from "lucide-react";

const Competitors = () => {
  return (
    <Layout>
      <div className="animate-in space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Análisis de Competencia
          </h1>
          <p className="text-muted-foreground">
            Descubre gaps de keywords y oportunidades de backlinks
          </p>
        </div>

        <Card className="card-glass p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Configurar Análisis
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Tu dominio
              </label>
              <Input placeholder="midominio.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Competidores (hasta 3)
              </label>
              <div className="space-y-2">
                <Input placeholder="competidor1.com" />
                <Input placeholder="competidor2.com" />
                <Input placeholder="competidor3.com" />
              </div>
            </div>
            <Button className="w-full gradient-primary">
              <Target className="h-4 w-4 mr-2" />
              Iniciar Análisis
            </Button>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Keyword Gap</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Descubre keywords por las que tus competidores rankean y tú no
            </p>
          </Card>

          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <Link2 className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-foreground">Backlink Gap</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Identifica dominios que enlazan a tus competidores pero no a ti
            </p>
          </Card>

          <Card className="card-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-5 w-5 text-success" />
              <h3 className="font-semibold text-foreground">Top Pages</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Analiza las páginas que más tráfico generan a tus competidores
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Competitors;
