//"Выбор цвета": в зависимости от выбранной радиокнопки окрашивать fieldset в тот или иной цвет.

let form = document.forms.lesson;

let colorRadio = form.elements.color;
console.log(colorRadio);

for(let i=0; i<colorRadio.length; i++){
    colorRadio[i].addEventListener('click', focusOnElement);
}

function focusOnElement(){
    form.elements.chekbox_fildset.style.background = this.value;
}

/*colorRadio[0].addEventListener('click', focusOnElement);
colorRadio[1].addEventListener('click', focusOnElement);

function focusOnElement() {
    for (let i=0; i<colorRadio.length; i++){
        if (colorRadio[i].checked){
            form.elements.chekbox_fildset.style.background = colorRadio[i].value;
        }
    }
}*/


//"Выбор языка программирования": выводить в консоль значения отмеченных чекбоксов. Пользователь отмечает какой-то чекбокс, его значение выводится в консоль, пользователь отмечает еще один в консоль выводятся значения обоих и тд. Аналогично при отмене выбора.

// let checkbox = document.getElementsByName(name);
// let checkbox = document.getElementsByName('lang[]');
let checkbox = form.elements['lang[]'];
console.log(checkbox);

for (let i=0; i<checkbox.length; i++){
    checkbox[i].addEventListener('click', getCheckedBoxes)
}


function getCheckedBoxes(){
    //массив для отмеченных чекбоксов
    let checkBoxChesked = [];
    for (let i=0; i< checkbox.length; i++){
        if (checkbox[i].checked){
            checkBoxChesked.push(checkbox[i].value);
            //console.log("значение чекбокса:", checkbox[i].value);
        }
    }
    console.log(checkBoxChesked);
}


//Отметьте, если указать другую информацию": когда пользователь ставит галочку на данном чекбоксе, поле ниже становистя доступным для редактирования, снимает галочку - поле блокируется.

let checkInput = form.elements.chinput;
console.log(checkInput.checked);

checkInput.addEventListener('click', SelectSpase);
function SelectSpase(event) {
    let check = form.elements.chinput1;
    //console.log(check.disabled);
    if(checkInput.checked) {
        check.disabled = false;
    }else{
        check.disabled = true;
    }
}
