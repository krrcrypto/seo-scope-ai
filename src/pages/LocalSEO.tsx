import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Phone, Globe, Clock, TrendingUp, Search } from "lucide-react";

export default function LocalSEO() {
  const businessData = {
    name: "Mi Negocio Local",
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    rating: 4.5,
    reviews: 234,
    category: "Restaurante",
    hours: "Lun-Dom: 9:00 - 22:00",
    isVerified: true
  };

  const competitors = [
    { name: "Competidor A", rating: 4.3, reviews: 189, distance: "0.5 km", category: "Restaurante" },
    { name: "Competidor B", rating: 4.7, reviews: 312, distance: "0.8 km", category: "Restaurante" },
    { name: "Competidor C", rating: 4.1, reviews: 145, distance: "1.2 km", category: "Restaurante" },
  ];

  const rankings = [
    { keyword: "restaurante madrid centro", position: 3, change: 2, volume: 1200 },
    { keyword: "mejor comida madrid", position: 7, change: -1, volume: 890 },
    { keyword: "restaurante familiar madrid", position: 5, change: 0, volume: 650 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SEO Local & Google Business
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitorea tu presencia en Google Maps y búsquedas locales
            </p>
          </div>
          <Button>
            <MapPin className="h-4 w-4 mr-2" />
            Actualizar Datos
          </Button>
        </div>

        {/* Business Profile Overview */}
        <Card className="card-glass">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {businessData.name}
                  {businessData.isVerified && (
                    <Badge variant="default" className="ml-2">Verificado</Badge>
                  )}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <MapPin className="h-4 w-4" />
                  {businessData.address}
                </CardDescription>
              </div>
              <Button variant="outline">Editar en GMB</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-2xl font-bold">{businessData.rating}</p>
                  <p className="text-sm text-muted-foreground">{businessData.reviews} reseñas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Teléfono</p>
                  <p className="text-sm text-muted-foreground">{businessData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Categoría</p>
                  <p className="text-sm text-muted-foreground">{businessData.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm font-medium">Horario</p>
                  <p className="text-sm text-muted-foreground">{businessData.hours}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="rankings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="rankings">Rankings Locales</TabsTrigger>
            <TabsTrigger value="competitors">Competidores</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="rankings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Posicionamiento Local</CardTitle>
                <CardDescription>Tus posiciones en búsquedas locales de Google</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {rankings.map((rank, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex-1">
                        <p className="font-medium">{rank.keyword}</p>
                        <p className="text-sm text-muted-foreground">Volumen: {rank.volume}/mes</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">Pos. {rank.position}</Badge>
                        {rank.change !== 0 && (
                          <div className={`flex items-center gap-1 ${rank.change > 0 ? 'text-success' : 'text-destructive'}`}>
                            <TrendingUp className={`h-4 w-4 ${rank.change < 0 ? 'rotate-180' : ''}`} />
                            <span className="text-sm font-medium">{Math.abs(rank.change)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Competidores Cercanos</CardTitle>
                <CardDescription>Negocios similares en tu área</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {competitors.map((comp, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                      <div>
                        <p className="font-medium">{comp.name}</p>
                        <p className="text-sm text-muted-foreground">{comp.category} • {comp.distance}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-warning fill-warning" />
                          <span className="font-medium">{comp.rating}</span>
                          <span className="text-sm text-muted-foreground">({comp.reviews})</span>
                        </div>
                        <Button variant="outline" size="sm">Analizar</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Búsquedas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">12.5K</p>
                  <p className="text-sm text-muted-foreground">Últimos 30 días</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Visualizaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">8.2K</p>
                  <p className="text-sm text-muted-foreground">En Maps</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Acciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">456</p>
                  <p className="text-sm text-muted-foreground">Clics al sitio web</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
