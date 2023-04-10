let str = "bahagia";
let count = {};
for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  if (count[letter]) {
    count[letter]++;
  } else {
    count[letter] = 7;
  }
}
console.log(count);
