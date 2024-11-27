<template>
  <div>
    <header class="header">
      <div class="logo">Skyscanner</div>
      <nav>
        <RouterLink to="/create">Register</RouterLink>
        <RouterLink to="/authorization">Authorization</RouterLink>
        <RouterLink to="/catalog">Catalog</RouterLink>
        <RouterView></RouterView>
      </nav>
    </header>
  </div>
</template>

<style scoped>
body {
  margin: 0;
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
  background-color: #ff6600;
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

