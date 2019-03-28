//однострочный комментарий

/*Многострочный комментарий*/

//Вывод информации в консоли
console.log("Выводимая информация");


//Переменные

//обьявление переменных
var  login;  //global переменная
let pwd;  //local переменная

//константа, значение изменить не можем
const const_value = 123;

//присвоение переменным значения
login = "qwe";
pwd = "1234";


// переопределение значения переменной
login = "asd";
pwd = "qwe233e43";

//вывод значений
console.log(login, pwd);
//
// let height, width;
// let height;
// let width;

let height = 323, width = 123;
//типы данных
//число number
height = 12.3;
width = 234;

//строки тип - string

let str = "Строка";
let str2 = 'Строка';

str = '"Строка1"';
str = '\'Строка2\'';
console.log(str);

//логический тип boolean
let active = true;
let stopped = false;

console.log(active, stopped);

//null - значение не известно
let unknownValue = null;
console.log(unknownValue);

//значение не присвоено undefined
let undefinedVal;
console.log(undefinedVal);

//опредеоить тип данных
console.log(typeof str); //тип данных
console.log(typeof active);

let age = '13 лет';
height = '300.67px';

//для преобразование строки в целое число
age = parseInt(age);

//для преобразование в число с плавающей точкой
height = parseFloat(height);

console.log(age);
console.log(typeof age);
console.log(height);

//арифметические операторы + - * /  %(взятие остатка от деления)
//числа с двоичной точностью
height = 45;
height = height *2;
console.log(height);

console.log(3+5); //8
console.log('3'+5); //конкатинация строк 35
console.log(+'3'+5); // 8
console.log('строка1 '+'строка2'); //конкатинация

console.log(34/'4');//8.5
console.log(34*'5');//170
console.log(34-'5');//29

console.log(34/'asd');//NaN
//проверка на число, может указать только true или false проверяет это число или нет если нет то true
console.log(isNaN("str"));// true
console.log(isNaN("23"));//false
console.log(isNaN("23ert"));//true
console.log(isNaN(45));//false
console.log(isNaN(false));//false
console.log(isNaN(true));//false

console.log(34/0); //Infinity
console.log(-34/0); //-Infinity

//взятие остатка
console.log(9%2);//1
console.log(8%2);//0
console.log(348%10);//8

//64 бит
console.log(Number.MAX_VALUE);//
console.log(Number.MIN_VALUE);//
console.log(Number.MAX_SAFE_INTEGER);//
console.log(Number.MIN_SAFE_INTEGER);//

//Оператор присвоения
//= += -= *= /=  %=

let a = 12;

//одно и то же
a = a+10;
a+=10;
console.log(a);
a = a *10; //a *=10
console.log(a);
a = a /10; //a /=10
a = a -10; //a -=10
a = a %10; //a %=10
console.log(a);//8

//Операторы сравнения
//> < >= <= ==(равенство) !=(не равенство)
//===(строгое равенство) !==(строгое неравенство)

height = 123;
width = '123';
let num = '123';
login = "asd";
login2 = "вав";

console.log(height > width);//false  происходит преобразование значений, лучше преобразовывает в число через функцию
console.log(height >= width);//true


console.log(login > login2);//false


console.log(height == width);//true
console.log(height === width);//false типы данных не равны, чаще используем такой оператор

//инкремент (увеличивает значение на 1
// и декримент (уменьшает значение на -1
// префиксная форма ++i --i

num = 2;
console.log(++num);
console.log(num);

//постфиксная форма i++
num = 2;
console.log(num++);//2
console.log(num);//3

num = 7;
let res = num++ - num++ + num++ - --num;
console.log(res);

//тернарные операторы

height = 23;
width = '65px';

//если true то вернет значение1 если false то значение2
//- тернарный оператор
//(условие) ? значение1 : значение2;
//(условие) ? значение1 : (условие) ? значение1 : значение2;

res = (height >= parseInt(width)) ? "высота больше или равна" : "ширина больше высоты";
console.log(res); //ширина больше высоты

//так не пишем
alert("сообщение");
document.body.innerHTML = "Сообщение";

//модальное окно
let data = prompt("Введите данные");//тип данных - строка
let data2 = parseInt(prompt("Введите данные сюда"));//тип данных - строка
console.log(data2);




