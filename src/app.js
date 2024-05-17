import { useState } from "react";
import { buttonsData } from "./buttons.data";
import { bracketsValid, expressionHandler } from "./utility";

const App = () => {
  const [subExpression, setSubExpression] = useState("");
  const [expression, setExpression] = useState("");

  const formatExpression = (expression) =>
    expression.replace(/\*/, "x").replace(/\//, "÷");

  const buttonClick = (value) => {
    const newExpression = expressionHandler(value, expression);
    if (value === "ok") {
      if (bracketsValid(expression)) {
        setSubExpression(expression);
        setExpression(Math.round(eval(expression)).toString());
      }
    } else {
      setSubExpression("");
      setExpression(newExpression);
    }
  };
  return (
    <div className="app">
      <div className="ui-layout">
        <div className="screen-layout">
          <div className="sub-screen">{formatExpression(subExpression)}</div>
          <div className="screen">{formatExpression(expression)}</div>
        </div>
        <div>
          <div className="buttons-layout">
            {buttonsData &&
              buttonsData.map(({ id, text, value, className }) => (
                <button
                  key={id}
                  className={className}
                  onClick={() => buttonClick(value)}
                >
                  {text}
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="history-layout"></div>
    </div>
  );
};

export default App;
