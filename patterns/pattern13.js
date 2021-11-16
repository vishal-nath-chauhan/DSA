function main(n){
    for(let i=0;i<n;i++){
        let temp=''
        let icj=1;
        for(let j=0;j<=i;j++){
            temp+=icj+' ';
            let icjp=icj*(i-j)/(j+1)
            icj=icjp;


            
        }
        console.log(temp)
    }
}
main(5)

main(7)