'use strict';


const warrior = {
  name: 'Artem',
  health: 100,
  speed: 10,
  showThis(){
    console.log(this);
  },
  showName(){
    console.log(this.name);
  },

}



// warrior.showThis();
// warrior.showName();

const showThis = function(){
  console.log(this);
}

// showThis();
// якщо підключення скрипта через модулі або є use strick то this буде undefind, інакше посилатиметься на глоб об'єкт window.

warrior.showSpeed =function (){
  console.log(this.speed);
}

warrior.showSpeed();
warrior.showThis();

const showWarrior = function(callback){
  callback();
}

showWarrior(warrior.showThis.bind(warrior));

// Call & Apply

const product = {
  title: 'meat',
  price: 140,
  showTitle(){
    console.log(`Do you want to buy ${this.title}`);
  }
}
const showPrice = function (){
  console.log(`This priduct cost: ${this.price}`);
}

// showPrice.call(product);
// showPrice.apply(product);

// const showPrice = function (){
//    return `This priduct cost: ${this.price}`;
// }
console.log(showPrice.call(product));
