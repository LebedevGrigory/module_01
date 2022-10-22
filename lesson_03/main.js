'use strick'

{
const title = 'apple';
const amount = 5;
const category = 'fruit';
const price = 100;
console.log(title); //наименование товара

const total = amount * price;
console.log(total) // общая сумма товара
} 

{ 
const title = 'tomato';
const amount = 3;
const category = 'vegetables';
const price = 150;
console.log(title); //наименование товара

const total = amount * price;
console.log(total) // общая сумма товара
} 

// новый блок инструкций ( Урок №3 )
{ 
const title = prompt('Наименование товара', 'введите текст');
const titleSave = title;               // присваиваем знаение promt константе

const amount = prompt('Необходимое колличетсво товара', 'введите текст');
const amountSave = amount;

const category = prompt('Категория товара', 'введите текст');
const categorySave = category;

const price = prompt('Цена товара', 'введите текст');
const priceSave = price;

console.log(typeof +amount);   // преобразовываем в number
console.log(typeof +price);    // преобразовываем в number

// выводит текст со значениями
console.log(`Вы заказали ${titleSave}` + ` в колличестве ` + amountSave + ` килограмм `  + `из категории ${categorySave}` + ` по цене `  + priceSave + ` рублей`);


} 

