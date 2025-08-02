function countBs(string) {
  let count = 0;
  for (let char of string) {
    if (char === 'B') {
      count++;
    }
  }
  return count;
}

function countChar(string, char) {
  let count = 0;
  for (let c of string) {
    if (c === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4