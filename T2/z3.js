
const a = 15;
const b = 11;
const c = 20;
const p = (a + b + c)/2;
const S = Math.sqrt(p *(p - a) * (p - b) * (p - c));
console.log(`Площа трикутника по формулі Герона ${S}`);