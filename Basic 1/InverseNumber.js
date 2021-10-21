function inverseNumber(number) {

  let temp=number;
  let counter=1;
  let inverseNumber=0
  while(temp>0){
      console.log('loop')
      let tempCount=temp%10;
      let div=1;
      for(let i=0;i<tempCount-1;i++){
          div=div*10
      }
      inverseNumber+=counter*div
      counter+=1;
      console.log({tempCount,div,inverseNumber,counter})
      temp=parseInt(temp/10)

  }
  console.log({inverseNumber})
}

inverseNumber(21453);
