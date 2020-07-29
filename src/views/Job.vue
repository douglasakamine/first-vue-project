<template>
    <div>
        <table class="table">
        <h2>Positon: {{ uniqueJob.title }}</h2>
        <p>Company: {{ uniqueJob.company }}</p>
        <p>Salary: {{ uniqueJob.salary }}</p>
        <p>Location: {{ uniqueJob.location }}</p>
        <p>Job description: {{ uniqueJob.requirements }}</p>
    </table>


    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            uniqueJob: {}
        }
    },
    computed: {
    ...mapState([
        'jobs'
     ])
    },
    mounted() {
        const uniqueJob = this.jobs[this.$route.params.id]
        this.uniqueJob = uniqueJob
    }
}
</script>