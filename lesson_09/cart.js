'use strick'

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    
    getTotalPrice() {         // метод получение всей стоимости товаров
        return this.totalPrice;
    },

    increaseCount (num) {      // метод увеличения товара;
        this.count += num;
    },

    add(title, price, amount ) {  // метод формирование объекта из полученных параметров
        
        const item = {              
            title,
            price,
            amount,
        }

        this.items.push(item);
        this.increaseCount(amount);
        this.calculateItemPrice();
    },

    clear () {                    // метод возращение начальных значений
        this.items.length = 0;
        this.totalPrice = 0;
        this.count = 0;
    },

    calculateItemPrice () {                 //  метод подсчета всей стоимости товаров в корзине
        this.totalPrice = this.items.reduce((acc, current) => 
        acc + (current.price * current.amount), 0) 

    },


    print() {               
      this.items.forEach(item => console.log(`${item.title} : ${JSON.stringify(item)}`));
      console.log('Всего товаров на сумму:', cart.getTotalPrice(), 'рублей');
  },
    
};


cart.add ('apple', 100 , 3);
cart.add ('orange', 120, 2);
cart.add ('watermelon', 30, 10);

cart.print();


