import { createRouter, createWebHistory } from 'vue-router';

import usersList from './views/usersList.vue';
import userDetails from './views/userDetails.vue';
import userCreate from './views/userCreate.vue';
import userEdit from './views/userEdit.vue';

import productPage from './views/productPage.vue';

const routes = [
  { path: '/user-list', component: usersList, name: 'usersList' },
  { path: '/user-details/:userId', component: userDetails, name: 'userDetails' },
  { path: '/user-create', component: userCreate, name: 'userCreate' },
  { path: '/user-edit/:userId', component: userEdit, name: 'userEdit' },
  { path: '/product-page', component: productPage, name: 'productPage' }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
