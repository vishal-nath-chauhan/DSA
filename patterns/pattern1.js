function main(n){
for(let i=1;i<=n;i++){
    let temp=''
    for(let j=1;j<=i;j++){
        temp+='* '
    }
    console.log(temp)
}
}

main(5)

// * 
// * * 
// * * *
// * * * *
// * * * * *