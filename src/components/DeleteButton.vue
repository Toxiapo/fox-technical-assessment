<template>
 <button @click="deleteContact">{{label}} ({{selectedCount}})</button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DeleteButton',
  props: {
    label: String,
    action: String
  },
  computed: mapState({
    contacts: state => state.contacts,
    selectedCount: state => state.selected.length
  }),
  methods: {
    deleteContact: function() {
      if(confirm('Are you sure?')) {
        this.$store.dispatch('deleteSelected')
      }
    }
  }
}

</script>

<style scoped> 
button {
  margin: 15px;
}
</style>
