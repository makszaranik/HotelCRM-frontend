<template>
    <div class="room-card" v-for="(room, index) in rooms" :key="index" >
    <img src="https://img.hotels24.ua/photos/partner_hotel/room/123/12354/1235499/Gostinica-Nesvit-nomer-Mesto-v-jenskom-8-mestnom-nomere-foto-1235499mx.jpg"  alt="Room" class="room-image">
    <div class="room-info">
      <h3>{{ title }}</h3>
      <div class="room-details">
        <p><span>🛏️</span> {{ room.bedsCount }} beds</p>
      </div>
      <p class="wifi">📶 Free Wi-Fi</p>
      <p class="cancellation">ℹ️ Free cancellation of reservation</p>
      <div class="room-price">
        <strong>{{ room.price * duration }} $ </strong> <span>for {{duration}} nights </span>
      </div>
      <button v-if="roomAvailable(room)" @click="bookRoom(room.id)" class="book-button">Book room</button>
      <p class="booked-room-text" v-if="room.status === 'booked'">Room already booked</p>
    </div>
  </div>
  <LogoutButton />
</template>

<script>
import LogoutButton from '@/components/LogoutButton.vue';
export default {
  data(){
    return {
      duration: 0,
      selectedHotelId: null,
      startDate: '',
      endDate: '',
      rooms: [],
    }
  },
  methods: {
    isLoggedIn() {
      return sessionStorage.getItem("authToken") !== null;
    },
    roomAvailable(room){
      return room.status === 'available'
    },
    getDataFromQuery() {
      this.selectedHotelId = this.$route.query.selectedHotelId;
      this.startDate = this.$route.query.startDate;
      this.endDate = this.$route.query.endDate;
      
      const startParts = this.startDate.split('-');
      const formattedStartDate = `${startParts[1]}.${startParts[2]}.${startParts[0]}`;
      const endParts = this.endDate.split('-');
      const formattedEndDate = `${endParts[1]}.${endParts[2]}.${endParts[0]}`;

      this.startDate = formattedStartDate;
      this.endDate = formattedEndDate;

      console.log(this.startDate)
      console.log(this.endDate)
      
    },
    calculateDuration(){
      const [startDay, startMonth, startYear] = this.startDate.split('.');
      const [endDay, endMonth, endYear] = this.endDate.split('.');
      const startDate = new Date(`${startYear}-${startMonth}-${startDay}`);
      const endDate = new Date(`${endYear}-${endMonth}-${endDay}`);
      const timeDiff = endDate - startDate;
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      this.duration = days > 0 ? days : 0;
    },
    async getRooms(){
      const res = await fetch(`http://localhost:8000/api/hotels/${this.selectedHotelId}/rooms`, {
        method: "POST",
        headers: {
          'Content-type' : 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
          startDate: this.startDate,
          endDate: this.endDate
        })
      });
      if(res.ok){
        const rooms = await res.json()
        this.rooms = rooms
      }
    },
    async bookRoom(roomId){
      if(!this.isLoggedIn()){
        alert("You are not logged in, please login before")
        return;
      }
      if(!confirm("Are you sure you want to book this room?")) return;
      const res = await fetch(`http://localhost:8000/api/hotels/${this.selectedHotelId}/rooms/${roomId}/book`, {
        method: "PATCH",
        headers: {
          'Content-type' : 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`
        },
      })
      if(res.ok){
        const room = this.rooms.find((room) => room.id === roomId)
        if(room){
          room.status = "booked"
        }
      }
    }
  },
  mounted() {
    this.getDataFromQuery()
    if(this.getDataFromQuery){
      this.getRooms()
    }
    this.calculateDuration()
  },
  components: {
    LogoutButton
  }
}
</script>

<style scoped>
.room-card {
  display: flex;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
  width: 65%;
}
.room-card img{
  margin-top: 60px;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.room-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.room-details p {
  margin: 5px 0;
  font-size: 14px;
  color: #333;
}

.wifi {
  margin-top: 10px;
  font-size: 14px;
  color: #1A2980;
}

.room-price {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

.room-price span {
  font-size: 14px;
  color: #666;
}

.book-button {
  width: 30vh;
  margin-top: 15px;
  margin-right: 60px;
  padding: 10px;
  color: white;
  border: none;
  text-transform: uppercase;
  transition: 0.5s;
  background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: inline-block;
  border: none;
  cursor: pointer;
}

.book-button:hover {
  background-position: right center;
  color: white;
  text-decoration: none;
}

.booked-room-text{
  font-size: 18;
  color: #dc4e4e;
}
</style>