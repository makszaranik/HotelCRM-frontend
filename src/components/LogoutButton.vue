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
  top: 20px;
  right: 20px;
  width: 100px;
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px #ccc;
  cursor: pointer;
  transition: 0.5s;
  background-image: linear-gradient(to right, #e74c3c, #c0392b);
  background-size: 200% auto;
}

.logout-button:hover {
  background-position: right center;
  color: white;
  text-decoration: none;
  background-color: #c0392b;
}     
</style>