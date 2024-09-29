function isLeapyear(year){
    if(year%400===0){
        console.log("leap year");
    }
    else if(year%100!==0 && year%4===0){
        console.log("leap year");
    }
    else {
        console.log("not a leap year");
    }
}

isLeapyear(2022);