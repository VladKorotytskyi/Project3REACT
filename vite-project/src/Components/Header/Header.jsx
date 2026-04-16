import { HeaderS, Logo, Nav, NavItem, DropDown, Button } from "./Header.styled";

export const Header = () => {
  console.log("Header");
  return (
    <HeaderS className="header">
      <Logo className="logo" id="logoContainer"></Logo>

      <Nav className="nav">
        <NavItem className="navItem">
          Інтерактив
          <DropDown className="dropdown">
            <div>Числовий</div>
            <div>Ігровий</div>
            <div>Ознайомчий</div>
          </DropDown>
        </NavItem>
        <div className="nav-item">
          Наша команда
          <DropDown className="dropdown">
            <div>Про нас</div>
            <div>Місія</div>
            <div>Досягнення</div>
          </DropDown>
        </div>
        <div className="nav-item">
          Контакти
          <DropDown className="dropdown">
            <div>Email</div>
            <div>Телефон</div>
            <div>Месенджери</div>
          </DropDown>
        </div>
      </Nav>

      <div className="greeting">
        <Button id="themeToggle">🌞</Button>
        <span>Вітаємо, User!</span>
      </div>
    </HeaderS>
  );
};
