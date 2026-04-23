import { useState, useEffect } from "react";
import { HeaderS, Logo, Nav, NavItem, DropDown, Button } from "./Header.styled";
import logoImg from "../../Images/logoo.png"; 

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <HeaderS className="header">
      <Logo className="logo">
        <img 
          src={logoImg} 
          alt="logo" 
        />
      </Logo>

      <Nav className="nav">
        <NavItem className="navItem">
          Інтерактив
          <DropDown className="dropdown">
            <div>Числовий</div>
            <div>Ігровий</div>
            <div>Ознайомчий</div>
          </DropDown>
        </NavItem>

        <NavItem className="navItem">
          Наша команда
          <DropDown className="dropdown">
            <div>Про нас</div>
            <div>Місія</div>
            <div>Досягнення</div>
          </DropDown>
        </NavItem>

        <NavItem className="navItem">
          Контакти
          <DropDown className="dropdown">
            <div>Email</div>
            <div>Телефон</div>
            <div>Месенджери</div>
          </DropDown>
        </NavItem>
      </Nav>

      <div className="greeting" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button id="themeToggle" onClick={toggleTheme}>
          {isDark ? "🌙" : "☀️"}
        </Button>
        <span>Вітаємо, User!</span>
      </div>
    </HeaderS>
  );
};