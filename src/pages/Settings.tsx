import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Key, CreditCard, Users, Database } from "lucide-react";

export default function Settings() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Configuración
          </h1>
          <p className="text-muted-foreground mt-1">
            Administra tu cuenta y preferencias de la aplicación
          </p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="account">
              <User className="h-4 w-4 mr-2" />
              Cuenta
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notificaciones
            </TabsTrigger>
            <TabsTrigger value="api">
              <Key className="h-4 w-4 mr-2" />
              API Keys
            </TabsTrigger>
            <TabsTrigger value="billing">
              <CreditCard className="h-4 w-4 mr-2" />
              Facturación
            </TabsTrigger>
            <TabsTrigger value="team">
              <Users className="h-4 w-4 mr-2" />
              Equipo
            </TabsTrigger>
            <TabsTrigger value="integrations">
              <Database className="h-4 w-4 mr-2" />
              Integraciones
            </TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>Actualiza tu información de perfil</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Juan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Pérez" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Mi Agencia SEO" />
                </div>
                <Button>Guardar Cambios</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cambiar Contraseña</CardTitle>
                <CardDescription>Actualiza tu contraseña periódicamente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Contraseña Actual</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nueva Contraseña</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button>Actualizar Contraseña</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preferencias de Notificaciones</CardTitle>
                <CardDescription>Configura cómo y cuándo quieres recibir notificaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Alertas de Auditoría</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificaciones cuando se complete una auditoría
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cambios en Rankings</Label>
                    <p className="text-sm text-muted-foreground">
                      Alertas sobre cambios significativos en posiciones
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Reportes Semanales</Label>
                    <p className="text-sm text-muted-foreground">
                      Resumen semanal de todos tus proyectos
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Nuevos Backlinks</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificaciones sobre backlinks nuevos detectados
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Keys */}
          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Gestiona tus claves de API para integraciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>DataForSEO API Key</Label>
                  <div className="flex gap-2">
                    <Input type="password" value="••••••••••••••••" readOnly />
                    <Button variant="outline">Editar</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Momentum SEO API Key</Label>
                  <div className="flex gap-2">
                    <Input type="password" value="••••••••••••••••" readOnly />
                    <Button variant="outline">Regenerar</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Usa esta clave para acceder a la API de Momentum desde tus aplicaciones
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plan Actual</CardTitle>
                <CardDescription>Gestiona tu suscripción y métodos de pago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg border bg-primary/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Plan Professional</h3>
                      <p className="text-sm text-muted-foreground">$99/mes • Facturación mensual</p>
                    </div>
                    <Button variant="outline">Cambiar Plan</Button>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Método de Pago</h4>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <span className="text-sm">•••• •••• •••• 4242</span>
                    <Button variant="ghost" size="sm">Actualizar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Miembros del Equipo</CardTitle>
                <CardDescription>Invita y gestiona los miembros de tu equipo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="email@ejemplo.com" />
                  <Button>Invitar</Button>
                </div>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">Juan Pérez</p>
                      <p className="text-sm text-muted-foreground">juan@ejemplo.com • Admin</p>
                    </div>
                    <Button variant="ghost" size="sm">Gestionar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Integraciones Disponibles</CardTitle>
                <CardDescription>Conecta Momentum con tus herramientas favoritas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <p className="font-medium">Google Search Console</p>
                    <p className="text-sm text-muted-foreground">Importa datos directamente desde GSC</p>
                  </div>
                  <Button variant="outline">Conectar</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <p className="font-medium">Google Analytics</p>
                    <p className="text-sm text-muted-foreground">Sincroniza métricas de tráfico</p>
                  </div>
                  <Button variant="outline">Conectar</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <p className="font-medium">Slack</p>
                    <p className="text-sm text-muted-foreground">Recibe notificaciones en Slack</p>
                  </div>
                  <Button variant="outline">Conectar</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
