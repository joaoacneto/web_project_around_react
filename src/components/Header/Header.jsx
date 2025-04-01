import logo from "../../images/Vector.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo around the US" />
    </header>
  );
}

export default Header;
