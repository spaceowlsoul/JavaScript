// JS_HW2.

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1.

let number = 2;
let i = 1;
let finalExponent = 10;
while (i <= finalExponent) {
    console.log(Math.pow(number, i));
    i++;
}

// или

// let number = 2;
// let finalExponent = 10;
// for (let i = 1; i < finalExponent; i++) {
//     console.log(Math.pow(number, i));
// }

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2.

let baseNumber = 2;
const powerNumber = function(exponent) {
    console.log(Math.pow(baseNumber, exponent));
}
powerNumber(10);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let symbol = ':)';
let sequence = symbol;
let n = 0;
let rows = 5;
while (n < rows) {
    console.log(sequence);
    n++;
    sequence += symbol;
}

// или

// let rows = 5;
// let symbol = ':)';
// let sequence = '';
// for (let i = 0; i < rows; i++) {
//     console.log(sequence += symbol);
// }

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), 
//     а также количество строк для вывода.
//     E.g. function printSmile(stroka, numberOfRows)

let a = 0;
let innerSymbol = '';
const printSymbol = function(inputSymbol, numberOfRows) {
    while (a <= numberOfRows) {
        console.log(innerSymbol);
        a++;
        innerSymbol += inputSymbol;
    }
}

printSymbol('^)', 10);

// или

// let innerSymbol_1 = '';
// const printSymbol_1 = function(inputSymbol_1, numberOfRows_1) {
//     for (let i = 0; i <= numberOfRows_1; i++) {
//     console.log(innerSymbol_1);
//     innerSymbol_1 += inputSymbol_1;
// }
// }

// printSymbol_1('^)', 10);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных
//       и сколько согласных букв.
//       e.g. function getWordStructure(word)
// В консоли:
// Слово (word) состоит из  (число) гласных и (число) согласных букв.

// let vowels = 'aeiou';
// let consonants = 'bcdfghjklmnpqrstvwxyz';
// или

let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const getWordStructure = function(word) {
  let vowelsCount = 0;
  let consonantsCount = 0;
  let wordLowLetters = word.toLowerCase();
  for(let i = 0; i < wordLowLetters.length ; i++) {
// Метод indexOf() возвращает -1, если значение не найдено.
    if (vowels.indexOf(wordLowLetters[i]) !== -1) {
        vowelsCount ++;
    } else if (consonants.indexOf(wordLowLetters[i]) !== -1) {
        consonantsCount ++;
    }
  }
  console.log(`Слово ${word} состоит из ${vowelsCount} гласных и ${consonantsCount} согласных букв.`);
}

// Проверки: 'case', 'Case', 'Check-list'
getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом.
//      E.g. function isPalindrom(word)

const isPalindrom = function(word) {
    let wordLow = word.toLowerCase();
    if(wordLow === wordLow.split('').reverse().join('')) {
        console.log(`Слово ${word} является палиндромом.`);
    } else {
        console.log(`Слово ${word} НЕ является палиндромом.`);
    }
}

// Проверки: 'abba', 'Abba'
isPalindrom('abba');
isPalindrom('Abba');
