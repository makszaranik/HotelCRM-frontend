<template>
  <div>
    <table id="registrationTable">
      <thead>
        <tr>
          <th>Select</th>
          <th>Email</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Group</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in entries" :key="index">
          <td><input type="checkbox" v-model="entry.selected" /></td>
          <td>{{ entry.email }}</td>
          <td>{{ entry.name }}</td>
          <td>{{ entry.surname }}</td>
          <td>{{ entry.phone }}</td>
          <td>{{ entry.group }}</td>
          <td>{{ entry.sex }}</td>
          <td><button @click="$emit('delete-entry', index)">delete</button></td>
        </tr>
      </tbody>
    </table>
    <button id="deleteSelected" @click="$emit('delete-selected')">delete selected</button>
    <button id="duplicateSelected" @click="$emit('duplicate-selected')">dublicate selected</button>
  </div>
</template>

<script>
export default {
  props: {
    entries: Array,
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}
button {
  margin-top: 10px;
  margin-right: 10px;
}
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


input, select {
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


@media (max-width: 768px){
    h2{
        margin: 5vh 5vw;
        text-align: center;
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
}
</style>
