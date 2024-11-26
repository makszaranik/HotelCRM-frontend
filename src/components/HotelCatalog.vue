<template>
  <div>
    <div class="search-container">
      <input v-model="city" type="text" id="city" placeholder="Enter the city name">
      <label for="start-date">arrival date</label>
      <input v-model="startDate" type="date" id="start-date">
      <label for="end-date">departure date</label>
      <input v-model="endDate" type="date" id="end-date">
      <button v-show="isValidForm()" @click="searchHotel">Find</button>
      <button v-show="!isValidForm()">Find</button>
    </div>

    <div class="hotel-grid">
      <div class="hotel-card" v-for="(hotel, index) in hotels" :key="index">
        <img :src="hotel.image" :alt="hotel.name">
        <div class="hotel-info">
          <h3>{{ hotel.name }}</h3>
          <p>{{ hotel.city }}</p>
          <p class="price">average price {{ averagePrice(hotel) }}$ per night</p>
          <button @click="bookHotel(index)">Book Hotel</button>
        </div>
      </div>
    </div>
  </div>
  <LogoutButton />
</template>

<script>
import LogoutButton from '@/components/LogoutButton.vue';
export default {
  data() {
    return {
      city: '',
      startDate: '',
      endDate: '',
      hotels: [],
      selectedHotelId: null,
    };
  },
  mounted() {
    this.allHotels();
  },
  components: {
    LogoutButton
  },
  methods: {
    averagePrice(hotel){
      let average = 0
      let sum = 0
      hotel.rooms.forEach(element => {
        sum += element.price
      });
      average = (sum/(hotel.rooms.length))
      return average
    },
    isValidForm(){
      return (this.startDate !== "" && this.endDate !== "");
    },
    bookHotel(index) {
      this.selectedHotelId = this.hotels[index].id
      this.$router.push({path: "/catalog/rooms", query: {
        selectedHotelId: this.selectedHotelId,
        startDate: this.startDate,
        endDate: this.endDate
      }})
    },
    async allHotels(){
      const res = await fetch('http://localhost:8000/api/hotels',{
        method: "GET",
        headers: {
          'Content-type' : 'application/json'
        },
      });
      if(res.status === 200){
        const data = await res.json()
        this.hotels = data
      }
    },    
    async searchHotel(){
      this.hotels = []
      const startParts = this.startDate.split('-');
      const formattedStartDate = `${startParts[1]}.${startParts[2]}.${startParts[0]}`;
      const endParts = this.endDate.split('-');
      const formattedEndDate = `${endParts[1]}.${endParts[2]}.${endParts[0]}`;
      console.log(this.hotels)
      if(this.city == ''){
        this.allHotels()
        return
      }
      const res = await fetch('http://localhost:8000/api/hotels/search', {
        method: "POST",
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          city: this.city,
          startDate: formattedStartDate,
          endDate: formattedEndDate
        }),
      });
      if(res.status === 200){
        const data = await res.json()
        this.hotels = data;
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

body {
  font-family: Arial, sans-serif;
  display: grid;
  grid-template-areas: "content" "footer";
  min-height: 100vh;
  background-color: #f4f4f4;
}

h2 {
  text-align: center;
  margin: 30px 0;
}

.search-container {
  text-align: left;
  margin: 20px;
}

.search-container input {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 200px;
}

.search-container button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  height: 38px;
  border: none;
  text-transform: uppercase;
  transition: 0.3s;
  background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: inline-block;
}

.search-container button:hover {
  background-position: right center;
  color: white;
  text-decoration: none;
}

.search-container-invalidForm button{
  padding: 10px 15px;
  background-color: #374383;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
}

.search-container-invalidForm button:hover{
  background-color: #75b5f9;
}

.search-container button:hover {
  background-color: #1A2980;
}
.search-container button:active {
  transform: scale(0.95);
  background-color: #27347e;
}

.select-btn-container {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}

.select-btn-container button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 3px;
  width: 120px;
  cursor: pointer;
  padding: 8px 15px;
}

.select-btn-container button:hover {
  background-color: #45a049;
}

.hotel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px;
}

.hotel-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.hotel-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.hotel-info {
  padding: 15px;
}

.hotel-info h3 {
  margin: 0;
  font-size: 1.2em;
}

.hotel-info p {
  margin: 5px 0;
  color: #555;
}

.hotel-info .price {
  font-size: 1.1em;
  color: #1A2980;
  font-weight: bold;
}

.hotel-info button {
  width: 100%;
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

.hotel-info button:hover {
  background-position: right center;
  color: white;
  text-decoration: none;
}



@media (max-width: 768px) {
  h2 {
    margin: 5vh 5vw;
    text-align: center;
  }

  .search-container input {
    width: 100%;
    margin-bottom: 25px;
  }

  .hotel-info button {
    padding: 12px;
  }
}
</style>
