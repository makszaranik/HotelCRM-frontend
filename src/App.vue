<template>
  <div>
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/entries">Entries</RouterLink>

    <HomePageComponent v-if="$route.path === '/home'"></HomePageComponent>
    <FormComponent v-if="$route.path === '/register'" @add-entry="addEntry"></FormComponent>
    <TableComponent v-if="$route.path === '/entries'"
      :entries="entries"
      @delete-entry="deleteEntry"
      @delete-selected="deleteSelected"
      @duplicate-selected="duplicateSelected"
    ></TableComponent>
  </div>
</template>

<script>
import FormComponent from './components/RegistrationForm.vue';
import TableComponent from './components/EntriesTable.vue';
import HomePageComponent from './components/HomePage.vue'

export default {
  components: {
    FormComponent,
    TableComponent,
    HomePageComponent
  },
  data() {
    return {
      entries: [],
    };
  },
  methods: {
    addEntry(entry) {
      this.entries.push(entry);
    },
    deleteEntry(index) {
      this.entries.splice(index, 1);
    },
    deleteSelected() {
      this.entries = this.entries.filter(entry => !entry.selected);
    },
    duplicateSelected() {
      const duplicates = this.entries
        .filter(entry => entry.selected)
        .map(entry => ({ ...entry, selected: false }));
      this.entries = [...this.entries, ...duplicates];
    },
  },
};
</script>

<style>
</style>
