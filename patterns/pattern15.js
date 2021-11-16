function main(n) {
  //   let half = parseInt(n / 2);
  //   let space = half;
  //   let starCount = 1;
  //   let temp=1;
  //   for (let i = 1; i <= n; i++) {
  //     if (i <= half) {
  //       console.log(" ".repeat(space) + String(temp).repeat(starCount));
  //       starCount += 2;
  //       space -= 1;
  //       temp+=1
  //     } else {
  //       console.log(" ".repeat(space) + String(temp).repeat(starCount));

  //       space += 1;
  //       starCount -= 2;
  //       temp-=1

  //     }
  //   }

  let half = parseInt(n/ 2);
  let spaces = half+1;
  let star = 1;
  let count=1;
  let cVal;
  for (let i = 1; i <= n; i++) {
    let temp=''
    cVal=count;  
    for(let j=1;j<=spaces;j++){
        temp+=' '
      }
    for(let k=1;k<=star;k++){
        temp+=cVal;
        if(k<=star/2){
            cVal++;
        }
        else{
            cVal--;
        }
    }
    console.log(temp)
    // console.log(" ".repeat(spaces) + "*".repeat(star));
    if (i <= half) {
        spaces--;
        star+=2;
        count++;
      } else {
        spaces++;
        star-=2;
        count--;
      }
  }
  
}
main(5);
