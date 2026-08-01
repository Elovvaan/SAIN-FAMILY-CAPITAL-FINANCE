import PlatformShell from "@/components/PlatformShell";

export default function FamilyPage() {
  return (
    <PlatformShell current="family" title="Family Structure" kicker="Member Relationships & Family Houses">
      <div className="family-layout">
        <section className="card family-map-card">
          <div className="section-heading"><div><p className="eyebrow">Relationship Map</p><h2>Individual first. Family capable.</h2></div><button className="primary-button compact-action">Add member</button></div>
          <div className="family-map">
            <article className="family-person primary-person"><div className="profile-avatar">M</div><strong>Primary Member</strong><span>Individual member</span><i>FCI-0001258</i></article>
            <div className="relationship-connector"><span>+</span><p>Establish a spouse, child, guardian, or household relationship without merging individual value.</p></div>
            <article className="family-person empty-person"><div className="empty-avatar">+</div><strong>Next member</strong><span>No relationship established</span><button>Add relationship</button></article>
          </div>
        </section>

        <aside className="card family-rules">
          <p className="eyebrow">Structural Rule</p><h2>Relationships coordinate. They do not absorb.</h2>
          <div className="rule-stack"><div><strong>1 person</strong><span>One lifelong member identity</span></div><div><strong>1 instrument</strong><span>Independent Verified Value history</span></div><div><strong>Linked family</strong><span>Shared structure without merged ownership</span></div></div>
        </aside>

        <section className="card relationship-builder">
          <div className="section-heading"><div><p className="eyebrow">Relationship Builder</p><h2>Build the family as life changes</h2></div><span className="active-pill">0 linked</span></div>
          <div className="relationship-options">
            {[['Spouse / partner','Create a two-member family while preserving both instruments.'],['Child','Add a child as a new individual member with a separate lifecycle.'],['Parent / guardian','Record legal or caregiving authority without transferring value.'],['Family house','Link multiple family units into a larger recognized structure.']].map(([t,d])=><article key={t}><strong>{t}</strong><p>{d}</p><button>Begin</button></article>)}
          </div>
        </section>

        <section className="card family-package">
          <p className="eyebrow">Family Package</p><h2>Current coordinated structure</h2>
          <div className="package-metrics"><div><strong>1</strong><span>Member</span></div><div><strong>1</strong><span>Instrument</span></div><div><strong>0</strong><span>Relationships</span></div><div><strong>0</strong><span>Family bundles</span></div></div>
          <div className="package-note">A family package becomes available after at least one relationship is established. Each member remains individually visible inside the package.</div>
          <button className="outline-button">Preview family package</button>
        </section>
      </div>
    </PlatformShell>
  );
}
