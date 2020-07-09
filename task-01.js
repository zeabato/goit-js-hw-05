"use strict";

  const Account = function(obj){ //функция конструктор
  this.login = obj.login;
  this.email = obj.email;
} 


Account.prototype.getInfo = function(){                       //функция прототип которая не харанится в каждом
  console.log(`Login: ${this.login}, Email: ${this.email}`);  // обекте, а сохраняется в прототипе класса
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
console.log(mango);




mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly);

poly.getInfo(); // Login: Poly, Email: poly@mail.com