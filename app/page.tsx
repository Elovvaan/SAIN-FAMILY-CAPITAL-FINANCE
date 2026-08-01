import Link from "next/link";
import PlatformShell from "@/components/PlatformShell";

const prior = ["Person", "Will", "Purpose", "Ideas", "Action", "Work", "Creation", "Evidence"];
const post = ["Recording", "Custody", "Instrument", "Credits", "Release Cycles", "Discharge", "History"];
const lifecycle = [
  ["Issuance", "Instrument established"],
  ["Active Cycle", "Current life-stage period"],
  ["Verified Value", "Evidence accepted and recorded"],
  ["Credits & Release", "Authorized capital released"],
  ["Discharge", "Cycle formally completed"],
  ["Next Cycle", "New stage begins"],
];

export default function HomePage() {
  return (
    <PlatformShell title="Verified Value is the center.">
      <div className="dashboard-grid">
        <section className="member-card card">
          <div className="section-heading"><div><p className="eyebrow">Member Overview</p><h2>Individual first</h2></div><span className="verified-pill">Verified</span></div>
          <div className="profile-row"><div className="profile-avatar">M</div><div><strong>Primary Member</strong><p>Source of the instrument</p></div></div>
          <dl className="member-details"><div><dt>Member ID</dt><dd>M-0001258</dd></div><div><dt>Status</dt><dd>Active</dd></div><div><dt>Current role</dt><dd>Individual member</dd></div></dl>
          <Link className="outline-button link-button" href="/workspace/verified-value">Open member workspace</Link>
        </section>

        <section className="value-operating-model card">
          <div className="model-column prior-column"><p className="eyebrow">Prior</p><h2>Before Verified Value</h2><p className="support-copy">Life, energy, intention, work, and evidence remain with the person.</p><div className="compact-list">{prior.map((item) => <span key={item}>{item}</span>)}</div></div>
          <Link className="verified-center" href="/workspace/verified-value"><div className="value-seal"><span>Verified</span><strong>Value</strong></div><p>The point where the institution begins.</p></Link>
          <div className="model-column post-column"><p className="eyebrow">Post</p><h2>Institutional Operations</h2><p className="support-copy">The platform operates only after value is verified.</p><div className="compact-list post-list">{post.map((item) => <span key={item}>{item}</span>)}</div></div>
        </section>

        <aside className="summary-column">
          <section className="card family-summary"><div className="section-heading compact-heading"><div><p className="eyebrow">Family Summary</p><h2>Current structure</h2></div><Link className="text-button" href="/workspace/family">View</Link></div><div className="metric-row"><div><strong>1</strong><span>Member</span></div><div><strong>1</strong><span>Instrument</span></div><div><strong>0</strong><span>Linked family</span></div></div><p className="family-note">The platform begins with the individual and expands as life relationships are established.</p></section>
          <section className="card active-instrument"><div className="section-heading compact-heading"><div><p className="eyebrow">Active Instrument</p><h2>Family Capital Instrument</h2></div><span className="active-pill">Active</span></div><p className="instrument-id">FCI-0001258</p><div className="cycle-label"><span>Current cycle</span><strong>Cycle 1 · Establishment</strong></div><div className="progress-track"><span /></div><Link className="outline-button link-button" href="/workspace/instruments">View instrument</Link></section>
          <section className="card credit-card"><p className="eyebrow">Family Capital Credits</p><strong className="credit-total">0 FCC</strong><p>Credits are created and released only through the instrument’s verified cycle.</p><Link className="outline-button link-button" href="/workspace/credits-releases">Credits & releases</Link></section>
        </aside>
      </div>

      <section className="lifecycle card"><div className="section-heading lifecycle-heading"><div><p className="eyebrow">Family Capital Instrument Lifecycle</p><h2>One instrument. Repeating verified cycles.</h2></div><span className="foundation-badge"><i /> Railway live · V2</span></div><div className="flow">{lifecycle.map(([step, description], index) => <div className="flow-step" key={step}><span className="step-number">{index + 1}</span><strong>{step}</strong><p>{description}</p></div>)}</div></section>

      <section className="lower-grid">
        <section className="card workspace-card"><p className="eyebrow">Document Center</p><h2>Foundation records</h2><div className="record-row"><div><strong>V1 Platform Package</strong><span>Initial Family Capital Finance framework</span></div><span className="record-status">Recorded</span></div><div className="record-row"><div><strong>V2 Verified Value Center</strong><span>Institutional organizing principle</span></div><span className="record-status">Current</span></div><Link className="text-link" href="/workspace/documents">Open document center →</Link></section>
        <section className="card workspace-card"><p className="eyebrow">Discharge & History</p><h2>Cycle record</h2><div className="empty-state"><strong>No discharged cycles yet</strong><p>The first discharge will close Cycle 1 and authorize the next release cycle according to the instrument.</p></div><Link className="text-link" href="/workspace/history">Open history →</Link></section>
      </section>
    </PlatformShell>
  );
}
