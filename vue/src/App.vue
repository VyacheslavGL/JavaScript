<template>
    <!--внешний вид-->
    <div class="task-manager">
        <!--неизменяемая часть-->
        <div class="menu">
            <img :src="src">
            <div class="title">
                <h3>Задачи</h3>
                <p>Всего задач: {{tasks.length}}</p>
            </div>
            <nav>
                <router-link to="/addTask"> <!--потом он парсит на тег a- парсит то есть читает строчка за строчкой-->
                    Создать задачу
                </router-link>
                <router-link to="/showTasks">Просмотр задачи</router-link>
            </nav>
        </div>
        <!--изменяемая часть-->
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    // подключаем массив который создали в другом файле
    import {taskArr} from "./components/tasks";

    export default {
        name: "App", //имя файла без расширения
        data: function () {
            return {
                /*сами придумали tasks и src*/
                tasks: taskArr,
                src: "/src/img/2.png"
            }
        }
    }
</script>

<style scoped>
    /*scoped стили для данного шаблона*/

</style>