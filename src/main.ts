import {createApp} from 'vue';
import './styles/index.scss';
import {pinia} from './pinia';
import App from './App.vue';
import installComponents from './utils/installComponents';
import './utils/monacoEditor';

createApp(App).use(pinia).use(installComponents).mount('#app');
