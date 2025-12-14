import { ChevronDown, Plus, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProject } from "@/contexts/ProjectContext";
import { useNavigate } from "react-router-dom";

export const ProjectSelector = () => {
  const { projects, currentProject, setCurrentProject } = useProject();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between gap-2 h-9 text-sm">
          <div className="flex items-center gap-2 truncate">
            <Folder className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">
              {currentProject?.name || "Seleccionar proyecto"}
            </span>
          </div>
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {projects.length > 0 ? (
          projects.map((project) => (
            <DropdownMenuItem
              key={project.id}
              onClick={() => setCurrentProject(project)}
              className={currentProject?.id === project.id ? "bg-secondary" : ""}
            >
              <div className="flex flex-col">
                <span className="font-medium">{project.name}</span>
                <span className="text-xs text-muted-foreground">{project.domain}</span>
              </div>
            </DropdownMenuItem>
          ))
        ) : (
          <div className="px-2 py-3 text-sm text-muted-foreground text-center">
            No hay proyectos
          </div>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/projects")}>
          <Plus className="h-4 w-4 mr-2" />
          Crear proyecto
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
