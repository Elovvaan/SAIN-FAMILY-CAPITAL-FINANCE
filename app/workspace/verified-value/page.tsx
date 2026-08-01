import PlatformShell from "@/components/PlatformShell";

const stages = [
  ["1", "Source activity", "The member identifies the work, act, milestone, or creation."],
  ["2", "Evidence submitted", "Documents, records, and supporting proof enter review."],
  ["3", "Verification review", "The institution tests completeness and recognition criteria."],
  ["4", "Verified Value record", "Accepted value becomes available to institutional workflows."],
];

export default function VerifiedValuePage() {
  return (
    <PlatformShell current="verified-value" title="My Verified Value" kicker="Member Recognition Workspace">
      <div className="vv-layout">
        <section className="card vv-profile">
          <p className="eyebrow">Value Source</p>
          <div className="vv-person"><div className="profile-avatar">M</div><div><h2>Primary Member</h2><p>M-0001258 · Active individual member</p></div></div>
          <div className="vv-source-note"><strong>The person remains the source.</strong><span>The institution begins only when value is verified.</span></div>
          <button className="primary-button">Submit new evidence</button>
        </section>

        <section className="card vv-pipeline">
          <div className="section-heading"><div><p className="eyebrow">Recognition Pipeline</p><h2>From activity to Verified Value</h2></div><span className="active-pill">1 active record</span></div>
          <div className="vv-stage-grid">{stages.map(([n,t,d],i)=><article className={i===3?"vv-stage current":"vv-stage"} key={t}><span>{n}</span><strong>{t}</strong><p>{d}</p></article>)}</div>
        </section>

        <section className="card vv-evidence">
          <div className="section-heading"><div><p className="eyebrow">Evidence Inbox</p><h2>Items awaiting recognition</h2></div><button className="outline-button compact-action">Add evidence</button></div>
          <div className="evidence-table">
            <div className="evidence-head"><span>Record</span><span>Type</span><span>Status</span><span>Action</span></div>
            <div className="evidence-row"><strong>V2 Verified Value Center</strong><span>Foundation record</span><i className="record-status">Verified</i><button>Open</button></div>
            <div className="evidence-row muted-row"><strong>No pending evidence</strong><span>—</span><span>Current</span><button>Submit</button></div>
          </div>
        </section>

        <aside className="card vv-ledger">
          <p className="eyebrow">Recognition Ledger</p><h2>Current record</h2>
          <dl><div><dt>Status</dt><dd>Verified</dd></div><div><dt>Source</dt><dd>Individual member</dd></div><div><dt>Evidence</dt><dd>Foundation package</dd></div><div><dt>Institutional use</dt><dd>Instrument issuance</dd></div></dl>
          <button className="outline-button">Open full record</button>
        </aside>
      </div>
    </PlatformShell>
  );
}
