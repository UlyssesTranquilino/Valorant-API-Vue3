import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/en-US"; // Optional: for language support
import "quasar/src/css/index.sass"; // Import Quasar CSS

const app = createApp(App);

app.use(Quasar, {
  plugins: {}, // Add any Quasar plugins here if needed
  lang: quasarLang,
});

app.mount("#app");
