'use strict';

class Storage {
  constructor(arr){
    this._arr = arr;
  }
  getItems(){
    return this._arr;
  }
  addItem(item){
    this._arr.push(item);
  }
  removeItem(item){
    let tempIndex = this._arr.indexOf(item);
    delete this._arr[tempIndex];
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

let items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]