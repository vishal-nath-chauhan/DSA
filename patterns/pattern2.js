function main(n) {
  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 1; j < n + 1 - i; j++) {
      temp += "*";
    }
    console.log(temp);
  }
}

main(5)

// *****
// ****
// ***
// **
// *