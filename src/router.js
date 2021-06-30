import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// attribution des composants
const VueAccueil = () => import("./components/Accueil")
const Vue404 = () => import("./components/404")

// attribution des paths
const Accueil = { path: '/', name: 'Accueil', component: VueAccueil}
const NotFound404 = { path: '/:catchAll(.*)', name: 'Not-Found-404', component: Vue404}

// 1. Définition des routes
const routes = [
    Accueil,
    NotFound404
]

export default new Router({
    mode: "history",
    routes
});