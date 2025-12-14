import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Globe } from "lucide-react";
import { useProject } from "@/contexts/ProjectContext";
import { toast } from "sonner";

interface CreateProjectDialogProps {
  trigger?: React.ReactNode;
}

export const CreateProjectDialog = ({ trigger }: CreateProjectDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const { addProject } = useProject();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !domain.trim()) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    addProject(name.trim(), domain.trim());
    toast.success(`Proyecto "${name}" creado exitosamente`);
    setName("");
    setDomain("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="gradient-primary shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Proyecto
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Crear Nuevo Proyecto
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre del proyecto</Label>
            <Input
              id="name"
              placeholder="Mi Sitio Web"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="domain">Dominio</Label>
            <Input
              id="domain"
              placeholder="ejemplo.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>
          <div className="flex gap-3 justify-end pt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="gradient-primary">
              Crear Proyecto
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
