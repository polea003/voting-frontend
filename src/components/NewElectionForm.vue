<template>
<form @submit.prevent="submitForm">
     <span>Candidate 2:      </span>    
    <!-- username input -->
    <input type="Candidate2FirstName" v-model="Candidate2FirstName" placeholder="First Name">

    <!-- email input -->
    <input type="Candidate2LastName" v-model="Candidate2LastName" placeholder="Last Name">

    
    

  </form>
</template>

<script>


export default {
  name: 'NewElectionForm',
 

  data () {
    return {
    
    }
  },
  methods:{
  addFormElement: function(type) {
      this.fields.push({
        'type': type,
        id: this.count++
      });
    },
  }}

</script>