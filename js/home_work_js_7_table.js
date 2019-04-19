let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: 'pic1.jpg'
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: 'pic2.jpeg'
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: 'pic1.jpg'
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: 'pic2.jpeg'
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: 'pic1.jpg'
    }
};

function createElems(obj) {
    for (let key in obj) {
        console.log(obj[key].title);
        let title = document.createElement("h2");
        title.innerText = obj[key].title;

        console.log(obj[key].img);
        let img = document.createElement("img");
        img.setAttribute("src", "img/" + obj[key].img);

        // console.log(obj[key].price);

        let div = document.createElement('div');
        // div.classList.add();
        div.appendChild(title);
        div.appendChild(img);

        let goodsDiv = document.getElementById("goods");
        goodsDiv.appendChild(div);
    }
}

//createElems(goods);


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

/*let tableGenerator = {
    init: function (arr_data) {
        //let data = arr_data; // локальная переменная метода
        // ее видно только внутри данного метода
        this.data = arr_data; // свойство объекта - доступно
        // в других методах объекта
        this.table = document.createElement('table');
        this.table.setAttribute('border', '1');
    },
    // названия столбцов
    genCaption: function () {
        let captionRow = this.table.insertRow();
        for (let key in this.data[0]){
            let cell = captionRow.insertCell();
            cell.innerText = key.toUpperCase();
            cell.classList.add('caption-cell');
        }
    },

    genContent: function () {
        for (let i = 0; i < this.data.length; i++){
            let row = this.table.insertRow();
            for (let key in this.data[i]) {
                let cell = row.insertCell();
                cell.innerText = this.data[i][key];
                //console.log(this.data[i][key]);
                cell.classList.add('content-cell');
            }
        }
    },
    getTable: function (arr_data) {
        this.init(arr_data);
        this.genCaption();
        this.genContent();
        return this.table;
    }
};

let tableContainer = document.getElementById('for_table');
tableContainer.appendChild(tableGenerator.getTable(articles));*/

function tableOfArticle(arr) {
    let divTable=document.getElementById('table');
    let table=document.createElement('table');
    divTable.appendChild(table);
    table.setAttribute('id','tbl');
    table.setAttribute('border','1');
    table.setAttribute('cellpadding','5px');
    let tr=document.createElement('tr');
    table.appendChild(tr);


    for ( let key in arr[0]){
        let th=document.createElement('th');
        th.innerText=key;
        th.setAttribute('style', 'text-transform: capitalize');

        tr.appendChild(th);
    }

    for (let i=0; i<=(arr.length-1); i++) {

        let tr=document.createElement('tr');
        for (let key in arr[i]){
            let td=document.createElement('td');
            td.innerText=arr[i][key];
            tr.appendChild(td);
        }
        tr.setAttribute('id',i);
        table.appendChild(tr);
    }


//дабавляем соритровку

let sortColumn=document.querySelectorAll('th');
console.log(sortColumn);

//вешаем клик на заголовки столбцов
for (let i=0; i<sortColumn.length; i++) {
    sortColumn[i].addEventListener('click', sortRow);
}

//отслеживаем клик
function sortRow(event) {
    let clickElem = event.target;
    console.log(clickElem);
    let clickPuk = clickElem.innerHTML;
    console.log(clickPuk);

    //перезаписываем в новый массив
    let sortTable = arr.slice(0);
    sortTable.sort(function (a, b) {
        let x = a[clickPuk];
        let y = b[clickPuk];
        return x < y ? (-1) : x > y ? 1 : 0;
    });


    //сортируем
    for (let i=0; i<=(sortTable.length-1); i++) {
        let tr=document.createElement('tr');
        //удаляем предыдущие строки
        let removeTr=document.getElementById(i);
        removeTr.remove();

        for (let key in sortTable[i]){
            let td=document.createElement('td');
            td.innerText=sortTable[i][key];
            tr.appendChild(td);
        }
        tr.setAttribute('id',i);
        table.appendChild(tr);
    }
}
}

tableOfArticle(articles);
