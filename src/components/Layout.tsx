import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import { 
  LayoutDashboard, 
  Layers, 
  FileSearch, 
  Target, 
  Zap,
  MapPin,
  Bell,
  FileText,
  Youtube,
  Plug,
  Settings
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t.nav.dashboard, href: "/", icon: LayoutDashboard },
    { name: t.nav.projects, href: "/projects", icon: Layers },
    { name: t.nav.aeoHub, href: "/aeo", icon: Zap },
    { name: t.nav.audit, href: "/audit", icon: FileSearch },
    { name: t.nav.competitors, href: "/competitors", icon: Target },
    { name: t.nav.localSeo, href: "/local-seo", icon: MapPin },
    { name: t.nav.brandMonitoring, href: "/brand-monitoring", icon: Bell },
    { name: t.nav.contentOptimizer, href: "/content-optimizer", icon: FileText },
    { name: t.nav.youtubeSeo, href: "/youtube-seo", icon: Youtube },
    { name: t.nav.integrations, href: "/integrations", icon: Plug },
    { name: t.nav.settings, href: "/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Momentum
                  </h1>
                  <p className="text-xs text-muted-foreground">SEO Platform</p>
                </div>
              </div>
              <LanguageSelector />
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="border-t border-border p-4">
              <div className="rounded-lg bg-muted p-3">
                <p className="text-xs font-medium text-foreground">
                  {t.footer.apiStatus}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-muted-foreground">
                    {t.footer.connected}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pl-64">
          <div className="container mx-auto py-8 px-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
