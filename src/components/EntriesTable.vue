<template>
  <div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Hotel</th>
            <th>Room</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(booking, index) in bookings" :key="index">
          <td>
            <div class="hotel-info">
              <img :src="booking.room.image" :alt="booking.hotelName" class="hotel-image" />
              <div>
                <h4>{{ booking.hotelName }}</h4>
                <p>{{ booking.city }}</p>
              </div>
            </div>
          </td>
          <td>
            <div class="room-info">
              <p><strong>{{ booking.room.type }}</strong></p>
              <p>Status: {{ booking.room.status }}</p>
              <p>Beds: {{ booking.room.bedsCount }}</p>
              <p>Price: {{ booking.room.price }}$</p>
              <p>Dates: {{ booking.room.startDate }} - {{ booking.room.endDate }}</p>
            </div>
          </td>
          <td>
            <button @click="unbookRoom(booking.hotelName, booking.hotelId, booking.room.id)" class="unbook-button">Unbook</button>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
  data() {
    return {
      bookings: []
    };
  },
  components: {
    HeaderComponent
  },
  methods: {
    async getAllUserBooks() {
      const res = await fetch('http://localhost:8000/api/hotels/bookings', {
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        this.bookings = data;
      }
    },
    async unbookRoom(hotelName, hotelId, roomId) {
      if(!confirm(`are you shure, that you want to unbook room in hotel ${hotelName}`)){
        return;
      }
      const res = await fetch(`http://localhost:8000/api/hotels/${hotelId}/rooms/${roomId}/unbook`, {
        method: "PATCH",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`
        }
      });
      if(res.status === 200){
        this.getAllUserBooks()
      }
    },
  },
  mounted() {
    this.getAllUserBooks();
  } 
};
</script>

<style scoped>
.table-container {
  margin: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 15px;
}

th {
  background-color: #002f63;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

.hotel-info {
  display: flex;
  align-items: center;
}

.hotel-image {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin-right: 10px;
  object-fit: cover;
}

.room-info {
  font-size: 14px;
  color: #555;
}
.unbook-button {
  padding: 10px;
  color: white;
  border: none;
  width: 100px;
  height: 38px;
  text-transform: uppercase;
  transition: 0.5s;
  background-image: linear-gradient(to right, #1A2980 0%, #26D0CE 51%, #1A2980 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  cursor: pointer;
}

.unbook-button:hover {
  background-position: right center;
  color: white;
  text-decoration: none;
}

</style>