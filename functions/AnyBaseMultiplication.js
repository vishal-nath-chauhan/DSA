
function main(base,num1,num2){
  let final=0;
  let p=1;
  while(num2>0){
    let d1=num2%10;
    num2=parseInt(num2/10);
    let product=multiply(base,num1,d1);
    console.log({p:product*p,final})
    let d=addition(base,final,product*p);
    p*=10;
    final+=d;
    console.log({d1,num2,product,d,p,final,})


  }
  console.log({final})
}

main(8,234,76)

function multiply(base, num, digit) {
  let p = 1;
  let c = 0;
  let rv = 0;

  while (num > 0 || c > 0) {
    let d1 = num % 10;
    num = parseInt(num / 10);
    let d = d1 * digit + c;
    c = parseInt(d / base);
    rv += (d % base) * p;
    p *= 10;
    // console.log({d1,d,c,rv})
  }
  return rv
  // console.log({ rv });
}

// multiply(8,234,7)
// multiply(8,234,1)

function addition(base, num1, num2) {
  let p = 1;
  let rv = 0;
  let c = 0;
  while (num1 > 0 || num2 > 0 || c > 0) {
    let d1 = num1 % 10;
    let d2 = num2 % 10;
    num1 = parseInt(num1 / 10);
    num2 = parseInt(num2 / 10);
    let d = d1 + d2 + c;
    c = parseInt(d / base);
    rv += (d % base) * p;
    p *= 10;
  }
  return rv

  
  // console.log({ rv });
  // console.log({ rv });
}

// addition(8, 777, 1);

