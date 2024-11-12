<template>
  <div>
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/entries">Entries</RouterLink>
    <RouterView></RouterView>
  </div>
</template>

<script>

export default {
  components: {
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
