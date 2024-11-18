import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import RegistrationPage from '@/components/RegistrationForm.vue';
import EntriesPage from '@/components/EntriesTable.vue';
import AuthorizationForm from './components/AuthorizationForm.vue';

const routes = [
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/register', name: 'Register', component: RegistrationPage },
  { path: '/entries', name: 'Entries', component: EntriesPage },
  { path: '/authorization', name: 'Authorization', component: AuthorizationForm}
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
