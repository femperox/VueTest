import { createApp } from 'vue'
import App from '@/App.vue'
import components from '@/components/index'
import router from "@/router/router"

const app = createApp(App);

components.forEach(c => app.component(c.name, c))
app.use(router).mount('#app')
