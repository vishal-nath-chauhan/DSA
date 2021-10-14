function  reverseDigit(number) {
    let output=[]
    let remainder;
    while(number>=1)
    {
        // number=number/10
        remainder=number%10;
        console.log(String(remainder))
        number=parseInt(number/10)


    }
    
}
reverseDigit(1245)
// reverseDigit(00001)  this kind of number won't work here as after taking first remainder 
//  we will left with 0000.1 and when we convert it to integer it becomes 0.

// number =00001;
//  remainder =number %10=> 1
//  number=parseInt(number/10) 0000.1=> 0
//  can't move forward