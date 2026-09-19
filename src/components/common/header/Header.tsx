import "./Header.css";
import pixellRiverLogo from "../../../assets/pixell-river-logo.svg";

function Header() {
  return (
    <header>
      <img src={pixellRiverLogo} alt="PiXELL River Logo" />
      <div className="title">
        <h1 className="header-title">PiXELL River Employee Directory</h1>
        <p className="greeting">
          List of all employees by their department sections.
        </p>
      </div>
    </header>
  );
}

export default Header;
