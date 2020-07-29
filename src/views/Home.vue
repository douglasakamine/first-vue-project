<template>
    <div class="home">
        <button @click="toggleForm" id="button">New Job</button>
        <button @click="toggleApply" id="button">New Applicant</button>
    
      <!-- form for jobs bellow -->
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

    <!-- form for applicants bellow -->

    <b-form @submit.prevent="SubmitApplicant" v-if="showApply"><b-form-group
        id="input-group-6"
        label="Applicant Name:"
        label-for="input-6"
      >
        <b-form-input
          id="input-6"
          v-model="formDataApplicant.name"
          type="text"
          required
          placeholder="Applicant Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Age:" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="formDataApplicant.age"
          required
          placeholder="Enter the applicant age"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-8" label="Email:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="formDataApplicant.email"
          required
          placeholder="Enter the applicant email"
        ></b-form-input>
      </b-form-group>

             <b-form-group id="input-group-9" label="Education:" label-for="input-9">
        <b-form-input
          id="input-9"
          v-model="formDataApplicant.education"
          required
          placeholder="Enter applicant's education"
        ></b-form-input>
        </b-form-group>

             <b-form-group id="input-group-10" label="Skill:" label-for="input-10">
        <b-form-input
          id="input-10"
          v-model="formDataApplicant.skills"
          required
          placeholder="Applicant's Skills"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">Add Applicant</b-button>
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
        showApply: false,
            formData: {
                title: '',
                company: '',
                salary: 0,
                location: '',
                requirements: ''
             },
             formDataApplicant: {
                name: '',
                age: '',
                email: '',
                education: '',
                skills: ''
             }
         }
    },
    methods: {
        ...mapActions([
            'addJob',
            'addApplicant'
        ]),
        toggleForm() {
            this.showForm = !this.showForm
            if(this.showApply == true) { this.showApply = false}  else { this.showApply }

        },
        toggleApply() {
          this.showApply = !this.showApply
        if(this.showForm == true) { this.showForm = false } else { this.showForm }
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
        }, SubmitApplicant() {

           const { name, age, email, education, skills} = this.formDataApplicant

            console.log(this.formDataApplicant);
            
            const values = { name, age, email, education, skills}

            this.addApplicant(values)

            this.formDataApplicant = {
              name: '',
                age: '',
                email: '',
                education: '',
                skills: ''
            }
        }
    }
}
</script>