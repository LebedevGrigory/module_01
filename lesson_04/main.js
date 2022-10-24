'use strick'

// новый блок инструкций ( Урок №4 )

const title = prompt('Наименование товара', 'введите текст');
const titleSave = title;               // присваиваем знаение promt константе

function amountFn() {        // создаем функцию для реалищации метода isNan
    const amount = prompt('Колличество товара', 'введите текст')
    if (isNaN(amount)) {
        alert('Вы ввели некорректные данные')   //cообщение о ошибке
        amountFn();
    }
    else {
        return amount;      
    }
    
}
const amountSave = amountFn();

const category = prompt('Категория товара', 'введите текст');
const categorySave = category;

function priceFn() {        // создаем функцию для реалищации метода isNan
    const price = prompt('Цена товара', 'введите текст')
    if (isNaN(price)) {
        alert('Вы ввели некорректные данные')   //cообщение о ошибке
        priceFn();
    }
    else {
        return price;      
    }   
}

const priceSave = priceFn();


// выводит текст со значениями
console.log(`Вы заказали ${titleSave}` + ` в колличестве ` + amountSave + ` килограмм `  + `из категории ${categorySave}` + ` по цене `  + priceSave + ` рублей`);



