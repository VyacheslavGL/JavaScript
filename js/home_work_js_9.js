//1.Реализовать метод библиотеки getBook(title). Метод возвращает книгу с названием равным title

function Book() {
    
}

Book.prototype.setTitle = function (title) {
  if (title.length < 5){
      return;
  }
  this._title = title;
};

Book.prototype.setPage = function (countPage) {
  if (countPage < 10){
      return;
  }
  this._page = countPage
};

Book.prototype.getTitle = function () {
    return this._title;
};

Book.prototype.getPage = function () {
    return this._page;
};

let book_note = new Book();
book_note.setTitle("Энциклопедия");
console.log(book_note.getTitle());

console.log('------Задание-2--------');
//площадь круга
function Circle() {

}
Circle.prototype.setArea = function (r) {
    if (r === 0){
        return;
    }
    this._pi = 3.14;
    this._area = this._pi*(r*r);
    this._perimert = 2*this._pi*r;
};
Circle.prototype.getArea = function () {
    return this._area;
};
Circle.prototype.getPerimetr = function () {
    return this._perimert;
};

let CircleArea = new Circle();
CircleArea.setArea(4);
console.log("Площадь круга:"+" "+CircleArea.getArea());
console.log("Периметр круга:"+" "+CircleArea.getPerimetr());

//площадь прямоугольника
function Rectangle() {

}
Rectangle.prototype.setRectangle = function (a, b) {
    if (a === 0 || b === 0){
        return;
    }
    this._RectangleArea = a*b;
    this._RectanglePerimetr = 2*(a+b);
};

Rectangle.prototype.getRectangle = function () {
    return this._RectangleArea;
};
Rectangle.prototype.getPerimetr = function () {
    return this._RectanglePerimetr;
};

let RectangleArea = new Rectangle();
RectangleArea.setRectangle(10, 15);
console.log("Площадь прямоугольника:"+" "+RectangleArea.getRectangle());
console.log("Периметр прямоугольника:"+" "+RectangleArea.getPerimetr());

//площадь треугольника
function Triangle() {
    
}

Triangle.prototype.setTriangle = function (b, h) {
    if (b === 0 || h === 0){
        return;
    }
    this._Trianglearea = 1/2 * b * h;
};

Triangle.prototype.getTriangle = function () {
    return this._Trianglearea;
};

let TriangleArea = new Triangle();
TriangleArea.setTriangle(5, 18);
console.log("Площадь треугольника:"+" "+TriangleArea.getTriangle());

function TrianglePerim() {

}
TrianglePerim.prototype.setPerimetr = function (a, b, c) {
  if (a === 0 || b === 0 || c === 0){
      console.log('Это не треугольник');
  }
  this._TrianglePerimetr = a+b+c;
};

TrianglePerim.prototype.getPerimetr = function (){
    return this._TrianglePerimetr;
};

let TriangleP = new TrianglePerim();
TriangleP.setPerimetr(5, 7, 9);
console.log("Периметр треугольника:"+" "+TriangleP.getPerimetr());

//3. Создать класс Cat. У кота должно быть имя - name, возраст - age, вес - weight, сила - strength.
// Реализовать метод fight(anotherCat): реализовать механизм драки котов в зависимости от их веса, возраста и силы. Зависимость придумать самостоятельно. Метод должен определять, выиграли ли мы бой или нет, т.е. возвращать true, если выиграли и false - если нет.

/*
function Cat() {

}

Cat.prototype.setName = function (name) {
    if (name.length < 3){
        return
    }
    this._name = name;
};

Cat.prototype.setAge = function (age) {
    if (age < 5){
        console.log('Запрещено для боев');
    }
    this._age = age;
};

Cat.prototype.setWeight = function (weight) {
    if (weight < 1){
        return;
    }
    this._weight = weight;
};

Cat.prototype.setStrength = function (strength) {
    if (strength < 10){
        console.log('Вы очень слабые');
    }
    this._strength = strength;
};

//Гетты
Cat.prototype.getName = function () {
    return this._name;
};

Cat.prototype.getAge = function () {
    return this._age;
};

Cat.prototype.getWeight = function () {
    return this._weight;
};

Cat.prototype.getStrength = function () {
    return this._strength;
};
*/

