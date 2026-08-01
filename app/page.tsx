const prior = ["Person", "Will", "Purpose", "Ideas", "Action", "Work", "Creation", "Evidence"];
const post = ["Recording", "Custody", "Instrument", "Credits", "Release Cycles", "Discharge", "History"];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true">SF</div>
          <div>
            <p className="brand-name">SAIN</p>
            <p className="brand-subtitle">Family Capital Finance</p>
          </div>
        </div>
        <p className="topline">Verified Value Is the Center</p>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">V2 Institutional Foundation</p>
          <h1>Individual-first family capital infrastructure.</h1>
          <p className="lede">
            The member remains the source. The institution begins at Verified Value and operates through instruments,
            credits, release cycles, and discharge.
          </p>
        </div>
        <div className="status-card">
          <span className="status-dot" /> Railway-ready foundation
          <strong>V2</strong>
        </div>
      </section>

      <section className="value-map" aria-label="Verified Value operating model">
        <article className="panel prior-panel">
          <p className="panel-kicker">Prior</p>
          <h2>Before Verified Value</h2>
          <p className="panel-note">Life and human activity occur outside the institution.</p>
          <div className="item-list">
            {prior.map((item) => <div className="item" key={item}>{item}</div>)}
          </div>
        </article>

        <article className="center-panel">
          <div className="value-seal">
            <span>Verified</span>
            <strong>Value</strong>
          </div>
          <p>The point where the institution begins.</p>
        </article>

        <article className="panel post-panel">
          <p className="panel-kicker">Post</p>
          <h2>After Verified Value</h2>
          <p className="panel-note">Institutional functions operate from verified recognition.</p>
          <div className="item-list">
            {post.map((item) => <div className="item" key={item}>{item}</div>)}
          </div>
        </article>
      </section>

      <section className="lifecycle">
        <p className="eyebrow">Family Capital Instrument Lifecycle</p>
        <div className="flow">
          {[
            "Issuance",
            "Active Cycle",
            "Verified Value",
            "Credits & Release",
            "Discharge",
            "Next Cycle",
          ].map((step, index) => (
            <div className="flow-step" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
