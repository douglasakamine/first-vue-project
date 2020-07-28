<template>
    <div class="home">
        <h2>Add new Job here</h2>
        <button @click="toggleForm">New Job</button>
    

        <b-form @submit.prevent="Submit" v-if="showForm"><b-form-group
        id="input-group-1"
        label="Job Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="formData.title"
          type="text"
          required
          placeholder="Job Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Company:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.company"
          required
          placeholder="Enter the company's name"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-3" label="Salary:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="formData.salary"
          required
          placeholder="Enter the salary per year"
        ></b-form-input>
      </b-form-group>

             <b-form-group id="input-group-4" label="Location:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="formData.location"
          required
          placeholder="Enter the location"
        ></b-form-input>
        </b-form-group>

             <b-form-group id="input-group-5" label="Description:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="formData.requirements"
          required
          placeholder="Enter the job description"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">Add Job</b-button>
    </b-form>
 </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'home',
    data() {
        return {
        showForm: false,
            formData: {
                title: '',
                company: '',
                salary: 0,
                location: '',
                requirements: ''
             }
         }
    },
    methods: {
        ...mapActions([
            'addJob'
        ]),
        toggleForm() {
            this.showForm = !this.showForm
        },
         Submit(){
            const { title, company, salary, location, requirements} = this.formData

            console.log(this.formData);
            
            const values = { title, company, salary, location, requirements}

            this.addJob(values)

            this.formData = {
              title: '',
                company: '',
                salary: '',
                location: '',
                requirements: ''
            }
            }
    }
}
</script>