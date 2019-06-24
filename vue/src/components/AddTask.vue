<template>
    <div class="add-task">
        <h1>Добавление задачи</h1>
        <!--отменяет автоотправление-->
        <form @submit.prevent="addTask">
            <label for="title">Название задачи</label>
            <input v-model="title" type="text" id="title">
            <!--v-model для работы с формами-->
            <label for="description">Добавить описание</label>
            <textarea v-model="description" id="description"></textarea>
            <!--active - переменная-->
            <button :class="[(title && description) ? active : '']"
                    type="submit">Добавить</button>
        </form>
    </div>

</template>

<script>
    import {taskArr} from "./tasks";

    export default {
        name: "AddTask",
        data: function () {
            return{
                title: null,
                description: null,
                tasks: taskArr,
                active: 'active'  /*имя класса  .active*/
            }
        },
        // все функции которые есть на страниун
        methods: {
            addTask: function () {
                console.log(this.title);
                this.tasks.push({
                    title: this.title,
                    description: this.description,
                    isDel: false  /*для удаления задач*/
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    h1{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .add-task{
        flex: 1;
        justify-content: center;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20%;

        label{
            padding: 10px;
        }
        button{
            margin-top: 10px;
            padding: 5px;
        }
    }
    .active{
        background: blue;
    }

</style>