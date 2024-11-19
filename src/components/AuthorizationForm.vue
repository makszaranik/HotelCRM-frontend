<template>
  <div id="auth">
    <form @submit.prevent=submitForm>
        <h2>Enter in account</h2>

        <label for="email"> Email </label>
        <input @input="validateEmail" v-model="form.email" type="text" name="email" required>
        <span class="error-message"> {{ form.errors.email}} </span>

        <label for="password"> Password </label>
        <input @input="validatePassword" v-model="form.password" type="password" name="password" required>
        <span class="error-message"> {{ form.errors.password }} </span>

        <button type="submit">submit</button>
    </form>
  </div>
  <LogoutButton />
</template>

<script>
  import LogoutButton from '@/components/LogoutButton.vue';
  export default {
    data(){
      return{
        form: {
          email: '',
          password: '',
          errors: {
            email: '',
            password: ''
          }
        },
      }
    },
    components: {
      LogoutButton
    },
    methods: {
      async submitForm(){
        this.handleSubmit()
        const res = await fetch('http://localhost:8000/api/users/authorization',{
          method : "POST",
          headers: {
            'Content-type' : 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
              email: this.form.email,
              password: this.form.password
          })
        })
        if(res.status === 200){
          this.$router.push("/home")
        }
        sessionStorage.setItem("authorization", true)
        this.resetForm()
      },
      handleSubmit(){
        this.validateEmail();
        this.validatePassword();
      },
      resetForm() {
        this.form.email = ''
        this.form.password = ''
        this.form.errors = {
          email: '',
          password:  ''
        }
      },
      validateEmail() {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!this.form.email) {
              this.form.errors.email = 'Email is required.';
          } else if (!emailRegex.test(this.form.email)) {
              this.form.errors.email = 'Invalid email format.';
          } else {
              this.form.errors.email = '';
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
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 3px;
}

button:hover {
    background-color: #45a049;
    cursor: pointer;
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
    
    .footer-icons {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 10px;
    }
    .footer a{
        text-align: center;
    }
}
</style>