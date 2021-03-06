import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Timeline from "primevue/timeline";
import Calendar from "primevue/calendar";
import TabMenu from "primevue/tabmenu";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);

app.use(PrimeVue);
app.component("Button", Button);
app.component("Timeline", Timeline);
app.component("Calendar", Calendar);
app.component("TabMenu", TabMenu);
app.component("DataTable", DataTable);
app.component("Column", Column);

app.mount("#app");
