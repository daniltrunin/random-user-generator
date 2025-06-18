import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia'; // <-- Импорт Pinia
import App from './App.vue';

// --- Импорт Vuetify ---
import 'vuetify/styles'; // Основные стили Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VFab } from 'vuetify/components'; // Пример импорта конкретного компонента, если 'autoImport' не используется полностью

// Импорт иконок Material Design Icons
import '@mdi/font/css/materialdesignicons.css';
// --- Конец импорта Vuetify ---

const app = createApp(App);

// --- Инициализация Vuetify ---
const vuetify = createVuetify({
  components: {
    ...components,
    VFab, // Если вы импортируете конкретные компоненты
  },
  directives,
  // Если у вас есть свои темы, иконки или другие настройки, их можно добавить здесь
  // theme: {
  //   themes: {
  //     light: {
  //       colors: {
  //         primary: '#1867C0',
  //         secondary: '#5CBBF6',
  //       },
  //     },
  //   },
  // },
  icons: {
    defaultSet: 'mdi',
  },
});

app.use(createPinia()); // <-- Регистрируем Pinia
app.use(vuetify); // <-- Регистрируем Vuetify

app.mount('#app');
