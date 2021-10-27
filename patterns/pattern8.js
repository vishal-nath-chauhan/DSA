function main(n) {
  // for(let i=1;i<=n;i++){
  //     let temp=''
  //     for(let j=1;j<=n;j++){
  //         if(i+j==n+1){
  //             console.log('*')
  //         }
  //         else{
  //             console.log(temp)
  //         }
  //     }
  // }
  let prevSpace;
  let nextSpace;
  for (let i = 1; i <= n; i++) {
    prevSpace = n - i;
    nextSpace = i - 1;
    console.log(" ".repeat(prevSpace) + "*" + " ".repeat(nextSpace));
  }
}
main(5);
