// function main(base,n1,n2){
//     let temp1=n1;
//     let temp2=n2;
//     let cnt=0;
//     let finalDigit=0
//     let tempdigit1=0
//     let tempdigit2=0;
//     while(temp1>0){
//         let qt=parseInt(temp1/10);
//         let rm=temp1%10;
//         tempdigit1+=rm*Math.pow(base,cnt);
//         cnt++;
//         temp1=qt
//     }
//     cnt=0;

//     while(temp2>0){
//         let qt=parseInt(temp2/10);
//         let rm=temp2%10;
//         tempdigit2+=rm*Math.pow(base,cnt);
//         cnt++;
//         temp2=qt
//     }
//     cnt=0
//     finalDigit=tempdigit1+tempdigit2;
//     let temp3=finalDigit;
//     let tempdigit3=0
//     while(temp3>0){
//         let qt=parseInt(temp3/base);
//         let rm=temp3%base;
//         tempdigit3+=rm*Math.pow(10,cnt);
//         cnt++;
//         temp3=qt
//     }
//     console.log(tempdigit3)

// }
// main(8,777,1)

// pepcoding approach

function main(base, n1, n2) {
  let c = 0;
  let rv = 0;
  let p = 1;

  while (n1 > 0 || n2 > 0 || c > 0) {
    let d1 = n1 % 10;
    let d2 = n2 % 10;
    n1 = parseInt(n1 / 10);
    n2 = parseInt(n2 / 10);
    let d = d1 + d2 + c;
    c = parseInt(d / base);
    d = d % base;
    rv += d * p;
    p = p * 10;
  }
  console.log({ rv });
}

main(8,777,1)
