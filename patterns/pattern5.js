function main(n) {
  let star = 1;
  let space = (n-1)/2;
  let half = parseInt(n / 2);
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(space) + "*".repeat(star));
    if (i <= half) {
      star += 2;
      space--;
    } else {
      star -= 2;
      space++;
    }
  }
}
main(7)

