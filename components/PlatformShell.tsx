import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  ["Overview", "/", "⌂", "overview"],
  ["My Verified Value", "/workspace/verified-value", "◇", "verified-value"],
  ["Instruments", "/workspace/instruments", "▤", "instruments"],
  ["Credits & Releases", "/workspace/credits-releases", "◎", "credits-releases"],
  ["Family", "/workspace/family", "♙", "family"],
  ["Documents", "/workspace/documents", "▱", "documents"],
  ["Messages", "/workspace/messages", "□", "messages"],
  ["History", "/workspace/history", "↺", "history"],
];

export default function PlatformShell({ current = "overview", title, kicker = "V2 Institutional Foundation", children }: { current?: string; title: string; kicker?: string; children: ReactNode }) {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <Link className="brand-lockup" href="/" aria-label="SAIN Family Capital Finance home">
          <div className="brand-emblem" aria-hidden="true"><span className="emblem-ring" /><span className="emblem-s">S</span></div>
          <div><p className="brand-name">SAIN</p><p className="brand-subtitle">Family Capital Finance</p></div>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map(([label, href, icon, key]) => (
            <Link className={current === key ? "nav-item active" : "nav-item"} href={href} key={key}>
              <span className="nav-icon" aria-hidden="true">{icon}</span><span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="ecosystem-card"><p>SAIN Ecosystem</p><div className="ecosystem-link muted-link">SAIN Finance</div><div className="ecosystem-link selected-link">Family Capital Finance</div></div>
      </aside>
      <section className="workspace">
        <header className="workspace-header">
          <div><p className="header-kicker">{kicker}</p><h1>{title}</h1></div>
          <Link className="member-header" href="/workspace/verified-value"><div className="member-copy"><strong>Primary Member</strong><span>Member workspace</span></div><div className="member-avatar" aria-hidden="true">M</div></Link>
        </header>
        {children}
      </section>
    </main>
  );
}
