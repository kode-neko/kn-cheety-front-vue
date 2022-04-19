import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleXmark,
  faEnvelope,
  faMoon,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faShareNodes,
  faPencil,
  faGlobe,
  faSun,
  faCircleXmark as faCircleXmarkSolid,
  faSquareArrowUpRight,
  faTurnUp,
  faCirclePlus,
  faPlus,
  faBars,
  faCircleCheck,
  faArrowLeft,
  faArrowRightFromBracket,
  faTrashCan as faTrashCanSolid,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";

library.add({
  faCircleXmark,
  faEnvelope,
  faMoon,
  faTrashCan,
  faMagnifyingGlass,
  faShareNodes,
  faPencil,
  faGlobe,
  faSun,
  faCircleXmarkSolid,
  faSquareArrowUpRight,
  faTurnUp,
  faCirclePlus,
  faPlus,
  faBars,
  faCircleCheck,
  faArrowLeft,
  faArrowRightFromBracket,
  faTrashCanSolid,
  faFilter,
  faFacebook,
  faTwitter,
  faGithub,
  faFigma,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
