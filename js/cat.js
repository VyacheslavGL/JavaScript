//3. Создать класс Cat. У кота должно быть имя - name, возраст - age, вес - weight, сила - strength.
// Реализовать метод fight(anotherCat): реализовать механизм драки котов в зависимости от их веса, возраста и силы. Зависимость придумать самостоятельно. Метод должен определять, выиграли ли мы бой или нет, т.е. возвращать true, если выиграли и false - если нет.

class Cat {
    constructor(name, age, weight, strength) {
        this._name = name;
        this._age = age;
        this._weight = weight;
        this._strength = strength;
        this._ageFull = 5;
        this._weightFull = 3;
        this._strengthFull = 100;
        this._a = 0;
        this._b = 0;
    }

    fight(enemyCat){
        //здесь описать какой кот победит
        //механизм драки котов в зависимости от их веса, возраста и силы
        //console.log(this._name, "напал на кота по имени", enemyCat.name );// get name()

        function getRandomArbitaryX(min, max) {
            let x = Math.floor(Math.random() * (max - min)) + min;
            return x;
        }

        this._age = getRandomArbitaryX(0, 12);
        this._weight = getRandomArbitaryX(1, 10);
        this._strength = getRandomArbitaryX(1, 100);

        enemyCat._age = getRandomArbitaryX(0, 12);
        enemyCat._weight = getRandomArbitaryX(1, 10);
        enemyCat._strength = getRandomArbitaryX(1, 100);

        //Условие по силе
        let strength = (this._strength > enemyCat._strength) ? this._name : enemyCat.name;
        if (strength === this._name){
            this._a += 2;
        }
        if (strength === enemyCat.name){
            this._b += 2;
        }
        //console.log("Победил", age, "с силой", this._strength , enemyCat._strength);

        //Условие по весу
       /* let weight = (this._weight > enemyCat._weight) ? this._name : enemyCat.name;
        if (weight === this._name){
            this._a += 1;
        }
        if (weight === enemyCat.name){
            this._b += 1;
        }*/

            if(2 <= this._weight && this._weight <= 4){
                this._a += 1;
            }else this._a -= 1;

            if(2 <= enemyCat._weight && enemyCat._weight <= 4){
                this._b += 1;
            }else this._b -= 1;

        //Условие по возрасту
        /*let age = (this._age > enemyCat._age) ? this._name : enemyCat.name;
        if (age === this._name){
            this._a += 1;
        }
        if (age === enemyCat.name){
            this._b += 1;
        }*/

        if(2 <= this._age && this._age <= 4){
            this._a += 1;
        }else this._a -= 1;

        if(2 <= enemyCat._age && enemyCat._age <= 4){
            this._b += 1;
        }else this._b -= 1;

        //Итоговый результат
        if (this._a < 0){
            console.log("Кот по кличке", this._name, "уничтожен");
        }

        if (this._b < 0){
            console.log("Кот по кличке", enemyCat.name, "уничтожен");
        }

        if (this._b < 0 && this._a < 0){
            console.log("Коту по кличке", this._name, "и коту по кличке", enemyCat.name, "нельзя драться они вышли из этих игрищь");
        }

        if (this._b === 0 && this._a === 0){
            console.log("Кот по кличке", this._name, "и кот по кличке", enemyCat.name, "равны по силам");
        }

        let final = (this._a > this._b) ? this._name : enemyCat.name;

        console.log("В этой схватке победил", final);

        console.log(this._name, this._a, this._b, enemyCat.name);
    }


    get name(){
        return this._name
    }
    get age(){
        return this._age;
    }
    get weight(){
        return this._weight;
    }
    get strength(){
        return this._strength;
    }
    get ageFull(){
        return this._ageFull;
    }
    get weightFull(){
        return this._weightFull;
    }
    get strengthFull(){
        return this._strengthFull;
    }
}

// new Cat();