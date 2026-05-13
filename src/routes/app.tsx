import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { getUser, logout } from "@/lib/auth";
import "@/styles/dashboard.css";

export const Route = createFileRoute("/app")({
  head: () => ({ meta: [{ title: "Tableau de bord — Tqui" }] }),
  component: AppLayout,
});

const NAV = [
  { to: "/app", label: "Vue d'ensemble", icon: "◇", exact: true },
  { to: "/app/profiles", label: "Mes profils", icon: "◉" },
  { to: "/app/templates", label: "Templates", icon: "▤" },
  { to: "/app/orders", label: "Commandes", icon: "▢" },
  { to: "/app/support", label: "Support", icon: "?" },
  { to: "/app/settings", label: "Paramètres", icon: "⚙" },
];

function AppLayout() {
  const nav = useNavigate();
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const u = getUser();
    if (!u) nav({ to: "/login" });
    else { setUser(u); setReady(true); }
  }, [nav]);

  useEffect(() => { setOpen(false); }, [path]);

  if (!ready) return <div style={{ minHeight: "100vh" }} />;

  return (
    <div className="dash">
      <aside className={`dash-side ${open ? "open" : ""}`}>
        <div className="dash-side-top">
          <Logo />
        </div>
        <nav className="dash-nav">
          {NAV.map((n) => {
            const active = n.exact ? path === n.to : path.startsWith(n.to);
            return (
              <Link key={n.to} to={n.to} className={`dash-nav-item ${active ? "active" : ""}`}>
                <span className="i">{n.icon}</span>{n.label}
              </Link>
            );
          })}
        </nav>
        <div className="dash-user">
          <div className="avatar-mini">{user?.name?.[0] ?? "A"}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user?.name}</div>
            <div style={{ fontSize: 11, color: "var(--muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user?.email}</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={() => { logout(); nav({ to: "/" }); }} title="Déconnexion">↗</button>
        </div>
      </aside>
      <div className="dash-main">
        <header className="dash-topbar">
          <button className="dash-burger" onClick={() => setOpen(!open)} aria-label="Menu">≡</button>
          <Logo />
          <span />
        </header>
        <main className="dash-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
