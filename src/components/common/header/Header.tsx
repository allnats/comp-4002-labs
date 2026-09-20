import "./Header.css";
import pixellRiverLogo from "../../../assets/pixell-river-logo.svg";

function Header({ title, greeting }: { title: string; greeting: string }) {
  return (
    <header>
      <img src={pixellRiverLogo} alt="PiXELL River Logo" />
      <div className="title">
        <h1 className="header-title">{title}</h1>
        <p className="greeting">{greeting}</p>
      </div>
    </header>
  );
}

export default Header;
