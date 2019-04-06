(function () {
    'use strict';

    //1Написать функцию со следующими аргументами: объект, from (значение от),
    // to (значение до). Функция должна вернуть объект с товарами, цены которых лежат
    // в диапазоне от значения from до значения to. Пример вызова функции getGoods(goods, 2000, 3000);
    // в данном случае функция должна вернуть все товары, у которых цена в диапазоне от 2000 до 3000.
    // Для проверки функции используйте объект goods из файла с урока.
    console.log('------Задание-1-------');

    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

    //console.log(goods.piano.price);

    function good(object, from, to) {
        //let array = [];
        for (let keys in object) {
            //console.log(object[keys]["price"]);
            if(object[keys]["price"] > from && object[keys]["price"] < to){
                //array.push(object[keys]["title"]);
                console.log(object[keys]["title"]);
            }
        }
        //return array;
    }

    //console.log(good(goods, 2000, 3000));
    good(goods, 2000, 3000);

    //2 Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект,
    // title - название товара, count - количество товара, которое нужно добавить в корзину.
    // Функция ищет товар с указанным названием, если количество позволяет, то уменьшает
    // количество товара на countToCart, если не позволяет, то выводит информацию об этом
    // в консоль и завершает работу. Для проверки функции используйте объект goods из файла с урока.

    console.log('------Задание-2-------');

    goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

    function addToCart(obj, title, countToCart){
        for (let key in obj) {
            if (obj[key]['title'] == title){
                obj[key]['count'] -=countToCart;
                if (obj[key]['count'] < 0){
                    console.log("Товара недостаточно, введите меньшее колличество!");return;
                } else{
                    console.log("Товар добавлен в корзину: " + obj[key]['title']);
                    console.log("Осталось в наличии: " + obj[key]['count'] + ' шт.');
                }

            }
            //console.log(obj[key]['count']);
        }
    }

    addToCart(goods, "Гитара", 35);


    //3.Напишите функцию, которая отсортирует массив объектов books по значению свойства title.
    // Объект в файле с занятия.

    let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];

    //Object.keys(books);
    books.sort((prev, next) => {
        if ( prev.title < next.title ) return -1;
        if ( prev.title < next.title ) return 1;
    });

    console.log(books);


    //4.Создайте объект с днями недели. Ключами в нем должны служить
    // номера дней от начала недели (понедельник - первый и т.д.).
    // Выведите на экран текущий день недели.


    let day = {
        Понедельник:1,
        Вторник:2,
        Среда:3,
        Четверг:4,
        Пятница:5,
        Суббота:6,
        Воскресенье:7,
    };


    //console.log(day["Суббота"]);

    function namDay(day){
        for (let key in day){
            //console.log(key);
            if(key == getWeekDay()){
                console.log('Сегодня: '+ key+' '+day[key]+' день недели!');
            }
        }
    }

    namDay(day);


}());