import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2, ExternalLink, Plus } from "lucide-react";
import { useProject } from "@/contexts/ProjectContext";
import { CreateProjectDialog } from "@/components/CreateProjectDialog";
import { toast } from "sonner";

const Projects = () => {
  const { projects, currentProject, setCurrentProject, deleteProject } = useProject();

  const handleDelete = (id: string, name: string) => {
    deleteProject(id);
    toast.success(`Proyecto "${name}" eliminado`);
  };

  return (
    <Layout>
      <div className="animate-in space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Proyectos</h1>
            <p className="text-muted-foreground">Gestiona todos tus proyectos AEO</p>
          </div>
          <CreateProjectDialog />
        </div>

        {projects.length > 0 && (
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar proyectos..."
                className="pl-10"
              />
            </div>
          </div>
        )}

        {projects.length === 0 ? (
          <Card className="card-glass p-12 text-center">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Plus className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Crea tu primer proyecto
              </h3>
              <p className="text-muted-foreground mb-6">
                Comienza agregando un dominio para analizar su visibilidad en motores de IA
              </p>
              <CreateProjectDialog
                trigger={
                  <Button className="gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Añadir Proyecto
                  </Button>
                }
              />
            </div>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`card-glass p-6 cursor-pointer transition-all hover:shadow-glow ${
                  currentProject?.id === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentProject(project)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{project.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ExternalLink className="h-3 w-3" />
                      {project.domain}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(project.id, project.name);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-xs text-muted-foreground">
                    Creado: {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                </div>
                {currentProject?.id === project.id && (
                  <div className="mt-3 px-2 py-1 bg-primary/10 rounded text-xs text-primary font-medium text-center">
                    Proyecto activo
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;
