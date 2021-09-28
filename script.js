function d20(min, max) {
    let minNum = 1;
    let maxNum = 20;
    let mathLogic = Math.floor(Math.random() * (parseInt(maxNum) - parseInt(minNum) + 1)) + parseInt(minNum);
    return parseInt(mathLogic)
}

function rollInit(minimum, maximum) {
    let theRoll = parseInt(d20(minimum, maximum));
   
    if (parseInt(theRoll) === 1) {
        var printedStatement = `You might want to try again, because that ${theRoll} was a CRITICAL FAIL!`
    } else if (parseInt(theRoll) === 20) {
        var printedStatement = `Whoa, we got a high roller here! That ${theRoll} was a CRITICAL SUCCESS!`
    } else {
        var printedStatement = `${theRoll} That's good enough! You may pass` 
    };
    /*return printedStatement;*/

    document.getElementById(`result`).innerHTML = printedStatement;
}

/*console.log(rollInit(1, 20));*/