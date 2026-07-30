// Thread.jsx — message thread + composer
const { useState, useRef, useEffect } = React;

const Message = ({ m }) => (
  <div className={'msg msg--' + (m.from === 'me' ? 'out' : 'in')}>
    {m.from !== 'me' && (
      <div className="bds-avatar bds-avatar--extra-small" style={{background:'var(--color-system)'}}>
        {m.initials}
      </div>
    )}
    <div className="msg__meta">
      <div className="msg__bubble">{m.text}</div>
      <div className="msg__time">{m.time}{m.from === 'me' && ' · ✓✓'}</div>
    </div>
  </div>
);

const Thread = ({ convo, messages, onSend }) => {
  const [draft, setDraft] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  const send = () => {
    const t = draft.trim();
    if (!t) return;
    onSend(t);
    setDraft('');
  };

  if (!convo) {
    return (
      <section className="desk__thread" style={{alignItems:'center', justifyContent:'center'}}>
        <div style={{textAlign:'center', color:'var(--color-content-ghost)', maxWidth:320}}>
          <img src="../../assets/illustrations/message-ballon.svg" style={{width:120, opacity:.7}} />
          <div style={{marginTop:12, fontSize:14}}>Select a conversation to start replying.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="desk__thread">
      <header className="thread__header">
        <div className="bds-avatar bds-avatar--standard" style={{background: convo.avatarBg || 'var(--color-system)'}}>
          {convo.initials}
        </div>
        <div className="thread__header-info">
          <div className="thread__header-name">{convo.name}</div>
          <div className="thread__header-status">
            <span className="status-dot"/> Online · {CHANNEL_LABEL[convo.channel]}
          </div>
        </div>
        <button className="bds-btn bds-btn--text bds-btn--short">Transfer</button>
        <button className="bds-btn bds-btn--outline bds-btn--short">Resolve</button>
      </header>

      <div className="thread__body" ref={bodyRef}>
        <div className="thread__daydiv">Today</div>
        {messages.map(m => <Message key={m.id} m={m} />)}
      </div>

      <div className="composer">
        <div className="composer__tools">
          <div className="composer__tool" title="Attach">📎</div>
          <div className="composer__tool" title="Emoji">☻</div>
          <div className="composer__tool" title="Quick reply">⚡</div>
          <div className="composer__tool" title="Template">☷</div>
        </div>
        <div className="composer__row">
          <textarea className="composer__input"
                    placeholder="Write a message…"
                    value={draft}
                    onChange={e => setDraft(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} />
          <button className="bds-btn bds-btn--solid" onClick={send} disabled={!draft.trim()}>Send</button>
        </div>
      </div>
    </section>
  );
};

window.Thread = Thread;
