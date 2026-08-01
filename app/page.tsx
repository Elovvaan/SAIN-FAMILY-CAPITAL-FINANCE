const prior = ["Person", "Will", "Purpose", "Ideas", "Action", "Work", "Creation", "Evidence"];
const post = ["Recording", "Custody", "Instrument", "Credits", "Release Cycles", "Discharge", "History"];

const navigation = [
  ["Overview", "⌂"],
  ["My Verified Value", "◇"],
  ["Instruments", "▤"],
  ["Credits & Releases", "◎"],
  ["Family", "♙"],
  ["Documents", "▱"],
  ["Messages", "□"],
  ["History", "↺"],
];

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
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <div className="brand-emblem" aria-label="SAIN Finance institutional mark">
            <span className="emblem-ring" />
            <span className="emblem-s">S</span>
          </div>
          <div>
            <p className="brand-name">SAIN</p>
            <p className="brand-subtitle">Family Capital Finance</p>
          </div>
        </div>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map(([label, icon], index) => (
            <a className={index === 0 ? "nav-item active" : "nav-item"} href={index === 0 ? "#overview" : `#${label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} key={label}>
              <span className="nav-icon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="ecosystem-card">
          <p>SAIN Ecosystem</p>
          <div className="ecosystem-link muted-link">SAIN Finance</div>
          <div className="ecosystem-link selected-link">Family Capital Finance</div>
        </div>
      </aside>

      <section className="workspace" id="overview">
        <header className="workspace-header">
          <div>
            <p className="header-kicker">V2 Institutional Foundation</p>
            <h1>Verified Value is the center.</h1>
          </div>
          <div className="member-header">
            <div className="member-copy">
              <strong>Primary Member</strong>
              <span>Member workspace</span>
            </div>
            <div className="member-avatar" aria-hidden="true">M</div>
          </div>
        </header>

        <div className="dashboard-grid">
          <section className="member-card card" id="my-verified-value">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Member Overview</p>
                <h2>Individual first</h2>
              </div>
              <span className="verified-pill">Verified</span>
            </div>
            <div className="profile-row">
              <div className="profile-avatar">M</div>
              <div>
                <strong>Primary Member</strong>
                <p>Source of the instrument</p>
              </div>
            </div>
            <dl className="member-details">
              <div><dt>Member ID</dt><dd>M-0001258</dd></div>
              <div><dt>Status</dt><dd>Active</dd></div>
              <div><dt>Current role</dt><dd>Individual member</dd></div>
            </dl>
            <button className="outline-button">Open member workspace</button>
          </section>

          <section className="value-operating-model card">
            <div className="model-column prior-column">
              <p className="eyebrow">Prior</p>
              <h2>Before Verified Value</h2>
              <p className="support-copy">Life, energy, intention, work, and evidence remain with the person.</p>
              <div className="compact-list">
                {prior.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <div className="verified-center">
              <div className="value-seal">
                <span>Verified</span>
                <strong>Value</strong>
              </div>
              <p>The point where the institution begins.</p>
            </div>

            <div className="model-column post-column">
              <p className="eyebrow">Post</p>
              <h2>Institutional Operations</h2>
              <p className="support-copy">The platform operates only after value is verified.</p>
              <div className="compact-list post-list">
                {post.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </section>

          <aside className="summary-column">
            <section className="card family-summary" id="family">
              <div className="section-heading compact-heading">
                <div><p className="eyebrow">Family Summary</p><h2>Current structure</h2></div>
                <button className="text-button">View</button>
              </div>
              <div className="metric-row">
                <div><strong>1</strong><span>Member</span></div>
                <div><strong>1</strong><span>Instrument</span></div>
                <div><strong>0</strong><span>Linked family</span></div>
              </div>
              <p className="family-note">The platform begins with the individual and expands as life relationships are established.</p>
            </section>

            <section className="card active-instrument" id="instruments">
              <div className="section-heading compact-heading">
                <div><p className="eyebrow">Active Instrument</p><h2>Family Capital Instrument</h2></div>
                <span className="active-pill">Active</span>
              </div>
              <p className="instrument-id">FCI-0001258</p>
              <div className="cycle-label"><span>Current cycle</span><strong>Cycle 1 · Establishment</strong></div>
              <div className="progress-track"><span /></div>
              <button className="outline-button">View instrument</button>
            </section>

            <section className="card credit-card" id="credits-and-releases">
              <p className="eyebrow">Family Capital Credits</p>
              <strong className="credit-total">0 FCC</strong>
              <p>Credits are created and released only through the instrument’s verified cycle.</p>
              <button className="outline-button">Credits & releases</button>
            </section>
          </aside>
        </div>

        <section className="lifecycle card">
          <div className="section-heading lifecycle-heading">
            <div>
              <p className="eyebrow">Family Capital Instrument Lifecycle</p>
              <h2>One instrument. Repeating verified cycles.</h2>
            </div>
            <span className="foundation-badge"><i /> Railway live · V2</span>
          </div>
          <div className="flow">
            {lifecycle.map(([step, description], index) => (
              <div className="flow-step" key={step}>
                <span className="step-number">{index + 1}</span>
                <strong>{step}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lower-grid">
          <section className="card workspace-card" id="documents">
            <p className="eyebrow">Document Center</p>
            <h2>Foundation records</h2>
            <div className="record-row"><div><strong>V1 Platform Package</strong><span>Initial Family Capital Finance framework</span></div><span className="record-status">Recorded</span></div>
            <div className="record-row"><div><strong>V2 Verified Value Center</strong><span>Institutional organizing principle</span></div><span className="record-status">Current</span></div>
          </section>
          <section className="card workspace-card" id="history">
            <p className="eyebrow">Discharge & History</p>
            <h2>Cycle record</h2>
            <div className="empty-state">
              <strong>No discharged cycles yet</strong>
              <p>The first discharge will close Cycle 1 and authorize the next release cycle according to the instrument.</p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
