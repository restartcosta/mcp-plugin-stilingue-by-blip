// ContactPanel.jsx — right side panel with customer info
const ContactPanel = ({ convo }) => {
  if (!convo) return <aside className="desk__side"/>;
  return (
    <aside className="desk__side">
      <div className="side__head">
        <div className="bds-avatar bds-avatar--extra-large" style={{background: convo.avatarBg || 'var(--color-system)', margin:'0 auto'}}>
          {convo.initials}
        </div>
        <div className="side__name">{convo.name}</div>
        <div className="side__sub">{CHANNEL_LABEL[convo.channel]} · +55 31 98765-4321</div>
        <div style={{display:'flex', gap:8, justifyContent:'center', marginTop:12}}>
          <button className="bds-btn bds-btn--outline bds-btn--short">Profile</button>
          <button className="bds-btn bds-btn--text bds-btn--short">Notes</button>
        </div>
      </div>

      <div className="side__section">
        <div className="side__label">Ticket</div>
        <div className="side__kv"><span className="side__kv-k">Status</span><span className="side__kv-v" style={{color:'var(--color-positive)'}}>Open</span></div>
        <div className="side__kv"><span className="side__kv-k">Priority</span><span className="side__kv-v">Normal</span></div>
        <div className="side__kv"><span className="side__kv-k">Queue</span><span className="side__kv-v">Support — Tier 1</span></div>
        <div className="side__kv"><span className="side__kv-k">Agent</span><span className="side__kv-v">Ana R.</span></div>
      </div>

      <div className="side__section">
        <div className="side__label">Tags</div>
        <div className="side__taglist">
          <span className="bds-chip bds-chip--primary">delivery</span>
          <span className="bds-chip bds-chip--default">address-change</span>
          <span className="bds-chip bds-chip--watermelon">VIP</span>
        </div>
      </div>

      <div className="side__section">
        <div className="side__label">Customer since</div>
        <div style={{fontSize:14}}>March 2024 · 12 tickets</div>
      </div>

      <div className="side__section">
        <div className="side__label">Integrations</div>
        <div className="side__kv"><span className="side__kv-k">CRM</span><span className="side__kv-v">#A-91823</span></div>
        <div className="side__kv"><span className="side__kv-k">Order</span><span className="side__kv-v">#48102</span></div>
      </div>
    </aside>
  );
};

window.ContactPanel = ContactPanel;
