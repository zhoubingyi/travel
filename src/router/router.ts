/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'home'
    }
  },
  {
    path: '/scenicSpot',
    name: 'scenicSpot',
    component: () => import('@/views/scenicSpot.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'scenicSpot'
    }
  }
]
