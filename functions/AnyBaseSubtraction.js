function main(base, n1, n2) {
  // constraint : n2>n1

  let borrow = 0;
  let p = 1;
  let rv = 0;
  while (n1 > 0 || n2 > 0) {
    let d1 = n1 % 10;
    let d2 = n2 % 10;
    n1 = parseInt(n1 / 10);
    n2 = parseInt(n2 / 10);
    let diff = d2 - borrow - d1;
    if (diff > 0) {
      rv += diff * p;
    } else {
      borrow += 1;
      rv += (diff + base) * p;
    }
    p *= 10;
  }
  console.log({ rv });
}

main(8, 54, 316);
