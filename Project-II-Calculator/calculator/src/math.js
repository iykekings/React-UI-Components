export default function calc(expression) {
  let current = expression;
  function arith(type) {
    const typeExp = new RegExp(`[${type}]`);
    const matchExp = new RegExp(`(?:\\d+[${type}]\\d+)`);
    while (typeExp.test(current)) {
      let [first, second] = current.match(matchExp)[0].split(type);
      switch (type) {
        case '/':
          current = current.replace(
            matchExp,
            `${parseInt(first) / parseInt(second)}`
          );
          break;
        case 'x':
          current = current.replace(
            matchExp,
            `${parseInt(first) * parseInt(second)}`
          );
          break;
        case '+':
          current = current.replace(
            matchExp,
            `${parseInt(first) + parseInt(second)}`
          );
          break;
        case '-':
          current = current.replace(
            matchExp,
            `${parseInt(first) - parseInt(second)}`
          );
          break;
        default:
          current = +current;
        // Then include the logic here like so, (before the default case!)
        // case '%':
        //    current = current.replace(matchExp, `${parseInt(first) % parseInt(second)}`)
      }
    }
  }
  arith('/');
  arith('x');
  arith('+');
  arith('-');

  // You can extend the functionality of this function by callind arith with the symbol of operation and including the logic in the switch statement, e.g, arith('%') (NB: the arith calls should be arranged in other JS operator precedence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence);

  return current;
}
