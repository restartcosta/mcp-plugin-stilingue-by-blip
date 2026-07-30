// App.jsx — Blip Desk demo wiring all components together
const { useState: useAppState } = React;

const SEED_CONVOS = [
  { id:'c1', name:'Ana Nunes',       initials:'AN', avatarBg:'var(--color-system)',  channel:'whatsapp',  time:'2m',  preview:'Hi, can I change my delivery address?', unread:2, tag:{label:'New', tone:'primary'} },
  { id:'c2', name:'Lucas Zanella',   initials:'LZ', avatarBg:'var(--color-success)', channel:'instagram', time:'12m', preview:'Pedido #48102 ainda não chegou.',        unread:0, tag:{label:'Sales', tone:'filter'} },
  { id:'c3', name:'Mariana Krüger',  initials:'MK', avatarBg:'var(--color-warning)', channel:'messenger', time:'34m', preview:'Thanks, that fixed it!',                 unread:0, tag:{label:'Resolved', tone:'default'} },
  { id:'c4', name:'Thiago Ribeiro',  initials:'TR', avatarBg:'var(--color-error)',   channel:'whatsapp',  time:'1h',  preview:'I need to cancel my order please.',     unread:1, tag:{label:'Urgent', tone:'danger'} },
  { id:'c5', name:'Camila L.',       initials:'CL', avatarBg:'var(--color-info)',    channel:'webchat',   time:'2h',  preview:'Is the enterprise plan monthly?',       unread:0, tag:{label:'Sales', tone:'filter'} },
  { id:'c6', name:'João Pedro',      initials:'JP', avatarBg:'var(--color-primary-dark)', channel:'whatsapp', time:'3h', preview:'Where do I find the API key?',        unread:0 },
];

const SEED_MESSAGES = {
  c1: [
    { id:1, from:'them', initials:'AN', time:'09:42', text:'Hi! I just placed order #48102 but I need to change the delivery address.' },
    { id:2, from:'them', initials:'AN', time:'09:42', text:'Is that possible before it ships?' },
    { id:3, from:'me',   time:'09:45', text:'Hi Ana! Yes — as long as it hasn\'t shipped we can update it. Could you send me the new street, number and postal code?' },
    { id:4, from:'them', initials:'AN', time:'09:46', text:'Of course: Rua Paraíba 330, apto 1101 · 30130-141 · Belo Horizonte/MG' },
    { id:5, from:'me',   time:'09:47', text:'Updated ✓ You\'ll receive a new tracking email within 15 minutes.' },
  ],
  c2: [
    { id:1, from:'them', initials:'LZ', time:'08:20', text:'Oi, meu pedido #48102 não chegou ainda.' },
    { id:2, from:'me',   time:'08:22', text:'Olá Lucas! Vou verificar o status com a transportadora agora.' },
  ],
  c3: [{ id:1, from:'them', initials:'MK', time:'yesterday', text:'Thanks, that fixed it! 🙌' }],
  c4: [{ id:1, from:'them', initials:'TR', time:'10:05', text:'I need to cancel my order please. It hasn\'t shipped yet.' }],
  c5: [{ id:1, from:'them', initials:'CL', time:'07:58', text:'Is the enterprise plan monthly or annual?' }],
  c6: [{ id:1, from:'them', initials:'JP', time:'yesterday', text:'Where do I find the API key in the portal?' }],
};

const App = () => {
  const [loggedIn, setLoggedIn] = useAppState(false);
  const [convos]   = useAppState(SEED_CONVOS);
  const [activeId, setActiveId] = useAppState('c1');
  const [tab, setTab] = useAppState('mine');
  const [messagesByConvo, setMessagesByConvo] = useAppState(SEED_MESSAGES);

  const active = convos.find(c => c.id === activeId);
  const messages = messagesByConvo[activeId] || [];

  const handleSend = (text) => {
    setMessagesByConvo(prev => ({
      ...prev,
      [activeId]: [...(prev[activeId]||[]), { id: Date.now(), from:'me', time:'now', text }],
    }));
  };

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  return (
    <div className="desk">
      <Rail active="inbox" />
      <Topbar title="Inbox" crumb="Desk · Support — Tier 1" />
      <Inbox convos={convos} activeId={activeId} onSelect={setActiveId} tab={tab} onTab={setTab} />
      <Thread convo={active} messages={messages} onSend={handleSend} />
      <ContactPanel convo={active} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
