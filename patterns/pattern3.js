function main(n) {
  for (let i = 1; i <= n; i++) {
    // for(let j=1;j<=n;j++){
    //     // console.log(' '.repeat(n-i))
    // }
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}
main(5)
// *
// **
// ***
// ****
// *****