function main(n){
    let k=n;
    let half=Math.ceil(n/2)
    for(let i=1;i<=n;i++){
        let temp='';
        for(let j=1;j<=n;j++){
            if(j==1 || j==n){
                temp+='*'
            }else if((j==i || j==k) && i>=half){
                temp+='*'
            }else{
                temp+=' '
            }
        }
        k--;
        console.log(temp)
    }
}
main(5)