//1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и возвращает true, если массивы равны и false, если не равны.

let arrSum = [3,6,2,6,7,9];
let arrSum2 = [3,6,2,6,7,9];

function getArrSum(Arr1, Arr2) {
    if(!Array.isArray(Arr1) && !Array.isArray(Arr2) ){
        console.log("Это не массивы");
        return;
    }else if(Arr1.length !== Arr2.length){
        console.log("Они не равны ");return;
    }
    else if(Arr1.length === Arr2.length){
        console.log("Они равны по длине");
        for(i=0; i<Arr1.length && i<Arr2.length; i++){
            if(Arr1[i] === Arr2[i]){
                console.log([i]+' \'Элемент arrSum\''+Arr1[i]+' = '+[i]+' \'Элемент arrSum2\''+ Arr2[i]);
                // return;
            }else{
                return false;
            }
        }
    }
}

getArrSum(arrSum, arrSum2);

console.log('2---------------');

//2. Дано натуральное число N. Вычислите сумму его цифр, использую рекурсию (строки, массивы и циклы использовать запрещено).

function num(n) {

    if (n < 10) {
        return n;
        }
        else {
        return n % 10 + num(Math.floor(n / 10));
        }
    }

console.log(parseInt(num(123)));
// console.log(Math.round(num(123)));


console.log('3---------------');
//https://code.tutsplus.com/ru/tutorials/understanding-recursion-with-javascript--cms-30346
//http://www.cyberforum.ru/javascript/thread1587834.html

//3.Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не задан, шаг равенства единице) - шаг для построения массива.
// Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. Например,
// вызов функции range (1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].

var arr1 = [];
function range2(start, end, c=2) {
    for (var i = 0; i < end/c; i++){
        if(i== 0){
            arr1[i] = start;
        }else{
            arr1[i] = start+=c;
        }
    }
    console.log(arr1);
}

range2(1,10,2);

console.log('4---------------');

//4.Считать, что слово «товар» нужно в форме («12 товаров», но «22 товара» и тд).

function goods(num = 'товар') {
            return num;
    }

function tovar(num3) {
    if(num3 === 1 || num3 === 21){
        console.log(num3 +' '+ goods());
    }else if((5 <num3 && num3<20) || (25<=num3 && num3<=29)){
        console.log(num3 +' '+ goods()+'ов');
    }else if(22 <num3 && num3<24){
        console.log(num3 +' '+ goods()+'а');
    }else {
        console.log('Вы задали не верное значение!');
    }
}

tovar(30);





