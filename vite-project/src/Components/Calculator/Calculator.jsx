import React, { useState } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [mathAction, setMathAction] = useState("");
  const [result, setResult] = useState("Результат");

  const handleResult = () => {
    const first = Number(num1);
    const second = Number(num2);
    let calculation = 0;

    if (mathAction === "plus") {
      calculation = first + second;
    } else if (mathAction === "minus") {
      calculation = first - second;
    } else if (mathAction === "extrude") {
      calculation = first * second;
    } else if (mathAction === "spread") {
      calculation = second !== 0 ? first / second : "Помилка (ділення на 0)";
    } else {
      return;
    }

    setResult(calculation);
  };

  return (
    <div id="calculator">
      <h1 className="cal-title">Калькулятор</h1>

      <input
        id="num1"
        type="number"
        placeholder="Введіть число"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <div id="operator_btns">
        <button className="operator" onClick={() => setMathAction("plus")}>
          +
        </button>
        <button className="operator" onClick={() => setMathAction("minus")}>
          -
        </button>
        <button className="operator" onClick={() => setMathAction("extrude")}>
          x
        </button>
        <button className="operator" onClick={() => setMathAction("spread")}>
          /
        </button>
      </div>

      <input
        id="num2"
        type="number"
        placeholder="Введіть число"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button id="button-Result" onClick={handleResult}>
        =
      </button>

      <p id="result">{result}</p>
    </div>
  );
};