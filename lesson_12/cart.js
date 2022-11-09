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

  set setDiscount(value) {
    if (value === 'METHED') {
      this.discount = 10;
    }

    if (value === 'NEWYEAR') {
      this.discount = 21;
    }
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
      const notDiscount = this.items.reduce((acc, current) =>
      acc + (current.price * current.amount), 0);

      if (this.discount) {
        return notDiscount * ((100 - this.discount) / 100);
      } else {
        return notDiscount;
      }
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

cart.setDiscount = 'METHED'

cart.print();


