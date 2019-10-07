import Vue from 'vue'
import Router from 'vue-router'
import Page from './views/Page.vue'
import Sponsors from './components/Sponsors.vue'
import Messages from './components/Messages.vue'
import Message from './components/Message.vue'
import Information from './components/Information.vue'
import Program from './components/Program.vue'
import ProgramByDay from './components/ProgramByDay.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'page',
      component: Page
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: Sponsors
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/message/:name',
      name: 'message',
      component: Message
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/index.html',
      component: Page
    },
    {
      path: '/program',
      name: 'program',
      component: Program
    },
    {
      path: '/program/:day/:order',
      name: 'day',
      component: ProgramByDay
    }
    
  ]
})
