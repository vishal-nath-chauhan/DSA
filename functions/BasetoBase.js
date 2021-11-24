function main(num,b1,b2){
    let temp=num;
    let finalDigit=0;
    let cnt=0;
    let decimalDigit=0;
    while(temp>0){
        let qt=parseInt(temp/10);
        let rm=temp%10;
        decimalDigit+=rm*Math.pow(b1,cnt);
        cnt++;
        temp=qt;

    }
    console.log(decimalDigit);
    temp=decimalDigit;
    cnt=0;
    while(temp>0){
        let qt=parseInt(temp/b2);
        let rm=temp%b2;
        finalDigit+=rm*Math.pow(10,cnt);
        cnt++;
        temp=qt;

    }
    console.log(finalDigit)

}
main(111001,2,3)