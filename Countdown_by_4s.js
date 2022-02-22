for(var year = 2020; year > 0; year = year - 4){
    console.log (year)
}
// if (i % 4 === 0); ANOTHER WAY TO "CONSOLE.LOG" 


var year = 2020
while(year > 0){
    console.log (year)
}


function flexCountdown(highNum, lowNum, mult){
    for(i = highNum; i > lowNum; i--){
        if (i % mult === 0);
    }
}


function flexCountdown(highNum, lowNum, mult){
    for(i = highNum; i > lowNum; i = i = mult){ // DIFFERENT VARIANT
    console.log(i)
    }
}