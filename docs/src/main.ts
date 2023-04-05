import { createApp } from 'vue';
import App from './App.vue';

import Mui from 'mui';
const app = createApp(App)

app.use(Mui, {
    mode: 'light'
})

app.mount('#app')
