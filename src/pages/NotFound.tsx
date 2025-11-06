import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold">Página no encontrada</h2>
          <p className="text-muted-foreground max-w-md">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button onClick={() => navigate(-1)} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver atrás
          </Button>
          <Button onClick={() => navigate("/")} className="gradient-primary">
            <Home className="h-4 w-4 mr-2" />
            Ir al Dashboard
          </Button>
        </div>
      </div>
    </Layout>
  );
}
