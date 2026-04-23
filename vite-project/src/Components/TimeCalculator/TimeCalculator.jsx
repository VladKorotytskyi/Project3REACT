import React, { useState } from 'react';
import searchImg from '../../Images/search.png';

export const TimeCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('3 дн. 15:45:01');
  const [opacity, setOpacity] = useState(1);

  const getDeclension = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === '' || Number(inputValue) < 0) {
      setDisplayText('Введіть додатне число');
      return;
    }

    const totalMinutes = parseInt(inputValue);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    let timeString = '';
    if (hours > 0) {
      timeString += `${hours} ${getDeclension(hours, ['година', 'години', 'годин'])} `;
    }
    if (minutes > 0 || (hours === 0 && minutes === 0)) {
      timeString += `${minutes} ${getDeclension(minutes, ['хвилина', 'хвилини', 'хвилин'])}`;
    }

    setOpacity(0);
    setTimeout(() => {
      setDisplayText(timeString.trim());
      setOpacity(1);
    }, 300);
  };

  return (
    <div className="time__div">
      <form className="time__form" onSubmit={handleSubmit}>
        <label className="time__label">
          <input
            className="time__input"
            type="number"
            placeholder="Введіть хвилини"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button className="time__btn" type="submit">
          <img src={searchImg} alt="search" />
        </button>
      </form>

      <span className="time__span">..........................</span>
      <p 
        className="time__text" 
        style={{ 
          opacity: opacity, 
          transition: 'opacity 0.3s ease-in-out' 
        }}
      >
        {displayText}
      </p>
    </div>
  );
};