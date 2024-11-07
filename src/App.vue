<template>
<div id="form">
  <form @submit.prevent="handleSubmit">
    <h2>Registration</h2>

    <label for="email">Email</label>
    <input @input="validateEmail" v-model="form.email" type="email" name="email" required>
    <span class="error-message">{{ form.errors.email }}</span>

    <label for="password">Password</label>
    <input @input="validatePassword" v-model="form.password" type="password" name="password" required>
    <span class="error-message">{{ form.errors.password }}</span>

    <label for="surname">Surname</label>
    <input @input="validateSurname" v-model="form.surname" type="text" name="surname" required>
    <span class="error-message">{{ form.errors.surname }}</span>

    <label for="name">Name</label>
    <input @input="validateName" v-model="form.name" type="text" name="name" required>
    <span class="error-message">{{ form.errors.name }}</span>

    <label for="secondname">Secondname</label>
    <input @input="validateSecondname" v-model="form.secondname" type="text" name="secondname">
    <span class="error-message">{{ form.errors.secondname }}</span>

    <label for="birthdaydata">Birthday data (dd.mm.yyyy)</label>
    <input @input="validateBirthdaydata" v-model="form.birthdaydata" type="text" name="birthdaydata" required>
    <span class="error-message">{{ form.errors.birthdaydata }}</span>

    <label for="phone">Телефон *</label>
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
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          surname: '',
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
      };
    },
    methods: {
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
      validateSurname() {
          const surnameRegex = /^[A-Za-zА-Яа-яЁё]+$/;
          if (!this.form.surname) {
              this.form.errors.surname = 'Surname is required.';
          } else if (!surnameRegex.test(this.form.surname)) {
              this.form.errors.surname = 'Invalid surname format.';
          } else {
              this.form.errors.surname = '';
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
              this.resetForm()
          }
      }
  }
};
</script>

<style scoped>

</style>
