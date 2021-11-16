function main(n){
 
    let a=0;
    let b=1;
    let c;
let temp;
    for(let i=1;i<=n;i++){
         temp=''
        for(let j=1;j<=i;j++){
            temp+=a+' '
            c=a+b;
            a=b;
            b=c
        }
        console.log(temp)

    }
}
main(5)