<template>
  <div>
    <FormComponent @add-entry="addEntry"></FormComponent>
    <TableComponent
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

export default {
  components: {
    FormComponent,
    TableComponent,
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
