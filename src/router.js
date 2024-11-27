import { createRouter, createWebHistory } from 'vue-router';
import RegistrationPage from '@/components/RegistrationForm.vue';
import AuthorizationForm from './components/AuthorizationForm.vue';
import HotelCatalog from './components/HotelCatalog.vue';
import RoomsCatalog from './components/RoomsCatalog.vue';

const routes = [
  { path: '/create', name: 'Register', component: RegistrationPage },
  { path: '/authorization', name: 'Authorization', component: AuthorizationForm},
  { path: '/catalog', name: "HotelCatalog", component: HotelCatalog},
  { path: '/catalog/rooms', name: "RoomsCatalog", component: RoomsCatalog}
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
