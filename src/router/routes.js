const routes = [
  {
    path: '/dashboard/analysis',
    name: '/dashboard/analysis',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Analysis')
      }
    ]
  },
  {
    path: '/dashboard/monitor',
    name: '/dashboard/monitor',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/Monitor')
      }
    ]
  },
  {
    path: '/form/basic-form',
    name: '/form/basic-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/BasicForm')
      }
    ]
  },
  {
    path: '/form/advanced-form',
    name: '/form/advanced-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/AdvancedForm')
      }
    ]
  },
  {
    path: '/form/step-form',
    name: '/form/step-form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/StepForm')
      }
    ]
  },
  {
    path: '/result/success',
    name: '/result/success',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/result/Success')
      }
    ]
  },
  {
    path: '/result/fail',
    name: '/result/fail',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/result/Fail')
      }
    ]
  },
  {
    path: '/exception/403',
    name: '/exception/403',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/403')
      }
    ]
  },
  {
    path: '/exception/404',
    name: '/exception/404',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/404')
      }
    ]
  },
  {
    path: '/exception/500',
    name: '/exception/500',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages//exception/500')
      }
    ]
  },
  {
    path: '/list/search/projects',
    name: '/list/search/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/search/Projects')
      }
    ]
  },
  {
    path: '/list/goods-list',
    name: '/list/goods-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/GoodsList')
      }
    ]
  },
  {
    path: '/list/table-list',
    name: '/list/table-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list/TableList')
      }
    ]
  },
  {
    path: '/expend/flow-chart',
    name: '/expend/flow-chart',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/expend/FlowChart')
      }
    ]
  },
  {
    path: '/expend/ui-modeling',
    name: '/expend/ui-modeling',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/expend/UiModeling')
      }
    ]
  },
  {
    path: '/expend/icon-view',
    name: '/expend/icon-view',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/expend/IconView')
      }
    ]
  },
  {
    path: '/',
    name: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/form/BasicForm.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
