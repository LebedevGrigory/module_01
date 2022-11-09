'use strict';

const rectangle = {
    width: 20,
    height: 40,
    
    set newWidth (num) {
        if (Number.isFinite(num)) {
            this.width = num;
        } esle (this.width = 5);
    },

    set newHeight (num) {
        if (Number.isFinite(num)) {
            this.height = num;
        } esle (this.width = 5);
    },

  
    get perimeterReg () {
        return `${(this.width + this.height) * 2} см`
    },

    get areaReg () {
        return `${this.width * this.height} см`
    },
};


console.log(rectangle.perimeterReg);
console.log(rectangle.areaReg);

