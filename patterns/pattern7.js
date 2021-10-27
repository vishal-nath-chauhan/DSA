function main(n){
    // let space;
    // for(let i=1;i<=n;i++){
    //     space=i-1
    //     console.log(' '.repeat(space)+'*')
    //     // space=i-1
    // }
    for(let i=1;i<=n;i++){
        let temp=''
        for(let j=1;j<=n;j++){
            if(i==j){
                console.log(temp+'*')
            }
            temp+=' '

        }
    }
}
main(5)