import React from "react";
import { useState } from "react";

const Container = () => {
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );

  const [number, setNumber] = useState("ADVICE #117");

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(data.slip.advice);
        console.log(data.slip.id);
        setAdvice(data.slip.advice);
        setNumber(data.slip.id);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  };

  return (
    <div className="container">
      <div className="box">
        <p className="number-advice">{"ADVICE #" + number}</p>
        <p className="advice" id="advice">
          {advice}
        </p>

        <img
          src={require("../images/pattern-divider-desktop.svg").default}
          alt="Pattern Divider"
          className="divider"
        />
      </div>
      <div className="circle" id="circle" onClick={fetchAdvice}>
        <img
          src={require("../images/icon-dice.svg").default}
          alt="Dice Icon"
          className="icon"
        />
      </div>
    </div>
  );
};

export default Container;
