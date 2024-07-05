import {createApp} from 'vue';
import './styles/index.scss';
import {pinia} from './pinia';
import App from './App.vue';
import installSettingAndWidget from './utils/installSettingAndWidget';

createApp(App).use(pinia).use(installSettingAndWidget).mount('#app');
