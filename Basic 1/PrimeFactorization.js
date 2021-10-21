function PrimeFactorization(n) {
  let num = 2;
  while (num * num < n) {
    if (n % num == 0) {
      let remainder = n % num;
      // let quotient=(n-remainder)/num;
      n = n / num;
      // n=quotient;
      console.log(num);
    } else {
      num += 1;
    }
  }
  if (n != 0) {
    console.log(n);
  }
}
PrimeFactorization(46);
