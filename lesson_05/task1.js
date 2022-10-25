'use strick'

// Урок 5 (Задание №1)

const euro = 79;
const dollar = 72;

const convector = prompt(`стоимость покупки евро ${euro}`, 'какое колличество купюр вы хотите приобрести?')

function change(money) {
    const convert = convector * euro;
    return convert
}

console.log( 'вам нужно заплатить ' + change() + ' рублей' );  // сумма которую нужно заплатить в рублях