import logo from "../images/mesto-logo.svg"

const Header = () => {
  return (
    <header className="header">

      <img className="header__logo" src={ logo } alt="Логотип 'Место'"/>

      <div className="header__line"></div>

    </header>
  )
}

export default Header
