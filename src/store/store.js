import Vue from 'vue'
import Vuex from 'vuex'
import jobs from '../data/jobs'
import applicants from '../data/applicants'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        jobs,
        applicants
    },
    actions: {
        addJob: ({ commit }, job) => {
            commit('appendJob', job)
        },
        addApplicant: ({ commit }, applicant) => {
            commit('appendApplicant', applicant)
        }
    },
    mutations: {
        appendJob(state, job) {
            state.jobs.push(job)
            console.log(state.jobs);
        },
        appendApplicant(state, applicant) {
            state.applicants.push(applicant)
            console.log(state.applicants);
        }
    }
})