export const bracketsValid = (expression) => {
  const openBracesLength = expression
    .split("")
    .filter((str) => str === "(").length;
  const closeBracesLength = expression
    .split("")
    .filter((str) => str === ")").length;

  return openBracesLength === closeBracesLength;
};

export const expressionHandler = (value, expression) => {
  switch (value) {
    case "ce":
      return "";

    case "delete":
      return expression.slice(0, expression.length - 1);

    case "(":
      const openBraceVaild =
        expression == "" ||
        ["+", "-", "*", "/", "("].includes(expression[expression.length - 1]);
      if (openBraceVaild) {
        expression = expression + "(";
      }

      return expression;

    case ")":
      const openBracesLength = expression
        .split("")
        .filter((str) => str === "(").length;
      const closeBracesLength = expression
        .split("")
        .filter((str) => str === ")").length;

      const closeBraceVaild =
        closeBracesLength < openBracesLength &&
        !["+", "-", "*", "/", "("].includes(expression[expression.length - 1]);
      if (closeBraceVaild) {
        expression = expression + ")";
      }
      return expression;

    default:
      if (["+", "-", "*", "/", "."].includes(value)) {
        if (
          !["+", "-", "*", "/", ".", "("].includes(
            expression[expression.length - 1]
          )
        ) {
          expression = expression + value;
        }
        return expression;
      } else {
        if (expression[expression.length - 1] !== ")") {
          expression = expression + value;
        }
        return expression;
      }
  }
};
