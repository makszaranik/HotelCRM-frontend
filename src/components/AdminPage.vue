<template>
  <div class="admin-container">
    <h2>Hotel Administration</h2>
    <div class="hotel-management">
      <div class="hotel-form">
        <h3>Create Hotel</h3>
        <input v-model="newHotel.name" type="text" placeholder="Hotel Name" />
        <input v-model="newHotel.city" type="text" placeholder="City" />
        <input v-model="newHotel.image" type="text" placeholder="Hotel Image URL" />
        <button @click="addHotel">Create Hotel</button>
      </div>
      <div class="hotel-select">
        <h3>Choose the Hotel</h3>
        <select v-model="selectedHotelId" @change="selectHotel">
          <option v-for="hotel in hotels" :key="hotel.id" :value="hotel.id">
            {{ hotel.name }} ({{ hotel.city }})
          </option>
        </select>
        <button v-if="selectedHotel" @click="deleteHotel(selectedHotel.id)">Delete Hotel</button>
      </div>
    </div>

    <div v-if="selectedHotel" class="room-management">
      <h3 @click="toggleRoomManagement" class="toggle-button">
        Room Administration for {{ selectedHotel.name }}
      </h3>
      <!-- Display the hotel image -->
      <div class="hotel-image">
      </div>
      <div v-show="isRoomManagementVisible">
        <div class="room-form">
          <select v-model="newRoom.type">
            <option disabled value="">Choose Room Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="family">Family</option>
          </select>
          <input v-model.number="newRoom.bedsCount" type="number" placeholder="Number of Beds" />
          <input v-model.number="newRoom.price" type="number" placeholder="Price per Night" />
          <input v-model="newRoom.image" type="text" placeholder="Room Image URL" />
          <!-- Добавляем поля для дат так же, как на начальной странице -->
          <input v-model="newRoom.startDate" type="date" placeholder="Start Date" />
          <input v-model="newRoom.endDate" type="date" placeholder="End Date" />
          <button @click="addRoom">Create Room</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Room Type</th>
              <th>Beds</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="room in selectedHotel.rooms" :key="room.id">
              <td>{{ room.type }}</td>
              <td>{{ room.bedsCount }}</td>
              <td>${{ room.price }}</td>
              <!-- Display the room image -->
              <td>
                <img :src="room.image" alt="Room Image"/>
              </td>
              <td>
                <button @click="deleteRoom(room.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <LogoutButton />
  <HeaderComponent />
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import LogoutButton from './LogoutButton.vue';

export default {
  data() {
    return {
      hotels: [],
      selectedHotelId: null,
      selectedHotel: null,
      newHotel: {
        name: "",
        city: "",
        image: "",
      },
      newRoom: {
        type: "",
        bedsCount: 1,
        price: 0,
        image: "",
        startDate: "2023-12-01",
        endDate: "2023-12-01",
        status: "available"
      },
      isRoomManagementVisible: true,
    };
  },
  components:{
    LogoutButton,
    HeaderComponent
  },
  methods: {
    async fetchHotels() {
      const res = await fetch("http://localhost:8000/api/hotels");
      if (res.ok) {
        this.hotels = await res.json();
      }
    },
    async addHotel() {
      const res = await fetch("http://localhost:8000/api/hotels/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newHotel),
      });
      if (res.ok) {
        const addedHotel = await res.json();
        this.hotels.push(addedHotel);
        this.newHotel = { name: "", city: "", image: "" };
      } else {
        const errorData = await res.json();
        console.error('Error adding hotel:', errorData);
      }
    },
    async deleteHotel(hotelId) {
      const res = await fetch(`http://localhost:8000/api/hotels/${hotelId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        this.hotels = this.hotels.filter((hotel) => hotel.id !== hotelId);
        if (this.selectedHotel?.id === hotelId) {
          this.selectedHotel = null;
          this.selectedHotelId = null;
        }
      } else {
        const errorData = await res.json();
        console.error('Error deleting hotel:', errorData);
      }
    },
    selectHotel() {
      this.selectedHotel = this.hotels.find(
        (hotel) => hotel.id === this.selectedHotelId
      );
    },
    toggleRoomManagement() {
      this.isRoomManagementVisible = !this.isRoomManagementVisible;
    },
    async addRoom() {
      const res = await fetch(`http://localhost:8000/api/hotels/${this.selectedHotel.id}/rooms/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newRoom),
      });
      console.log(this.newRoom);
      if (res.ok) {
        const addedRoom = await res.json();
        this.selectedHotel.rooms.push(addedRoom);
        this.newRoom = { type: "", bedsCount: 1, price: 0, image: "", status: "available", startDate: "2023-12-01", endDate: "2023-12-01"};
      } else {
        const errorData = await res.json();
        console.error('Error adding room:', errorData);
      }
    },
    async deleteRoom(roomId) {
      const res = await fetch(
        `http://localhost:8000/api/hotels/${this.selectedHotel.id}/rooms/${roomId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        this.selectedHotel.rooms = this.selectedHotel.rooms.filter(
          (room) => room.id !== roomId
        );
      } else {
        const errorData = await res.json();
        console.error('Error deleting room:', errorData);
      }
    },
  },
  mounted() {
    this.fetchHotels();
  },
};
</script>

<style scoped>
input {
  height: 30px;
}
.admin-container {
  padding: 20px;
}
.hotel-management,
.room-management {
  margin-bottom: 20px;
}
.hotel-form,
.room-form {
  margin-bottom: 10px;
}
.hotel-select {
  margin-top: 20px;
}
select {
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  margin: 5px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.toggle-button {
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
.hotel-image img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
table img {
  max-width: 100px;
  height: auto;
}
</style>
