import { createRouter, createWebHistory } from 'vue-router';
import RegistrationPage from '@/components/RegistrationForm.vue';
import AuthorizationForm from './components/AuthorizationForm.vue';
import HotelCatalog from './components/HotelCatalog.vue';
import RoomsCatalog from './components/RoomsCatalog.vue';
import EntriesTable from './components/EntriesTable.vue';
import AdminPage from './components/AdminPage.vue';

const routes = [
  { path: '/create', name: 'Register', component: RegistrationPage },
  { path: '/entries', name: 'Entries', component: EntriesTable },
  { path: '/authorization', name: 'Authorization', component: AuthorizationForm},
  { path: '/catalog', name: "HotelCatalog", component: HotelCatalog},
  { path: '/catalog/rooms', name: "RoomsCatalog", component: RoomsCatalog},
  { path: '/admin', name: AdminPage, component: AdminPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
