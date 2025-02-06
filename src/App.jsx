import './App.css'

function App() {
  return (
    <div className="wrapper">
      <div className="loading">
        Loading...
      </div>

      <iframe
        src="https://tweaks-nine.vercel.app/"
        title="Deployed old website."
        className="iframe"
      />

      <header className="header">
        <a className="header-link" href="#">
          <span className="link-text">X</span>

          <img className="link-img" src="/icons/x-twitter.png" alt="X icon." />
        </a>
        <a className="header-link" href="#">
          <span className="link-text">Telegram</span>

          <img className="link-img" src="/icons/telegram.png" alt="Telegram icon." />
        </a>
        <a className="header-link" href="#">
          <span className="link-text">Dexscreener</span>

          <img className="link-img" src="/icons/dexscreener.png" alt="Dexscreener icon." />
        </a>
        <a className="header-link" href="#">
          <span className="link-text">Dextools</span>

          <img className="link-img" src="/icons/dextools_icon.png" alt="Dextools icon." />
        </a>
        <a className="header-link" href="#">
          <span className="link-text">Raydium</span>

          <img className="link-img" src="/icons/raydium_icon.png" alt="Raydium icon." />
        </a>
      </header>
    </div>
  )
}

export default App
