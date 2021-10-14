function fibonacci(n){
    let a=0;
    let b=1;
    let c;
    for(let i=0;i<n;i++){
        console.log(a)
        c=a+b;
        a=b;
        b=c;
    }
}
let n=12;
fibonacci(n)