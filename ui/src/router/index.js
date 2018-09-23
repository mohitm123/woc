import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Timeline from '../components/Timeline'
import HowItWorks from '../components/HowItWorks'
import Dashboard from '../components/Dashboard'
import MentorProfile from '../components/MentorProfile'
import ProjectUpdate from '../components/ProjectUpdate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/howitworks',
      name: 'HowItWorks',
      component: HowItWorks
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/mentorprofile',
      name: 'MentorProfile',
      component: MentorProfile
    },
    {
      path: '/projectupdate',
      name: 'ProjectUpdate',
      component: ProjectUpdate
    }
  ]
})
