import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Jobs from './../views/Jobs.vue'
import Job from './../views/Job.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: Jobs
    },
    {
        path: '/jobs/:id',
        name: 'job',
        component: Job
    }   
]
    
})