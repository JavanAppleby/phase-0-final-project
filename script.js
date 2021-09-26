function d20(min, max) {
    let minNum = min;
    let maxNum = max;
    let mathLogic = Math.floor(Math.random() * (max - min + 1)) + min;
    return mathLogic
}

function rollInit(minimum, maximum) {
    let theRoll = d20(minimum, maximum);
    
    if (theRoll === 1) {
        var printedStatement = `You might want to try again, because that ${theRoll} was a CRITICAL FAIL!`
    } else if (theRoll === 20) {
        var printedStatement = `Whoa, we got a high roller here! That ${theRoll} was a CRITICAL SUCCESS!`
    } else {
        var printedStatement = `You rolled a ${theRoll}. That's good enough! You may pass` 
    };
    /*return printedStatement;*/
    
    document.getElementById(`result`).innerHTML = printedStatement;
}

/*console.log(rollInit(1, 20))*/