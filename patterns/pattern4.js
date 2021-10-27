function main(n){
let star=n;
let space=0;
for(let i=1;i<=n;i++){
    console.log(' '.repeat(space)+'*'.repeat(star));
    star--;
    space++;
}
}
main(5)

// *****
//  ****
//   ***
//    **
//     *