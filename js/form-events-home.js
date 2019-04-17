let form = document.forms.lesson;

let colorRadio = form.elements.color;
console.log(colorRadio[0]);
colorRadio[1].addEventListener('click', focusOnElement);

function focusOnElement() {
    for (let i=0; i<colorRadio.length; i++){
        if (colorRadio[i].checked){
            form.elements.chekbox_fildset.style.background = colorRadio[i].value;
        }
    }
}
