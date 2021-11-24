function main(n,d) {
  let count = 0;

  let totalLen = 0;
  let cnt=0
  let tempNum=n
let quotient;
  while (tempNum>0) {
      quotient=tempNum%10;
      if(quotient==d){
          cnt+=1
      }
    tempNum=parseInt(tempNum/10);
    totalLen+=1

  }
  console.log({totalLen,cnt})
}


main(144151515,5)