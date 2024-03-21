import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/*黑色主题*/
import 'highlight.js/styles/atom-one-dark.css';
/*白色主题*/
import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage('javascript', javascript);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)
app.use(hljsVuePlugin)
app.mount('#app')
