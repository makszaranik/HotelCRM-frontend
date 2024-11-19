<template>
  <div>
    <div class="search-container">
      <input type="text" id="city" placeholder="Enter the city name">
      <label for="start-date">start date</label>
      <input type="date" id="start-date">
      <label for="end-date">end date</label>
      <input type="date" id="end-date">
      <button>Find</button>
    </div>

    <div class="hotel-grid">
      <div class="hotel-card" v-for="(hotel, index) in hotels" :key="index">
        <img :src="hotel.image" :alt="hotel.name">
        <div class="hotel-info">
          <h3>{{ hotel.name }}</h3>
          <p>{{ hotel.city }}</p>
          <p>Время: {{ hotel.startDate }} - {{ hotel.endDate }}</p>
          <p class="price">{{ hotel.price }} usd per night</p>
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
      hotels: [
        { name: "Lavra Hotel", city: "Kyiv", startDate: "01.12.2024", endDate: "07.12.2024", price: "12", image: "https://via.placeholder.com/300x200" },
        { name: "Carpathian Hotel", city: "Lviv", startDate: "10.12.2024", endDate: "15.12.2024", price: "15", image: "https://via.placeholder.com/300x200" },
        { name: "Chernivtsi Hotel", city: "Chernivtsi", startDate: "05.01.2025", endDate: "10.01.2025", price: "10", image: "https://via.placeholder.com/300x200" }
      ]
    };
  },
  components: {
    LogoutButton
  },
  methods: {
    bookHotel(index) {
      alert(`Hotel booked: ${this.hotels[index].name}`);
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
}

.search-container button:hover {
  background-color: #0056b3;
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
  color: #28a745;
  font-weight: bold;
}

.hotel-info button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.hotel-info button:hover {
  background-color: #45a049;
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
