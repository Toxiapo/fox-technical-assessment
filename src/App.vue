<template>
  <div id="app">
    <header> 
      <h1>My Contact Book</h1>
      <small>(Click on the contact card and see what happens)</small>
    </header>
    <div class="content"> 
      <DeleteButton v-if="selectedCount > 0" label="Delete Selected" action="delete" />
      <div class="contact-wrapper" v-if="contacts.length > 0">
        <ContactCard v-bind:key="contact._id" v-for="contact in contacts" :contact="contact"/>
      </div>
      <div class="contact-empty" v-else>
        <h2>You address book is empty.</h2>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from './components/ContactCard.vue'
import DeleteButton from './components/DeleteButton.vue'
  
import { mapState } from 'vuex'

export default {
  name: 'App', //?
  components: {
    ContactCard,
    DeleteButton
  },
  computed: mapState({
    contacts: state => state.contacts,
    selectedCount: state => state.selected.length
  }),
  created() {
     this.$store.dispatch('getAllContacts');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;

  max-width: 1320px;
}

header {
  margin-bottom: 30px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
}
</style>
