function main(n){
    let count=1;
    for(let i=1;i<=n;i++){
        let temp=''
        for(let j=1;j<=i;j++){
            temp+=count+' ';
            count+=1
        }
        console.log(temp)
    }
}
main(5)
main(7)
