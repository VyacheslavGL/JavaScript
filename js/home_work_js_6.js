(function () {
    'use strict';

    //Задание 1
    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25,
            img: '1.jpg'
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40,
            img: '2.jpg'
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12,
            img: '3.jpg'
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50,
            img: '4.jpg'
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5,
            img: '5.jpg'
        }
    };

    function createElem(obj) {
        for (let key in obj){
            //console.log(obj[key].title);
            let title = document.createElement("h2");
            title.innerText = obj[key].title;

            //console.log(obj[key].img);
            let img = document.createElement("img");
            img.setAttribute('src', "img/"+obj[key].img);
            img.classList.add("img");

            //console.log(obj[key].price);
            let p = document.createElement("p");
            p.innerText = obj[key].price;

            let div = document.createElement('div');
            div.classList.add("css-list"); //добавить стили
            div.appendChild(title);
            div.appendChild(img);
            div.appendChild(p);

            let goodsDiv = document.getElementById('goods_id');
            goodsDiv.appendChild(div);
        }
    }


    createElem(goods);


    console.log('----Задание 2-----');
    //Задание 2

    let articles = [
        {
            id: 1,
            title: "JS",
            description: "Описание",
            author: "Mike"
        },
        {
            id: 2,
            title: "PHP",
            description: "Описание",
            author: "Mike"
        },
        {
            id: 3,
            title: "HTML",
            description: "Описание",
            author: "Alex"
        },
        {
            id: 4,
            title: "Базы Данных",
            description: "Описание",
            author: "Peter"
        }
    ];


    function tableFull(obj) {
        let tablesFull = document.getElementsByTagName('table');
        let table = tablesFull[0];
        let caption = table.createCaption();
        caption.innerText = 'Java Script Data';
        table.border = '1px';
        table.width = '500px';
        let row = table.insertRow();
        let coll1 = row.insertCell();
        let coll2 = row.insertCell();
        let coll3 = row.insertCell();
        let coll4 = row.insertCell();

        coll1.innerText = 'Id';
        coll2.innerText = 'Title';
        coll3.innerText = 'Description';
        coll4.innerText = 'Author';

        for (let i=0; i<obj.length; i++){
            let row = table.insertRow();
            for (let key in obj[i]){
                let coll = row.insertCell();
                coll.innerText = obj[i][key];
                //console.log(obj[i].id);//значения id
                //console.log(key);//значения id, title, description, author
                //console.log(obj[i][key]);// присваиваются значения ключей 1, JS, Описание, Mike

            }
        }
    }



    tableFull(articles);

}());