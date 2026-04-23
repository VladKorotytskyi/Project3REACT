import { useState } from "react";
import { DateInput, DateBtn, DateText, DateDiv } from "./DateOfBirth.styled";
import searchImg from "../../Images/search.png";

export const DateOfBirth = () => {
  console.log("DateOfBirth");
  const [year, setYear] = useState("");
  const [isBirth, setBirth] = useState(null);

  const checkBirthYear = (e) => {
    e.preventDefault();
    const yearNum = parseInt(year);

    if (!isNaN(yearNum)) {
      setBirth(yearNum % 4 === 0);
    }
  };

  return (
    <div className="container">
        Перевір в який рік ти народився
      <form className="dateForm" onSubmit={checkBirthYear}>
        <DateInput
          type="number"
          className="dateInput"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Введіть рік"
        />
        <DateBtn type="submit" className="DateBtn">
          <img src={searchImg} alt="search" />
        </DateBtn>
      </form>

      {isBirth === true && (
        <DateText className="dateText-true" style={{ color: "green" }}>
          Це високосний рік!
        </DateText>
      )}

      {isBirth === false && (
        <DateText className="dateText-false" style={{ color: "red" }}>
          Це не високосний рік.
        </DateText>
      )}
    </div>
  );
};

// const gameContainerEl = document.getElementById('1');

// gameContainerEl.insertAdjacentHTML(
//   'beforeend',
//   `<div class="date__div">
//   <form class="date__form">
//     <label class="date__label">
//       <input class="date__input" type="number" placeholder="Введіть рік народження" />
//       <button class="date__btn" type="submit">
//         <img src="${searchImg}" alt="search" />
//       </button>
//     </label>
//   </form>
//   <p class="date__text-true">Ви народилися у високосний рік!</p>
//   <p class="date__text-false show">Ви народилися не у високосний рік!</p>
// </div>`
// );

// function currentYear(year) {
//   return year % 4 === 0;
// }
// const form = document.querySelector('.date__form');
// const input = document.querySelector('.date__input');
// const textTrue = document.querySelector('.date__text-true');
// const textFalse = document.querySelector('.date__text-false');
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const year = parseInt(input.value);
//   if (currentYear(year)) {
//     textTrue.style.display = 'block';
//     textFalse.style.display = 'none';
//   } else {
//     textTrue.style.display = 'none';
//     textFalse.style.display = 'block';
//   }
// });
