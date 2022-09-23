
// let name = prompt('Type your name')
// let birth =+prompt('Type the year of your birth')
// let year =+prompt('Type the current year')
// function date(name, birth, year) {
//     let minus = year - birth
//     return minus
// }
// alert(name + ' your age is ' + date(name, birth, year));

let number = +prompt('Type any number of examples')

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function randomSym() {
    return Math.floor(Math.random() * (5 - 1) + 1)
}

for (let i = 0; i < number; i++) {
    let num1 = randomNum(1, 20);
    let num2 = randomNum(1, 20)
    let symbol = randomSym()
    let result = 0

    if (symbol == 1) {
        symbol = '+'
        result = num1 + num2
    }
    else if (symbol == 2) {
        symbol = '-'
        result = num1 - num2
    }
    else if (symbol == 3) {
        symbol = '*'
        result = num1 * num2
    }
    else if (symbol == 4) {
        symbol = '/'
        result = num1 / num2
    }
    let answer = +prompt(num1 + symbol + num2);
    console.log(answer == result ? ' your answer is right ' + answer : ' your answer is wrong ' + answer + ' the right answer is ' + result);
}
