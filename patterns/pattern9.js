function main(n){
    let max=n+1;
    let i,j;
    for(i=1;i<=n;i++){
        let temp='';
        for(j=1;j<=n;j++){
            if(j==i || (max-i==j)){
                temp+='*'
            }
            else{
                temp+=' '
            }
        }
        console.log(temp)
    }
}
main(5)