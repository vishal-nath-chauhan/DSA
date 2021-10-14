function rotateDigit(number, k) {
  // let num=String(number)
  // let count=k
  // console.log({number,k})
  // while(count>=1){
  //     console.log({e:num[num.length-1],l:num.slice(0,num.length-k+1)})
  //     let temp=num[num.length-1]+ num.slice(0,num.length-k+1);
  //     console.log({temp})
  //     num=temp
  //     count-=1
  // }
  // console.log(num)
  let temp = number;
  let cod = 0;
  while (temp >= 1) {
    temp = temp / 10;
    cod++;
  }
  //   let div=Math.pow(10,k)
  //   let remainder=number%div;
  //   let quotient=(number-remainder)/div;
  //   remainder=remainder*Math.pow(10,cod-k)
  //   let output=remainder+quotient;
  //   console.log({output})


//   getting power of 10 in variables without using Math.pow function
  let div = 1;
  let multiplier = 1;
  for (let i = 1; i <= cod; i++) {
    if (i <= k) {
      div *= 10;
    } else {
      multiplier *= 10;
    }
  }

  let remainder = number % div;
  let quotient = (number - remainder) / div;
  remainder = remainder * multiplier;
  let output = remainder + quotient;
  console.log({ output });
}

rotateDigit(562984, 2);
