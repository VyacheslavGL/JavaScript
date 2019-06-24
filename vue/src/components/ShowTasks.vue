<template>
    <div class="task-list">
        <!--v-if формируем конструкции ветвления-->
        <h2 v-if="(tasks.length > 0)">Ваши задачи</h2>
        <h2 v-else>Список задач пуст</h2>
<!--перебираем массив-->
        <!--обработчик событий-->
        <div class="task"
             v-bind:class="{checked:task.isDel}"
             v-on:click="task.isDel = !task.isDel"
             v-for="task in tasks"><!-- task-->
            <h3>{{task.title}}</h3>
            <p>{{task.description}}</p>
        </div>
        <button v-if="(tasks.length)"
                v-on:click="deleteTasks">
            Удалить
        </button>
    </div>
</template>

<script>
    import {taskArr} from "./tasks";
    export default {
        name: "ShowTasks",
        data: function () {
            return {
                tasks: taskArr
            }
        },
        methods:{
            deleteTasks: function () {
                // обращаемся к обьекты
                for (let i=0; i<this.tasks.length; i++){
                    if(this.tasks[i].isDel){
                        this.tasks.splice(i, 1);
                        i--;
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $black: black;
    $gray: #ccc;
    .task-list{
        flex: 1;
        /*четный*/
        .task:nth-child(odd){
            background: $gray;
            color: $black;
            padding: 10px;
        }
        /*не четный*/
        .task:nth-child(even){
            background: $black;
            color: whitesmoke;
            padding: 10px;
        }
        /*для выделения задачи при отметке*/
        .task:nth-child(odd).checked,
        .task:nth-child(even).checked{
            background: chartreuse;
            color: whitesmoke;
            text-decoration: line-through; /*перечеркивание текста*/
        }
    }
</style>