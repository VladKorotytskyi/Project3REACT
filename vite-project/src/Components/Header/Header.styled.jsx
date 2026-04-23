import styled from "styled-components";

export const DropDown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--bg-color, #ffffff);
  border: 1px solid #ccc;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  padding: 10px 0;
  z-index: 100;

  div {
    padding: 10px 20px;
    white-space: nowrap;
    color: var(--text-color, #000);
    transition: background 0.2s;

    &:hover {
      background-color: var(--hover-color, #f0f0f0);
    }
  }
`;

export const NavItem = styled.div`
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  font-weight: 500;

  &:hover ${DropDown} {
    display: block;
  }
`;

export const HeaderS = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: var(--bg-color, #ffffff);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 999;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  img {
    height: 50px;
    width: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;