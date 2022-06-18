import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './components/App.vue';
import Sidebar from './components/Sidebar.vue';
import Listener from './components/Listener.vue';
import store from './store';
import events from './events';
import './styles/index.scss';

Vue.use(BootstrapVue);

Vue.component(App.name, App);
Vue.component(Sidebar.name, Sidebar);
Vue.component(Listener.name, Listener);

const app = new Vue({ el: '#app', store });

export { app, events };
