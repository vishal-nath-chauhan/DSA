
function main(n) {
  let lspace = parseInt(n/2);
  let rspace = parseInt(n/2);
  let star = 1;
  for (let k = 1; k <= n; k++) {
    let temp = "";
    if(k==parseInt(n/2)+1){
        newlspace=0;
        newrspace=0;
        newstar=n;    
        for (let i = 1; i <= newlspace; i++) {
            temp += " ";
          }
          for (let i = 1; i <= newstar; i++) {
            temp += "*";
          }
          for (let i = 1; i <= newrspace; i++) {
            temp += " ";
          }
          rspace++;
          star--;

        
    }
    else{
        for (let i = 1; i <= lspace; i++) {
            temp += " ";
          }
          for (let i = 1; i <= star; i++) {
            temp += "*";
          }
          for (let i = 1; i <= rspace; i++) {
            temp += " ";
          }
          if (k <= n / 2) {
            rspace--;
            star++;
          } else {
            rspace++;
            star--;
          }
    }
    
  }
}
// main(5)
main(7)

