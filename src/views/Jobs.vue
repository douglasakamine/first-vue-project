<template>
    <div>
    <h2>Jobs List</h2>
        <b-table striped hover :items="jobs">
            <template v-slot:cell(title)="data">
                <router-link :to="`/jobs/${data.index}`">
                {{ data.value }}
                </router-link>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {

        }
    },
    computed: {
    ...mapState([
        'jobs'
    ])
    }

}
</script>