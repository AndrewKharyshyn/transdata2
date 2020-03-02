import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const demoRoutes = []

export default new Router({
  mode: 'history',
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: {name: 'mainpage'},
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../components/auth/login/Login.vue'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: () => import('../components/auth/signup/Signup.vue'),
        },
        {
          name: 'recover-password',
          path: 'recover-password',
          component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
        },
        {
          path: '',
          redirect: {name: 'login'},
        },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSearch.vue'),
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSimple.vue'),
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: () => import('../components/pages/404-pages/VaPageNotFoundCustom.vue'),
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
        },
      ],
    },
    {
      name: 'mainpage',
      path: '/main',
      component: AppLayout,
      children: [
        {
          name: 'mainpage',
          path: 'mainpage',
          component: () => import('../components/main-page/MainPage.vue'),
          default: true,
        },
        {
          name: 'references',
          path: 'references',
          component: EmptyParentComponent,
          children: [
            {
              name: 'languages',
              path: 'languages',
              component: () => import('../components/references/Languages.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'topics',
              path: 'topics',
              component: () => import('../components/references/Topics.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'calculation-types',
              path: 'calculationtypes',
              component: () => import('../components/references/Calculation Types.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'translation-types',
              path: 'translationtypes',
              component: () => import('../components/references/Translation Types.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            }
          ],
        },
        {
          name: 'statistics',
          path: 'statistics',
          component: () => import('../components/statistics/Statistics.vue'),
        },
        {
          name: 'settings',
          path: 'settings',
          component: () => import('../components/settings/Settings.vue'),
        },
        {
          name: 'create-order',
          path: '/createorder',
          component: () => import('../components/main-page/main-page-inner/CreateOrder.vue'),
        },
        {
          name: 'order-card',
          path: '/order',
          component: () => import('../components/main-page/main-page-tabs/OrderCard.vue'),
        },
        {
          name: 'all-orders',
          path: '/allorders',
          component: () => import('../components/order-lists/AllOrders.vue'),
        },
        {
          name: 'all-agencies',
          path: '/allagencies',
          component: () => import('../components/agencies/AllAgencies.vue'),
        },
        {
          name: 'debt-orders',
          path: '/debtorders',
          component: () => import('../components/order-lists/DebtOrders.vue'),
        },
        {
          name: 'latest-orders',
          path: '/latestorders',
          component: () => import('../components/order-lists/LatestOrders.vue'),
        },
        {
          name: 'in-progress',
          path: '/inprogress',
          component: () => import('../components/order-lists/InProgressOrders.vue'),
        },
        {
          name: 'agency-card',
          path: '/agency',
          component: () => import('../components/agencies/AgencyCard.vue'),
        },
        {
          name: 'new-agency',
          path: '/newagency',
          component: () => import('../components/agencies/NewAgency.vue'),
        },
        {
          name: 'originals',
          path: '/originals',
          component: () => import('../components/document-lists/Originals.vue'),
        },
        {
          name: 'translated',
          path: '/translated',
          component: () => import('../components/document-lists/Translated.vue'),
        },
      ],
    },
  ],
})
