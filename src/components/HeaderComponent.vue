<template>
  <div>
    <header class="header">
      <div class="logo">Skyscanner</div>
      <nav>
        <RouterLink v-if="!isLoggedIn()" to="/create">Register</RouterLink>
        <RouterLink v-if="!isLoggedIn()" to="/authorization">Authorization</RouterLink>
        <RouterLink to="/catalog">Catalog</RouterLink>
        <RouterLink v-if="isAdmin()" to="/admin">Admin Page</RouterLink>
        <RouterLink v-if="isLoggedIn()" to="/entries">Entries</RouterLink>
        <button v-if="isLoggedIn()" @click="logout">Logout</button>
        <RouterView></RouterView>
      </nav>
    </header>
  </div>
</template>

<script>
export default{
  methods: {
    isLoggedIn() {
      return sessionStorage.getItem("authToken") !== null;
    },
    isAdmin(){
      return sessionStorage.getItem("username") === 'Admin';
    },
    async logout() {
      const res = await fetch('http://localhost:8000/api/users/logout', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`
        }
      });
      if(res.status === 200){
        sessionStorage.removeItem("authToken");
        this.$router.push("/authorization");
      }
    }
  }
}
</script>

<style scoped>

.header button {
  background-image: linear-gradient(to right, #e52d27 0%, #b31217 51%, #e52d27 100%);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1rem;
  height: 35px;
  transition: background-position 0.5s, transform 0.3s;
  background-size: 200% auto;
  display: inline-block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header button:hover {
  background-position: right center;
  transform: scale(1.05);
  color: white;
}

.header button:focus {
  outline: none;
}



body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

.header {
  margin-bottom: 10px;
  background-color: #002f63;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed; 
  top: 0; 
  left: 0;
  width: 100%;
  z-index: 1000;
}

.header a {
  color: #fff;
  text-decoration: none;
  margin-right: 50px;
}

header button {
  margin-right: 50px;
}

.header .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.main {
  position: relative;
  text-align: center;
  color: white;
  margin-top: 70px;
}

.background {
  background-image: url("https://via.placeholder.com/1920x1080");
  background-size: cover;
  background-position: center;
  height: 100vh;
  filter: brightness(70%);
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.form-container {
  background-color: #002f63;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
}

.form-container input,
.form-container select,
.form-container button {
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  font-size: 1rem;
}

.form-container input,
.form-container select {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-container button {
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-container button:hover {
  background-color: #e65c00;
}

.filters {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.filters label {
  font-size: 0.9rem;
  color: white;
}
</style>

