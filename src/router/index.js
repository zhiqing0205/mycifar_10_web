/*
 * @Author: Zhiqing 1775840762@qq.com
 * @Date: 2024-03-22 02:15:44
 * @LastEditors: Zhiqing 1775840762@qq.com
 * @LastEditTime: 2024-03-22 02:22:53
 * @FilePath: \mycifar_10_web\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component:  import('../views/Home.vue')
    },
    {
      path: '/classify',
      name: 'Classify',
      component: () => import('../views/Classify.vue')
    },
    {
      path: '/record',
      name: 'Record',
      component: () => import('../views/Record.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
  ]
})

export default router
