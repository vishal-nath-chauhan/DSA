// check prime number

let n=16;

function checkPrime(n){
    if(n<0 || n==1 || n==0){
        return 'Prime  number'
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return 'Not Prime'
        }
    }
    return 'Prime Number'
}


//  we don't need to loop till n to find its factor,if a number has factor other than 1
//  you will find it before square root of n

function checkPrime2(n){
    if(n<0 || n==1 || n==0){
        return 'Prime  number'
    }
    // i<square root of n
    // 
    for(let i=2;i*i<n;i++){
        if(n%i==0){
            return 'Not Prime'
        }
    }
    return 'Prime Number'
}