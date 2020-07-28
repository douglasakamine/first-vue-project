import Vue from 'vue'
import Vuex from 'vuex'
import jobs from '../data/jobs'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        jobs
    },
    actions: {
        addJob: ({ commit }, job) => {
            commit('appendJob', job)
        }
    },
    mutations: {
        appendJob(state, job) {

            state.jobs.push(job)

            console.log(state.jobs);

        }
    }
})