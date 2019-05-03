function FormValidator(form) {
    this._form = form;
    this._elem = document.querySelectorAll('.validate');
    this._form.addEventListener('submit', this.some.bind(this));
    this._errors = [];
}

FormValidator.prototype.addRules = function(rules){
    this._rules = rules.rules;
    this._messages = rules.messages;
    /*console.log(this._rules);
    console.log(this._messages);
    console.log(this._messages.login);*/
};

FormValidator.prototype.some = function(event){
    event.preventDefault();
    //console.log(event);
    let plogin = document.getElementById('pErrorlogin');
    let ppwd = document.getElementById('pErrorpwd');
    //let login = document.getElementById('');
    for (let i = 0; i < this._elem.length; i++){
        if (!this._rules[this._elem[i].name].test(this._elem[i].value)) {
            //console.log(this._rules[this._elem[i].name].test(this._elem[i].value));
            this._errors.push([this._elem[i].name]);
        }
        /*console.log("Name", this._elem[i].name);
        console.log("Value", this._elem[i].value);
        // console.log(this._rules[this._elem[i].name]);
        console.log("this._rules.pwd", this._rules.pwd);*/

        //эту проверку нужно здесь делать или в другом месте?

        if (!this._rules[this._elem[i].name].test(this._elem[i].value)){
            plogin.innerText = this._messages.login;
        }
        if (!this._rules[this._elem[i].name].test(this._elem[i].value)){
            ppwd.innerText = this._messages.pwd;
        }

    }

    //console.log(this._errors);
};

let form = document.forms.someForm;

let formValidator = new FormValidator(form);

FormValidator.prototype.isValid = function(){
    if (this._errors.length > 0){
        console.log("Количество ошибок", this._errors.length);
        return;
    }return true;
};

// регулярное выражение для проверки login javascript
// https://habr.com/ru/post/123845/
// https://htmlweb.ru/java/example/test_login.php

formValidator.addRules({
    rules: {
        login: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
        pwd: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
    },
    messages: {
        login: "Логин с ограничением 2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква",
        pwd: "Пароль должен содержать строчные и прописные латинские буквы, цифры"
    }
});

form.addEventListener("submit", sendForm);

function sendForm() {
    if(formValidator.isValid()){
        //console.log("Выводим ошибок нет",formValidator.isValid());
        console.log("Ошибок нет");
    }
}

