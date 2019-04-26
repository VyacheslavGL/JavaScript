let  form = document.forms.block;
//console.log(form);

form.addEventListener('submit', createCom);

function createCom(event) {
    event.preventDefault();
    let textareas = document.getElementsByTagName('textarea');
    let textarea = textareas[0];
    let divComm = document.getElementById('coment');

    // let row = divComm.insertRow(0);
    // let cell = row.insertCell();

    let divRow = document.createElement('div');
    divRow.classList.add('divRow');

    let divCell1 = document.createElement('div');
    divCell1.classList.add('divCell1');
    let img = document.createElement('img');
    img.setAttribute('src', 'img/3.png');
    img.setAttribute('alt', 'Аватарка');
    img.classList.add('imgAv');

    let divCell2 = document.createElement('div');
    divCell2.classList.add('divCell2');

    let divCell2_1 = document.createElement('div');
    divCell2_1.classList.add('divCell2_1');
   // let day = new Date(year, month, date);
   //  https://learn.javascript.ru/datetime
    let Data = new Date();
    let Year = Data.getFullYear();
    let Month = Data.getMonth()+1;
    let Day = Data.getDate();
    divCell2_1.innerText = "Автор:"+' '+ "Вячеслав;"+' '+'Дата: '+Day+'.'+Month+'.'+Year;
    let divCell2_2 = document.createElement('div');
    divCell2_2.classList.add('divCell2_2');
    divCell2_2.innerText = textareas[0].value;

    //fieldset.insertBefore(div, comFieldset.firstChild); что бы выводилось в верху над первым коментом


    //divComm.appendChild(divRow);
    divComm.insertBefore(divRow, divComm.firstChild);
    // divComm.appendChild(row);
    // row.appendChild(cell);
    // cell.appendChild(divRow);
    divRow.appendChild(divCell1);
    divCell1.appendChild(img);
    divRow.appendChild(divCell2);
    divCell2.appendChild(divCell2_1);
    divCell2.appendChild(divCell2_2);
}
