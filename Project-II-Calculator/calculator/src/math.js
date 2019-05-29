export default function calc(expression) {
  let current = expression;
  function arith(type) {
    const typeExp = new RegExp(`[${type}]`);
    const matchExp = new RegExp(`(?:\\d+[${type}]\\d+)`);
    while (typeExp.test(current)) {
      let [first, second] = current.match(matchExp)[0].split(type);
      switch (type) {
        case '/':
          current = current.replace(matchExp, `${parseInt(first) / parseInt(second)}`);
          break;
        case 'x':
          current = current.replace(matchExp, `${parseInt(first) * parseInt(second)}`);
          break;
        case '+':
          current = current.replace(matchExp, `${parseInt(first) + parseInt(second)}`);
          break;
        case '-':
          current = current.replace(matchExp, `${parseInt(first) - parseInt(second)}`);
          break;
        default:
          current = +current;
      }
    }
  }
  arith('/');
  arith('x');
  arith('+');
  arith('-');
  return current;
}
