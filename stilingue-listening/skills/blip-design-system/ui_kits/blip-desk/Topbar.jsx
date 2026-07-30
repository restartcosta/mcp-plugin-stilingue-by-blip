// Topbar.jsx — horizontal header above the inbox
const Topbar = ({ title, crumb, onSearch }) => (
  <header className="desk__topbar">
    <div>
      {crumb && <div className="topbar__crumbs">{crumb}</div>}
      <div className="topbar__title">{title}</div>
    </div>
    <div className="topbar__spacer"/>
    <div className="topbar__search">
      <span style={{color:'var(--color-content-ghost)'}}>⌕</span>
      <input placeholder="Search conversations, contacts…" onChange={e => onSearch && onSearch(e.target.value)} />
    </div>
    <button className="bds-btn bds-btn--text bds-btn--short">Help</button>
    <span className="bds-badge" style={{background:'var(--color-primary)'}}>4</span>
  </header>
);
window.Topbar = Topbar;
