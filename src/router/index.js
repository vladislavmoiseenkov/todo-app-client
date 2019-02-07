import Vue                          from 'vue';
import Router                       from 'vue-router';

// Views
import Home                         from '../views/Home';
import SignUp                       from '../views/SignUp';
import Login                        from '../views/Login';
import User                         from '../views/User';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [
      ],
    },
  ],
});
