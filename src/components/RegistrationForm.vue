<template>
<div id="form">
  <form @submit.prevent="submitForm">
    <h2>Registration</h2>

    <label for="email">Email</label>
    <input @input="validateEmail" v-model="form.email" type="email" name="email" required>
    <span class="error-message">{{ form.errors.email }}</span>

    <label for="password">Password</label>
    <input @input="validatePassword" v-model="form.password" type="password" name="password" required>
    <span class="error-message">{{ form.errors.password }}</span>

    <label for="username">Username</label>
    <input v-model="form.username" type="text" name="username" required>

    <label for="name">Name</label>
    <input @input="validateName" v-model="form.name" type="text" name="name" required>
    <span class="error-message">{{ form.errors.name }}</span>

    <label for="secondname">Secondname</label>
    <input @input="validateSecondname" v-model="form.secondname" type="text" name="secondname">
    <span class="error-message">{{ form.errors.secondname }}</span>

    <label for="birthdaydata">Birthday data (dd.mm.yyyy)</label>
    <input @input="validateBirthdaydata" v-model="form.birthdaydata" type="text" name="birthdaydata" required>
    <span class="error-message">{{ form.errors.birthdaydata }}</span>

    <label for="phone">Telephone *</label>
    <input @input="handlePhoneInput" @focus="phoneFocusListener" @blur="phoneBlurListener" v-model="form.phone" type="tel" name="phone" placeholder="+38(0XX) XXX-XX-XX" required>
    <span class="error-message">{{ form.errors.phone }}</span>

    <label for="group">Group</label>
    <select @change="validateGroup" v-model="form.group" required>
      <option value="" disabled selected>Select your group</option>
      <option v-for="group in form.groups" :key="group" :value="group">{{ group }}</option>
    </select>
    <span class="error-message">{{ form.errors.group }}</span>

    <label for="sex">Gender:</label>
    <div class="radio-group">
      <div>
        <input type="radio" v-model="form.sex" value="Male" required> Male
      </div>
      <div>
        <input type="radio" v-model="form.sex" value="Female" required> Female
      </div>
    </div>
    <span class="error-message">{{ form.errors.sex }}</span>

    <label for="fileUpload">Choose an image (JPEG, PNG):</label>
    <input type="file" @change="validateFileUpload" ref="fileUpload" accept=".jpg, .jpeg, .png" required>
    <span class="error-message">{{ form.errors.fileUpload }}</span>

    <button type="submit">Register</button>
  </form>
