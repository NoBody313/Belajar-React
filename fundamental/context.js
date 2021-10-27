

// let a = 2
// const kuadrat = function(num) {
//     let result = num*num
//     return result
    
// }

// let resultA = kuadrat(a)

// console.log(resultA)

// Anonimous func

// const iniFungsi = function(param) {
//     console.log(param)
// }
// iniFungsi("anonymous Function")

// const arrowFuntion = (param) => {
//     console.log(param)
// }
// arrowFuntion("ini adalah arow funt")

// callback function

// function iniGenap(num) {
//     return num %2 == 0
//     return num %3 == 0
//     return num %5 == 0
// }

// function hasil(num) {
//     const benar = iniGenap(num)
//     if (benar) {
//         console.log(`${num} bizz`)
//     } else {
//         console.log(`${num} buzz`)
//     }
// }

// hasil(7)

// Fizz Buzz

// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

// High Order CallBack


function genap(num) {

    return num%2 == 0
}

function cetak (num, callback) {
    const benar = callback(num)
    if (benar) {
        console.log(`${num} adalah bilangan genap`)
    } else {
        console.log(`${num} bilangan genap`)
    }
}

cetak(12, genap)
