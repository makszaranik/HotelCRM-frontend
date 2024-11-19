<template>
  <button v-show="isLoggedIn" @click="logout" class="logout-button">Logout</button>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return sessionStorage.getItem('authorization') !== null;
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem('authorization');
      this.$router.push("/home")
    },
  }
};
</script>

<style scoped>
.logout-button {
  position: fixed;
  width: 100px;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
}

.logout-button:hover {
  background-color: #c0392b;
}
</style>