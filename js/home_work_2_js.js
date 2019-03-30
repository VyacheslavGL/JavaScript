//Дан массив целых чисел. Числа не отсортированы и могут повторяться. Необходимо найти в данном массиве такие два числа M и N, чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд Для решения достаточно найти хотя бы одну подходящую пару чисел M и N. Подумайте над оптимальным вариантом поиска.

let arr = [4, 7, 5, 3, 1, 0, -2, 9, 2, 6];

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (i < j) {
                    if (arr[i] + arr[j] == 7) {
                        console.log(arr[i] + " + " + arr[j]+ " = " +7);
                    }
                }
            }
        }

console.log("------------------");


//Вывести через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, а для чисел, делящихся на 5 (но не на 3) – ‘Five’. Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.

for (let k=0; k<=100; k++){
    if(k%3 == 0){
        console.log("Three"+' - '+k);
        if(k%3 == 0 && k%5 == 0){
            console.log("Three Five"+' - '+k);
        }
    }else if(k%5 == 0){
        console.log("Five"+' - '+k);
        if(k%3 == 0 && k%5 == 0){
            console.log("Three Five"+' - '+k);
        }
    }/*else if(k%3 == 0 && k%5 == 0){
        console.log("ThreeFive"+k);
    }*/
}

console.log("------------------");

//Даны три числа. Определите, можно ли из отрезков с такими длинами составить треугольник. Определите вид треугольника (прямоугольный, тупоугольный, остроугольный), если он существует.
let aa=9, bb=7, cc=15, a, b, c;

a = Math.cos((Math.pow(aa,2)+Math.pow(cc,2)-Math.pow(bb,2))/2*aa*cc);
b = Math.cos((Math.pow(aa,2)+Math.pow(bb,2)-Math.pow(cc,2))/2*aa*bb);
c = Math.cos((Math.pow(bb,2)+Math.pow(cc,2)-Math.pow(aa,2))/2*bb*cc);

//console.log(a, b, c);

if(0<a && 0<b && 0<c){
    console.log("Треугольник остроугольный");
}else if(0<a && 0<b && c === 0 || 0<a && b === 0 && 0<c || a===0 && 0<b && 0<c){
    console.log("Треугольник прямоугольный");
}else if (a<0 && 0<b && c<0 || 0<a && b<0 && c<0 || a>0 && 0>b && c>0){
    console.log("Треугольник тупоугольный");
}else {
    console.log("Треугольник не сущестыует");
}


console.log("------------------");