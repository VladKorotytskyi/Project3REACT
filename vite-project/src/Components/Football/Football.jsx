import React, { useState } from 'react';
import { GameContainer, FootballTitle, Field, Ball } from './Football.styled';
import ballImg from "../../Images/football.png";

export const Football = () => {
  const [coords, setCoords] = useState({ x: 335, y: 85 });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    let x = e.clientX - rect.left - 25;
    let y = e.clientY - rect.top - 25;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > 720 - 50) x = 720 - 50;
    if (y > 220 - 50) y = 220 - 50;

    setCoords({ x, y });
  };

  return (
    <GameContainer>
      <FootballTitle>Футбол</FootballTitle>
      <Field onClick={handleClick}>
        <Ball 
          src={ballImg} 
          x={coords.x} 
          y={coords.y} 
          alt="ball" 
        />
      </Field>
    </GameContainer>
  );
};