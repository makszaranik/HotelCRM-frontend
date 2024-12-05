<template>
  <div id="auth">
    <form @submit.prevent=submitForm>
        <h2>Enter in account</h2>

        <label for="username">Username</label>
        <input @input="validateUsername" v-model="form.username" type="text" name="username" required>
        <span class="error-message"> {{ form.errors.username }} </span>

        <label for="password"> Password </label>
        <input @input="validatePassword" v-model="form.password" type="password" name="password" required>
        <span class="error-message"> {{ form.errors.password }} </span>

        <button type="submit">submit</button>
    </form>
  </div>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
  export default {
    data(){
      return{
        form: {
          username: '',
          password: '',
          errors: {
            username: '',
            password: ''
          }
        },
      }
    },
    components: {
      HeaderComponent
    },
    methods: {
      async submitForm(){
        this.handleSubmit()
        const res = await fetch('http://localhost:8000/api/users/login',{
          method : "POST",
          headers: {
            'Content-type' : 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
              username: this.form.username,
              password: this.form.password
          })
        })
        if(res.status === 200){
          const data = await res.json()
          sessionStorage.setItem("authToken", data)
          sessionStorage.setItem("username", this.form.username)
          this.$router.push("/catalog")
          return;
        }
        this.resetForm()
      },
      handleSubmit(){
        this.validateUsername();
        this.validatePassword();
      },
      resetForm() {
        this.form.password = ''
        this.form.errors = {
          username: '',
          password:  ''
        }
      },
      validateUsername() {
        if(!this.form.username){
          this.form.errors.username = 'Username is required.';
        }else{
          this.form.errors.username = '';
        }
      },
      validatePassword() {
        if(!this.form.password){
          this.form.errors.password = 'Password is required.';
        }else{
          this.form.errors.password = '';
        }
      }
    }
  }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.error-message {
    color: red;
    font-size: 0.9em;
    display: block; 
    margin-top: 5px;
}

body{
    display: grid;
    grid-template-areas: 
    "form"
    "footer";
    min-height: 100vh;
}

h2 {
    text-align: center;
    margin: 30px;
}

form {
    grid-area: form;
    max-width: 300px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 240px;
    margin-top: 100px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;
    background-image: linear-gradient(to right, #1A2980 0%, #26D0CE 51%, #1A2980 100%);
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;
    display: inline-block;
}

button:hover {
    background-position: right center;
    color: white;
    text-decoration: none;
}

footer {
    margin-top: 100px;
    grid-area: footer;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #343a40;
    color: white;
}


.footer-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
}

.footer-icons a {
    color: rgb(255, 255, 255);
    font-size: 1.5em;
    text-decoration: none;
    transition: transform 0.3s;
}

.footer-icons a:hover {
    transform: scale(1.2);
}

@media(max-width: 768px){
    body{
        display: grid;
        grid-template-areas: 
        "form"
        "footer";
        min-height: 100vh;
    }
    
    h2 {
        text-align: center;
        margin: 30px;
    }
    
    form {
        grid-area: form;
        max-width: 300px;
        margin: 20px auto;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40%;
        margin-top: 100px;
        text-align: center;
    }
}
</style>