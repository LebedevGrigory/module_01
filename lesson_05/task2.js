'use strick'

String.prototype.firstLetterToUppercase = function() {
    return this[0].toUpperCase() + this.slice(1);
}

const name = 'регистр Изменился';

console.log( name.firstLetterToUppercase());