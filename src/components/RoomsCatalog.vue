<template>
    <div class="room-card" v-for="(room, index) in rooms" :key="index" >
    <img src="https://img.hotels24.ua/photos/partner_hotel/room/123/12354/1235499/Gostinica-Nesvit-nomer-Mesto-v-jenskom-8-mestnom-nomere-foto-1235499mx.jpg"  alt="Room" class="room-image">
    <div class="room-info">
      <h3>{{ title }}</h3>
      <div class="room-details">
        <p><span>🛏️</span> {{ room.bedsCount }} beds</p>
      </div>
      <p class="wifi">📶 Free Wi-Fi</p>
      <p class="prepayment" :class="{ green: !prepaymentNeeded }">
        {{ prepaymentNeeded ? "Передоплата потрібна" : "Передоплата не потрібна" }}
      </p>
      <p class="cancellation">ℹ️ Безкоштовне скасування бронювання</p>
      <div class="room-price">
        <strong>{{ room.price}} грн</strong> <span>за 27 ночей (за місце)</span>
      </div>
      <button class="book-button">Забронювати</button>
    </div>
  </div>
  <LogoutButton />
</template>

<script>
import LogoutButton from '@/components/LogoutButton.vue';
export default {
  data(){
    return {
      selectedHotelId: null,
      startDate: '',
      endDate: '',
      rooms: [],
    }
  },
  methods: {
    getDataFromQuery(){
      this.selectedHotelId = this.$route.query.selectedHotelId
      this.startDate = this.$route.query.startDate
      this.endDate = this.$route.query.endDate
      
      const startParts = this.startDate.split('-');
      const formattedStartDate = `${startParts[1]}.${startParts[2]}.${startParts[0]}`;
      const endParts = this.endDate.split('-');
      const formattedEndDate = `${endParts[1]}.${endParts[2]}.${endParts[0]}`;

      this.startDate = formattedStartDate
      this.endDate = formattedEndDate
    },
    async getRooms(){
      const res = await fetch(`http://localhost:8000/api/hotels/${this.selectedHotelId}/rooms`, {
        method: "POST",
        headers: {
          'Content-type' : 'application/json'
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
    }
  },
  mounted() {
    this.getDataFromQuery()
    if(this.getDataFromQuery){
      this.getRooms()
    }
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
  margin-top: 100px;
  width: 200px;
  height: 150px;
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
  color: #007bff;
}

.prepayment {
  margin-top: 5px;
  font-size: 14px;
}

.prepayment.green {
  color: green;
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.book-button:hover {
  background-color: #218838;
}
</style>