import PlatformShell from "@/components/PlatformShell";

const cycle = ["Issuance", "Establishment", "Verified cycle", "Credits & release", "Discharge"];

export default function InstrumentsPage() {
  return (
    <PlatformShell current="instruments" title="Family Capital Instruments" kicker="Instrument Issuance & Lifecycle">
      <div className="instrument-layout">
        <section className="card instrument-register">
          <div className="section-heading"><div><p className="eyebrow">Instrument Register</p><h2>Member instruments</h2></div><button className="primary-button compact-action">Create instrument</button></div>
          <article className="instrument-list-item active-instrument-row"><div><span className="instrument-code">FCI-0001258</span><strong>Family Capital Instrument</strong><p>Primary Member · Issued for repeating verified cycles</p></div><div><i className="active-pill">Active</i><button>Open</button></div></article>
          <div className="instrument-empty">No additional instruments issued.</div>
        </section>

        <section className="card instrument-face">
          <div className="instrument-banner"><span>SAIN Family Capital Finance</span><i>Active</i></div>
          <div className="instrument-title"><p>Family Capital Instrument</p><h2>FCI-0001258</h2></div>
          <div className="instrument-parties"><div><span>Member / beneficiary</span><strong>Primary Member</strong></div><div><span>Current cycle</span><strong>Cycle 1 · Establishment</strong></div><div><span>Issue status</span><strong>Recorded</strong></div><div><span>Verified basis</span><strong>V2 Foundation Record</strong></div></div>
          <div className="instrument-purpose"><span>Purpose</span><p>Provide structured family capital releases through verified cycles without merging the member’s individual value into the family structure.</p></div>
          <div className="instrument-actions"><button className="primary-button">Open instrument</button><button className="outline-button">View issuance package</button></div>
        </section>

        <section className="card cycle-board">
          <div className="section-heading"><div><p className="eyebrow">Cycle Schedule</p><h2>Instrument progression</h2></div><span className="verified-pill">Cycle 1</span></div>
          <div className="cycle-track">{cycle.map((name,i)=><div className={i<=1?"cycle-node complete":"cycle-node"} key={name}><span>{i+1}</span><strong>{name}</strong></div>)}</div>
          <div className="cycle-condition"><div><span>Current requirement</span><strong>Complete establishment records</strong></div><button className="outline-button compact-action">Review conditions</button></div>
        </section>

        <aside className="card issuance-panel">
          <p className="eyebrow">Issuance Package</p><h2>Required records</h2>
          {["Member identity", "Verified Value basis", "Instrument terms", "Cycle schedule", "Release conditions"].map((x,i)=><div className="check-row" key={x}><span className={i<2?"checked":""}>{i<2?"✓":""}</span><strong>{x}</strong></div>)}
          <button className="outline-button">Continue issuance</button>
        </aside>
      </div>
    </PlatformShell>
  );
}