//////////////////////////////
/*
Cat1.prototype = Object.create(Cat.prototype);
Cat1.prototype.setName = function (name) {
    this._name = name;
};
Cat2.prototype = Object.create(Cat.prototype);
Cat2.prototype.setName = function (name) {
    this._name = name;
};
Cat3.prototype = Object.create(Cat.prototype);
Cat3.prototype.setName = function (name) {
    this._name = name;
};
Cat4.prototype = Object.create(Cat.prototype);
Cat4.prototype.setName = function (name) {
    this._name = name;
};*/


//метод
/*let Vasya = ['Vasya', 5, 15, 50];
let Petya = ['Petya', 5, 15, 50];*/

/*let cat1 = new Cat();
cat1.setName('Vasya');
cat1.setAge(5);
cat1.setWeight(15);
cat1.setStrength(50);
console.log(cat1.getName());

let cat2 = new Cat();
cat2.setName('Petya');
cat2.setAge(5);
cat2.setWeight(15);
cat2.setStrength(50);
console.log(cat2.getName());*/

/*function fait(a, b) {
    //задаем средние значения
    let  age = 5;
    let  weight = 2.5;
    let  strength = 50;
    for (let i=1; i<a.length; i++){
        //console.log('Мы выводим кота:'+a[i]);
    }
    for (let i=1; i<b.length; i++){
        //console.log('Мы выводим кота 2:'+b[i]);
    }
   /!* if (Math.abs(a[i] - age) === 0){
return;
    }
*!/
}*/

//fait(Vasya, Petya);

/*
function TurnirCat(name) {
    this._nameTurnir = name;
    this._arrTurnir = [];
}

TurnirCat.prototype.addToTurnir = function (catAdd) {
    if (!(catAdd instanceof Cat)){
        console.log('Обьект не являетсся обьектом Cat');
        return;
    }
    this._arrTurnir.push(catAdd);
};

TurnirCat.prototype.showToTurnir = function () {
    for (let i=0; i<this._arrTurnir.length; i++){
        console.log(this._arrTurnir[i].getName(), this._arrTurnir[i].getAge(), this._arrTurnir[i].getWeight(), this._arrTurnir[i].getStrength());
    }
    this._ageFait = this._arrTurnir[0].getAge() < this._arrTurnir[1].getAge() ? this._arrTurnir[1].getAge(): this._arrTurnir[0].getAge();
    console.log(this._ageFait);
};
*/

///////////////////////////

/*
function TurnirCat(name, age, weight, strength) {
    this._nameTurnir = name;
    this._ageTurnir = age;
    this._weightTurnir = weight;
    this._strengthTurnir = strength;
    //this._arrTurnir = [];

    console.log(this._nameTurnir, this._ageTurnir);
}

TurnirCat('Slava', 5, 10, 50);

cat1 = {
    name: 'Peta',
    age: 12,
    weight: 3,
    strength: 55
};

cat2 = {
    name: 'Vlad',
    age: 13,
    weight: 4,
    strength: 34
};
//console.log(cat1.name);

function fiyt(cat1, cat2) {
    this._catF1  = cat1;
    this._catF2  = cat2;

    console.log(this._catF1.name);
    console.log(this._catF2.name);
}

fiyt(cat1, cat2);
*/

/*
let cat1 = new Cat();
cat1.setName('Vasya');
cat1.setAge(5);
cat1.setWeight(7);
cat1.setStrength(55);
console.log(cat1.getName());

let cat2 = new Cat();
cat2.setName('Petya');
cat2.setAge(6);
cat2.setWeight(10);
cat2.setStrength(45);
console.log(cat2.getName());

let turnirCats = new TurnirCat();
turnirCats.addToTurnir(cat1);
turnirCats.addToTurnir(cat2);
turnirCats.showToTurnir();*/
