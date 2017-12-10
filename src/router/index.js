import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import LogMessage from '@/components/LogMessage'
import AccountSetting from '@/components/AccountSetting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'overview',
          component: HelloWorld
        },
        {
          path: 'logMessage',
          component: LogMessage
        },
        {
          path: 'accountSetting',
          component: AccountSetting
        }
      ]
    }
  ]
})