</div>
<HeaderComponent />
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          username: '',
          name: '',
          secondname: '',
          birthdaydata: '',
          phone: '',
          group: '',
          sex: '',
          fileUpload: null,
          groups: ["Group 1", "Group 2", "Group 3"],
          errors: {
            email: '',
            password: '',
            name: '',
            secondname: '',
            birthdaydata: '',
            phone: '',
            group: '',
            sex: '',
            fileUpload: ''
          }
        }
      };
    },
    components: {
      HeaderComponent
    },
    methods: {
      async submitForm(){
        this.handleSubmit()
        const res = await fetch('http://localhost:8000/api/users/registration', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                username: this.form.username,
                email: this.form.email,
                password: this.form.password
            })
        })
        console.log(res)
        this.resetForm();
      },
      handleSubmit() {
        this.validateEmail();
        this.validatePassword();
        this.validateSurname();
        this.validateName();
        this.validateSecondname();
        this.validateBirthdaydata();
        this.validatePhone();
        this.validateGroup();
        this.validateSex();
        this.validateFileUpload({ target: this.$refs.fileUpload });

        if (Object.values(this.form.errors).every(error => error === '')) {
            alert('Form submitted successfully!');
        }
    },
      handlePhoneInput(){
          this.phoneInputListener()
          this.validatePhone()
      },
      phoneInputListener(){
          let value = this.form.phone.replace(/\D/g, '');
          if (value.length === 1) {
              value = '38(0' + value;
          }
          if (value.length === 4) {
              value = value.substring(0, 3) + value[3];
          }
          if (value.length > 13) {
              value = value.substring(0, 10);
          }
          let formattedValue = '+38(' + value.substring(2, 5) + ') ';
          if (value.length >= 6) {
              formattedValue += value.substring(5, 8);
          }
          if (value.length >= 8) {
              formattedValue += '-' + value.substring(8, 10);
          }
          if (value.length >= 10) {
              formattedValue += '-' + value.substring(10, 12);
          }
          this.form.phone = formattedValue;
      },
      phoneFocusListener() {
          if (this.form.phone === '') {
              this.form.phone = '+38(0';
          }
      },
      phoneBlurListener(){
          if(this.form.phone.length != 18) this.form.phone = '';
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
          if (!this.form.password) {
              this.form.errors.password = 'Password is required.';
          } else {
              this.form.errors.password = '';
          }
      },
      validateName() {
          const nameRegex = /^[A-Za-zА-Яа-яЁё]+$/;
          if (!this.form.name) {
              this.form.errors.name = 'Name is required.';
          } else if (!nameRegex.test(this.form.name)) {
              this.form.errors.name = 'Invalid name format.';
          } else {
              this.form.errors.name = '';
          }
      },
      validateSecondname() {
          const nameRegex = /^[A-Za-zА-Яа-яЁё]*$/; // allowing empty second name
          if (this.form.secondname && !nameRegex.test(this.form.secondname)) {
              this.form.errors.secondname = 'Invalid format for second name.';
          } else {
              this.form.errors.secondname = '';
          }
      },
      validateBirthdaydata() {
          const birthdayPattern = /^\d{2}\.\d{2}\.\d{4}$/;
          if (!this.form.birthdaydata) {
              this.form.errors.birthdaydata = 'Birthday is required.';
          } else if (!birthdayPattern.test(this.form.birthdaydata)) {
              this.form.errors.birthdaydata = 'Date format should be dd.mm.yyyy.';
          } else {
              this.form.errors.birthdaydata = '';
          }
      },
      validatePhone() {
          const phonePattern = /^\+38\(0\d{2}\)\s?\d{3}-\d{2}-\d{2}$/;
          if (!this.form.phone) {
              this.form.errors.phone = 'Phone number is required.';
          } else if (!phonePattern.test(this.form.phone)) {
              this.form.errors.phone = 'Invalid phone number format.';
          } else {
              this.form.errors.phone = '';
          }
      },
      validateGroup() {
          if (!this.form.group) {
              this.form.errors.group = 'Please select a group.';
          } else {
              this.form.errors.group = '';
          }
      },
      validateSex() {
          if (!this.form.sex) {
              this.form.errors.sex = 'Please select your gender.';
          } else {
              this.form.errors.sex = '';
          }
      },
      validateFileUpload(event) {
          const file = event.target.files[0];
          if (!file) {
              this.form.errors.fileUpload = 'Please upload a file.';
          } else if (!['image/jpeg', 'image/png'].includes(file.type)) {
              this.form.errors.fileUpload = 'Only JPEG or PNG files are allowed.';
          } else {
              this.form.errors.fileUpload = '';
              this.form.fileUpload = file;
          }
      },
      resetForm() {
          this.form.email = '';
          this.form.password = '';
          this.form.surname = '';
          this.form.name = '';
          this.form.secondname = '';
          this.form.birthdaydata = '';
          this.form.phone = '';
          this.form.group = '';
          this.form.sex = '';
          this.form.fileUpload = null;
          
          this.form.errors = {
              email: '',
              password: '',
              surname: '',
              name: '',
              secondname: '',
              birthdaydata: '',
              phone: '',
              group: '',
              sex: '',
              fileUpload: ''
          }
      }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h2 {
    text-align: center;
    margin: 30px;
}


body{
    display: grid;
    grid-template-areas: 
    "form"
    "footer";
    min-height: 100vh;
}


form {
    box-sizing: border-box;
    width: 350px;
    max-width: 350px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
}

.error-message {
    color: red;
    font-size: 0.9em;
    display: block; 
    margin-top: 5px;
}


.radio-group {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 50px;
}

.radio-group div {
    display: flex;
    align-items: center;
}

.radio-group label{
    margin-left: 10px;
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


@media (max-width: 768px){
    h2{
        margin: 5vh 5vw;
        text-align: center;
    }
    form{
        text-align: center;
        max-width: 40vh;
        height: 135vh;
        margin: 5vh auto;
        padding: 5vh;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    input, select{
        width: 100%;
        padding: 10px;
        margin-bottom: 25px;
        border: 1px solid #ccc;
        border-radius: 3px;
        box-sizing: border-box;
    }
    button {
        width: 100%;
        padding: 10px;
        background-color: #559457;
        color: white;
        border: none;
        border-radius: 3px;
    }

    footer {
        grid-area: footer;
        display: flex;
        justify-content: space-around;
        padding: 20px;
        background-color: #343a40;
        color: white;
        margin-top: 150px
    }
    
    
    .footer-icons {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 10px;
    }
}
</style>
