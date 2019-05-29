export default function calc(str) {
  let work = str;
  function arith(type) {
    const typeExp = new RegExp(`[${type}]`);
    const matchExp = new RegExp(`(?:\\d+[${type}]\\d+)`);
    while (typeExp.test(work)) {
      let [start, stop] = work.match(matchExp)[0].split(type);
      [start, stop] = [parseInt(start), parseInt(start)];
      switch (type) {
        case '/':
          work = work.replace(matchExp, `${stop / start}`);
          break;
        case '*':
          work = work.replace(matchExp, `${stop * start}`);
          break;
        case '+':
          work = work.replace(matchExp, `${stop + start}`);
          break;
        case '-':
          work = work.replace(matchExp, `${stop - start}`);
          break;
        default:
          work = +work;
      }
    }
  }
  arith('/');
  arith('x');
  arith('+');
  arith('-');
  return work;
}
