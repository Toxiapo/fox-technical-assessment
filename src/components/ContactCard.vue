<template>
    <div class="contact-card" @click="toggleSelect" :id="contact._id">
      <h4>{{contact.name}}</h4>
      <p>Age: {{contact.age}}</p>
      <p>Gender: {{contact.gender}}</p>
      <p>Company: {{contact.company}}</p>
      <p>Email: {{contact.email}}</p>
      <p>Phone: {{contact.phone}}</p>
      <img :src="contact.picture" alt="Profile Picture">
    </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    contact: Object
  },
  methods: {
    toggleSelect: function(event) {
      event.currentTarget.classList.toggle('selected')
      const _id = event.currentTarget.id
      this.$store.dispatch('updateSelected', _id)
    }
  }
}
</script>

<style scoped> 
.contact-card {
  text-align: left;
  border: 1px solid;
  padding: 15px;
  cursor: pointer;
}
.contact-card.selected {
  background: green;
  color: white;
}
h4 {
  margin: 0;
}
p {
  margin: 0;
}
</style>
