import Link from "next/link";
import { notFound } from "next/navigation";
import PlatformShell from "@/components/PlatformShell";

type WorkspaceConfig = {
  title: string;
  kicker: string;
  summary: string;
  actions: string[];
  records: { label: string; value: string; status?: string }[];
};

const workspaces: Record<string, WorkspaceConfig> = {
  "verified-value": {
    title: "My Verified Value",
    kicker: "Member Workspace",
    summary: "Review the member’s verified-value record, supporting evidence, and the recognition status that authorizes institutional activity.",
    actions: ["Submit evidence", "Review verification", "Open member record"],
    records: [
      { label: "Member", value: "Primary Member", status: "Active" },
      { label: "Verified Value records", value: "1 foundational record", status: "Verified" },
      { label: "Current source", value: "Individual member" },
      { label: "Evidence status", value: "Foundation evidence recorded" },
    ],
  },
  instruments: {
    title: "Instruments",
    kicker: "Financial Instrument Workspace",
    summary: "Create, review, and manage Family Capital Instruments and the verified cycles operating under each instrument.",
    actions: ["Create instrument", "Open active instrument", "Review issuance package"],
    records: [
      { label: "Active instrument", value: "FCI-0001258", status: "Active" },
      { label: "Instrument type", value: "Family Capital Instrument" },
      { label: "Current cycle", value: "Cycle 1 · Establishment" },
      { label: "Next event", value: "Verified cycle activation" },
    ],
  },
  "credits-releases": {
    title: "Credits & Releases",
    kicker: "Capital Release Workspace",
    summary: "Track Family Capital Credits, release authorizations, cycle conditions, and completed discharges.",
    actions: ["Review release conditions", "Open credit ledger", "Prepare discharge"],
    records: [
      { label: "Available credits", value: "0 FCC", status: "Pending cycle" },
      { label: "Authorized releases", value: "0" },
      { label: "Current release cycle", value: "Cycle 1 · Establishment" },
      { label: "Discharges", value: "0 completed" },
    ],
  },
  family: {
    title: "Family",
    kicker: "Relationship Workspace",
    summary: "Link members into family structures without merging or reducing each person’s individual instrument and verified-value history.",
    actions: ["Add family member", "Create relationship", "View family structure"],
    records: [
      { label: "Members", value: "1", status: "Individual first" },
      { label: "Linked family", value: "0" },
      { label: "Household relationships", value: "None established" },
      { label: "Family instruments", value: "1 individual instrument" },
    ],
  },
  documents: {
    title: "Documents",
    kicker: "Institutional Document Center",
    summary: "Access foundation records, instrument documents, evidence packages, release packages, and discharge records.",
    actions: ["Upload document", "Create record", "Open foundation package"],
    records: [
      { label: "V1 Platform Package", value: "Initial platform framework", status: "Recorded" },
      { label: "V2 Verified Value Center", value: "Current institutional foundation", status: "Current" },
      { label: "Instrument documents", value: "Issuance record pending" },
      { label: "Evidence packages", value: "1 foundational package" },
    ],
  },
  messages: {
    title: "Messages",
    kicker: "Member Communications",
    summary: "Institutional notices, verification requests, instrument updates, release notices, and discharge communications appear here.",
    actions: ["New message", "View notices", "Open requests"],
    records: [
      { label: "Unread messages", value: "0", status: "Current" },
      { label: "Verification requests", value: "0" },
      { label: "Instrument notices", value: "1 foundation notice" },
      { label: "Release notices", value: "0" },
    ],
  },
  history: {
    title: "History",
    kicker: "Lifecycle Record",
    summary: "Review the permanent history of verified-value recognition, instrument events, credits, releases, and discharged cycles.",
    actions: ["View event timeline", "Export history", "Review discharge record"],
    records: [
      { label: "Foundation established", value: "V2 Verified Value Center", status: "Recorded" },
      { label: "Instrument events", value: "1 issuance event" },
      { label: "Credit events", value: "0" },
      { label: "Discharged cycles", value: "0" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(workspaces).map((section) => ({ section }));
}

export default async function WorkspacePage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const config = workspaces[section];
  if (!config) notFound();

  return (
    <PlatformShell current={section} title={config.title} kicker={config.kicker}>
      <div className="workspace-page-grid">
        <section className="card workspace-intro">
          <p className="eyebrow">Active Workspace</p>
          <h2>{config.title}</h2>
          <p>{config.summary}</p>
          <div className="workspace-actions">
            {config.actions.map((action, index) => <button className={index === 0 ? "primary-button" : "outline-button"} key={action}>{action}</button>)}
          </div>
        </section>

        <section className="card workspace-records">
          <div className="section-heading"><div><p className="eyebrow">Current Records</p><h2>Workspace status</h2></div><span className="active-pill">Live</span></div>
          <div className="record-grid">
            {config.records.map((record) => (
              <article className="record-card" key={record.label}>
                <span>{record.label}</span><strong>{record.value}</strong>{record.status && <i>{record.status}</i>}
              </article>
            ))}
          </div>
        </section>

        <section className="card workflow-space">
          <div><p className="eyebrow">Workflow Space</p><h2>Next institutional actions</h2></div>
          <div className="workflow-list">
            {config.actions.map((action, index) => <div className="workflow-row" key={action}><span>{index + 1}</span><div><strong>{action}</strong><p>Open this action inside the {config.title.toLowerCase()} workflow.</p></div><button>Open</button></div>)}
          </div>
        </section>

        <Link className="back-link" href="/">← Return to overview</Link>
      </div>
    </PlatformShell>
  );
}
