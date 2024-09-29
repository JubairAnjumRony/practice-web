function inchToFeet(inch){
    const feet=inch/12;
    return feet;
}

console.log(inchToFeet(75));
console.log(inchToFeet2(75));


function inchToFeet2(inch){
    const feetint=parseInt(inch/12);
    const remainginch=inch%12;
    const result=feetint+ " feet " + remainginch +" inch";
    return result;
}