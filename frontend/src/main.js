import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Importez votre fichier store.js
import MyPlugin from './plugins/plugins';

const app = createApp(App);

app.use(router);
app.use(store); // Utilisez votre Vuex Store
app.use(MyPlugin);

app.mount('#app');
