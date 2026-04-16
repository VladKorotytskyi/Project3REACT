import styled from "styled-components";

//   .dropdown div {
//     padding: 10px 20px;
//     white-space: nowrap;
//     color: var(--text-color);
//   }
//   .dropdown div:hover {
//     background-color: var(--hover-color);
//   }
//   .nav-item:hover .dropdown {
//     display: block;
//   }
// :root {
//     --bg-color: #ffffff;
//     --text-color: #000000;
//     --hover-color: #f0f0f0;
//   }

export const HeaderS = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavItem = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DropDown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;
