<template>
    <div>
    <h2>Applicants List</h2>
        <b-table striped hover :items="applicants">
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
    ...mapState([
        'applicants'
    ])
    }

}
</script>