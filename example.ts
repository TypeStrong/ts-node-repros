let z = "⿳⿻[:-1]𦫻口儿⿻⿸𰀪㇄口";
let output = "";
for (let char of z) {
  output += char;
  console.log(char.charCodeAt(0));
  console.log(output);
}

console.log("with an explicit for loop:");
output = "";
for (let i = 0; i < z.length; i++) {
  let char = z[i];
  output += char;
  console.log(char.charCodeAt(0));
  console.log(output);
}
