
function main(n) {
  let spaces = 2 * n - 3;
  let star = 1;
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = 1; j <= star; j++) {
      temp += j;
    }
    for (let k = 1; k <= spaces; k++) {
      temp += " ";
    }
    if (i == n) {
      star--;
    }
    for (let j = star; j >= 1; j--) {
      temp += j;
    }
    star++;
    spaces -= 2;
    console.log(temp)
  }
}

main(4)

