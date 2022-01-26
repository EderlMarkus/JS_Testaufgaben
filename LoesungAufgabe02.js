/**
 * --------------------
 * --------------------
 * -----Fizz Buzz------
 * --------------------
 * --------------------
 * Schreibe ein Programm, welches die Zahlen 1 - 100 ausgibt, 
 * aber jedesmal, wenn eine Zahl durch 3 teilbar ist soll "Fizz" 
 * ausgegeben werden, jedesmal wenn eine Zahl durch 5 teilbar ist, 
 * soll "Buzz" ausgegeben werden. Wenn eine Zahl durch 3 und 5 teilbar ist, 
 * soll "FizzBuzz" ausgegeben werden (also zB 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,...);
*/

/**
 * 
 * @param {json} params benötigte Parameter: start, end, fizzNumber, buzzNumber
 * @returns array mit jeweils indexnummer oder Fizz, Buzz oder FizzBuzz-string
 */
const writeFizzBuzz = (params) => {
    const start = params.start;
    const end = params.end;
    const fizzNumber = params.fizzNumber;
    const buzzNumber = params.buzzNumber
    let retArray = [];
    for (let i = start; i <= end; i++) {
        switch (true) {
            case i % fizzNumber == 0 && i % buzzNumber == 0:
                retArray.push("FizzBuzz");
            break;
            case i % fizzNumber == 0:
                retArray.push("Fizz");
            break;
            case i % buzzNumber == 0:
                retArray.push("Buzz");
            break;
            default:
                retArray.push(i);
            break;
        }
    }
    return retArray;
}


console.log(writeFizzBuzz({start: 1, end: 100, fizzNumber: 3, buzzNumber: 5}));