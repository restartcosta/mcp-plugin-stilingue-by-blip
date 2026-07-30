// Rail.jsx — left product rail (Blip-brand blue sidebar)
const Rail = ({ active, onNav }) => {
  const items = [
    { id: 'home',    label: 'Home',    icon: '◎' },
    { id: 'inbox',   label: 'Inbox',   icon: '✉' },
    { id: 'contacts',label: 'Contacts',icon: '☺' },
    { id: 'reports', label: 'Reports', icon: '▤' },
    { id: 'flows',   label: 'Flows',   icon: '⇋' },
  ];
  return (
    <aside className="desk__rail">
      <div className="rail__logo">
        <img src="../../assets/logos/blip-mark.svg" alt="Blip" style={{width:28, height:28}}/>
      </div>
      {items.map(it => (
        <div key={it.id}
             className={'rail__item' + (active === it.id ? ' is-active' : '')}
             title={it.label}
             onClick={() => onNav && onNav(it.id)}>
          <span style={{fontSize:20, lineHeight:1}}>{it.icon}</span>
        </div>
      ))}
      <div className="rail__spacer"/>
      <div className="rail__item" title="Settings">⚙</div>
      <div className="bds-avatar bds-avatar--extra-small" style={{background:'#fff', color:'var(--color-brand)', marginTop:8}}>AR</div>
    </aside>
  );
};

window.Rail = Rail;
