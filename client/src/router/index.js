import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Registro from '../views/Registro.vue';
import SalaEspera from '../views/SalaEspera.vue';
import GestionTurnos from '../views/GestionTurnos.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/sala-espera',
    name: 'SalaEspera',
    component: SalaEspera
  },
  {
    path: '/gestion-turnos',
    name: 'GestionTurnos',
    component: GestionTurnos
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
