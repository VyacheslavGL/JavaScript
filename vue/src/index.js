// точка входа в приложение
import css from './scss/index.scss';
import Vue from 'vue'; /*подключаем сам фреймворк*/
import App from './App.vue'; //App
import router from './router';
// создаем обьект приложения
new Vue({
    //здесь мы указываем куда подключаем
    el: '#app',
    router,
    //здесь мы указываем, что мы туда подключаем
    render: h => h(App) //App
});