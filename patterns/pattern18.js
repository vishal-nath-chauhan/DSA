function main(n) {
  let half = Math.ceil(n / 2);
 let star=n;
 let space=0;
 for(let i=1;i<=n;i++){
     let temp=''
     for(let j=1;j<=space;j++){
         temp+=' '
     }
     for(let j=1;j<=star;j++){
         if(j>1 && j<star && i<n/2 && i>1 && i<n){
             temp+=' '
         }else{
             temp+='*'
         }
     }
     console.log(temp);;
     if(i<half){
         star-=2;
         space++;
     }
     else{
         star+=2;
         space--
     }
    //  star-=2;
    //  space+=1
 }
}
main(7);
