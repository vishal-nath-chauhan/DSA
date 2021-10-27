function main(n) {
  let star = 3;
  let space = 1;
  let half = parseInt(n / 2) ;
  console.log(half)
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(star) + " ".repeat(space) + "*".repeat(star));
    // console.log({i,star,space})
    if (i <= half) {
      space += 2;
      star--;
    // console.log('called ',{i,star,space})

    } else {
      star++;
      space -= 2;
    }
  }
}

main(5)