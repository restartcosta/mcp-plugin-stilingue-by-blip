// Login.jsx — alt screen shown before the desk
const { useState: useState_L } = React;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState_L('ana@blip.ai');
  const [pass,  setPass]  = useState_L('••••••••');
  const submit = () => onLogin({ email });
  return (
    <div className="login">
      <aside className="login__brandside">
        <div className="login__logo">
          <img src="../../assets/logos/blip-logo-white.svg" alt="blip" style={{height:36, width:'auto'}}/>
        </div>
        <div>
          <div className="login__pitch">Conversations that convert, at scale.</div>
          <div className="login__sub">The Blip Desk gives your team one inbox for WhatsApp, Instagram, Messenger and webchat — with intents, quick replies and CRM context side-by-side.</div>
        </div>
        <div style={{fontSize:12, opacity:.75, position:'relative', zIndex:1}}>© 2026 Blip · take.net</div>
      </aside>
      <main className="login__formside">
        <form className="login__form" onSubmit={e => { e.preventDefault(); submit(); }}>
          <h1 className="login__title">Sign in to Blip Desk</h1>
          <div className="login__hint">Use your corporate email to continue.</div>
          <div className="bds-input">
            <div className="bds-input__label">Email</div>
            <div className="bds-input__box"><input value={email} onChange={e => setEmail(e.target.value)} /></div>
          </div>
          <div className="bds-input">
            <div className="bds-input__label">Password</div>
            <div className="bds-input__box"><input type="password" value={pass} onChange={e => setPass(e.target.value)} /></div>
          </div>
          <button type="submit" className="bds-btn bds-btn--solid bds-btn--large">Sign in</button>
          <button type="button" className="bds-btn bds-btn--text">Forgot password?</button>
          <div style={{fontSize:12, color:'var(--color-content-ghost)', textAlign:'center', marginTop:8}}>
            New to Blip? <a href="#" style={{color:'var(--color-primary)', fontWeight:700, textDecoration:'none'}}>Request access</a>
          </div>
        </form>
      </main>
    </div>
  );
};

window.Login = Login;
