import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FootballTitle = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Field = styled.div`
  width: 720px;
  height: 220px;
  background-color: #5abb58;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 37px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: crosshair;
`;

export const Ball = styled.img.attrs((props) => ({
  style: {
    left: `${props.x}px`,
    top: `${props.y}px`,
  },
}))`
  position: absolute;
  width: 50px;
  height: 50px;
  transition: all 0.5s ease-out;
  pointer-events: none;
`;
