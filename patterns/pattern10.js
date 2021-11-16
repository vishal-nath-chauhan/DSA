function main(n){
    let half=parseInt(n/2)
    let outerSpace=half;
    let innerSpace=-1;
    let temp;
    for(let i=1;i<=n;i++){
        // temp=''
        if(i<=half){
             temp=' '.repeat(outerSpace)+'*'+' '.repeat(innerSpace==-1?0:innerSpace);
            if(i==1 || i==n){
                temp+=' '.repeat(outerSpace)
            }
            else{
                temp+='*'+" ".repeat(outerSpace)
            }
            console.log(temp);
            outerSpace--;
            innerSpace+=2
        }else{
             temp=' '.repeat(outerSpace)+'*'+' '.repeat(innerSpace==-1?0:innerSpace);
            if(i==1 || i==n){
                temp+=' '.repeat(outerSpace)
            }
            else{
                temp+='*'+" ".repeat(outerSpace)
            }
            console.log(temp);
            outerSpace++;
            innerSpace-=2
        }
    }
}
// main(5)
main(7)
