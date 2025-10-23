import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

const Projects = () => {
  return (
    <Layout>
      <div className="animate-in space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Proyectos</h1>
            <p className="text-muted-foreground">Gestiona todos tus proyectos SEO</p>
          </div>
          <Button className="gradient-primary shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Proyecto
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar proyectos..."
              className="pl-10"
            />
          </div>
        </div>

        <Card className="card-glass p-12 text-center">
          <div className="mx-auto max-w-md">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
              <Plus className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Crea tu primer proyecto
            </h3>
            <p className="text-muted-foreground mb-6">
              Comienza agregando un dominio para analizar su rendimiento SEO
            </p>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Añadir Proyecto
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Projects;
