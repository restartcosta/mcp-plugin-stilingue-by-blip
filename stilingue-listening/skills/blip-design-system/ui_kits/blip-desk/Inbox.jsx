// Inbox.jsx — conversations list
const CHANNEL_COLORS = {
  whatsapp:  '#25D366',
  instagram: '#E4405F',
  messenger: '#0084FF',
  webchat:   '#1E6BF1',
};
const CHANNEL_LABEL = {
  whatsapp: 'WhatsApp', instagram: 'Instagram', messenger: 'Messenger', webchat: 'Webchat',
};

const ConvoRow = ({ convo, active, onClick }) => (
  <div className={'convo-row' + (active ? ' is-active' : '')} onClick={onClick}>
    <div className="convo-row__avatar-wrap">
      <div className="bds-avatar bds-avatar--small" style={{background: convo.avatarBg || 'var(--color-system)'}}>
        {convo.initials}
      </div>
      <div className="convo-row__chan-dot" style={{background: CHANNEL_COLORS[convo.channel]}}/>
    </div>
    <div className="convo-row__body">
      <div className="convo-row__top">
        <div className="convo-row__name">{convo.name}</div>
        <div className="convo-row__time">{convo.time}</div>
      </div>
      <div className="convo-row__chan">{CHANNEL_LABEL[convo.channel]}</div>
      <div className="convo-row__preview">{convo.preview}</div>
      <div className="convo-row__meta">
        {convo.tag && <span className={'bds-chip bds-chip--' + (convo.tag.tone || 'default')}>{convo.tag.label}</span>}
        {convo.unread > 0 && (
          <span className="bds-badge" style={{background: 'var(--color-primary)', marginLeft: 'auto'}}>
            {convo.unread}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Inbox = ({ convos, activeId, onSelect, tab, onTab }) => {
  const tabs = [
    { id: 'mine', label: 'My tickets' },
    { id: 'team', label: 'Team' },
    { id: 'queue',label: 'Queue' },
  ];
  return (
    <section className="desk__inbox">
      <div className="inbox__header">
        <div className="inbox__tabs">
          {tabs.map(t => (
            <div key={t.id}
                 className={'inbox__tab' + (tab === t.id ? ' is-active' : '')}
                 onClick={() => onTab && onTab(t.id)}>
              {t.label}
            </div>
          ))}
        </div>
        <div className="inbox__filters">
          <span className="bds-chip bds-chip--filter">All · {convos.length}</span>
          <span className="bds-chip bds-chip--default">Open</span>
          <span className="bds-chip bds-chip--default">Waiting</span>
        </div>
      </div>
      <div className="inbox__list">
        {convos.map(c => (
          <ConvoRow key={c.id} convo={c} active={c.id === activeId} onClick={() => onSelect(c.id)} />
        ))}
      </div>
    </section>
  );
};

window.Inbox = Inbox;
window.CHANNEL_COLORS = CHANNEL_COLORS;
window.CHANNEL_LABEL = CHANNEL_LABEL;
