'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  increaseCount(num) {
    this.count += num;
  },

  add(title, price, amount) {
    const item = {
      title,
      price,
      amount,
    };

    this.items.push(item);
    this.increaseCount(amount);
  },

  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, current) =>
      acc + (current.price * current.amount), 0);
  },


  print() {
    this.items.forEach(item =>
      console.log(`${item.title} : ${JSON.stringify(item)}`));
    console.log('Всего товаров на сумму:', cart.totalPrice, 'рублей');
  },

};


cart.add('apple', 100, 3);
cart.add('orange', 120, 2);
cart.add('watermelon', 30, 10);

cart.print();


