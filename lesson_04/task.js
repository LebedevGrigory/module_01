'use strick'

// Урок 4 (задание №2)
{
const rain = Math.random();
const rainResult = Math.round(rain);
console.log(rainResult);
if (rainResult >= 1 ) {
    alert('Пошёл дождь. Возьмите зонт!')
    
} else {
    alert('Дождя нет!')
    
}
}

//Урок 4 (задание №3)
{
    const scoreMath = prompt('Введите кол-во баллов по математике:')
    const scoreRu = prompt('Введите кол-во баллов по русскому языку:')
    const scoreInf = prompt('Введите кол-во баллов по информатике: ')

    const scoreAll = scoreMath + scoreRu + scoreInf

    if (scoreAll >= 265){
        alert('Поздравляю, вы поступили на бюджет!')

    } else {
        alert('К сожалению, вы не поступили на бюджет')
    }
}