import { createRouter, createWebHistory } from 'vue-router'
// import max from '@/stories/index.js'
import auth from '@/stories/authentication.js'
import threadss from '@/stories/threads.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/PageHome.vue')
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import('@/pages/CategoryItem.vue'),
    props: true
  },

  {
    path: '/fourm/:id',
    name: 'fourm',
    component: () => import('@/pages/FourmShow.vue'),
    props: true
  },
  {
    path: '/me',
    name: 'profile',
    component: () => import('@/pages/UserProfile.vue'),
    meta: {
      toTop: 0,
      smoothScroll: true,
      requireAuth: true
    }
  },
  {
    path: '/me/edit',
    name: 'edit',
    component: () => import('@/pages/UserProfile.vue'),
    props: {
      edit: true
    },
    meta: {
      toTop: 0,
      smoothScroll: true,
      requireAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/RegisterForm.vue'),
    meta: {
      requireGust: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/LogIn.vue'),
    meta: {
      requireGust: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    async beforeEnter(_, _2, next) {
      // ...
      const authStore = auth()

      await authStore.logOut()
      next('/')
    }
  },
  {
    path: '/fourm/:forumId/thread/create',
    name: 'createThread',
    component: () => import('@/pages/NewThread.vue'),
    props: true,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/thread/:id/edit',
    name: 'threadEdit',
    component: () => import('@/pages/ThreadEdit.vue'),
    props: true,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/thread/:id',
    name: 'thread',
    component: () => import('@/pages/ThreadShow.vue'),
    props: true,
    async beforeEnter(to) {
      const threadsStore = threadss()

      await threadsStore.featchThread(to.params.id, true)
      // check if the route exsit
      const pageExsit = threadsStore?.items?.find((e) => {
        return e.id === to.params.id
      })
      // if exsits so go there
      if (pageExsit) {
        return true
      } else {
        // if not then go to not found
        return {
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash
        }
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, _2, savedPosition) {
    return savedPosition || { x: 10, y: 0 }
  }
})

router.beforeEach(async (to) => {
  const authStore = auth()
  authStore.initAuthenication()
  await authStore.clearAllUnsubscripe()
  if (to.meta.requireAuth && !authStore.id) {
    return {
      name: 'login',
      query: {
        redirectTo: to.path
      }
    }
  }
  if (to.meta.requireGust && authStore.id) {
    return { name: 'home' }
  }
})
export default router
