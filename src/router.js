import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import RegistrationPage from '@/components/RegistrationForm.vue';
import EntriesPage from '@/components/EntriesTable.vue';

const routes = [
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/register', name: 'Register', component: RegistrationPage },
  { path: '/entries', name: 'Entries', component: EntriesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
