<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hotel CRM</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    </head>
    <body>
        <header>
            <div class="header-container">
                <img src="logo.png" alt="Hotel Logo" class="logo">
                <nav id="menu">
                    <ul class="menu">
                        <li id="current" class="active item1"><a href="https://example.com"><span>Main Page</span></a></li>
                        <li class="item"><a href="autorization.html"><span>Authorization</span></a></li>
                        <li class="item"><a href="https://example.com/hotelslist"><span>Hotel Catalog</span></a></li>
                        <li class="item"><a href="FAQ.html"><span>FAQ</span></a></li>
                        <li class="item"><a href="https://example.com/contacts"><span>Our Contacts</span></a></li>
                        <li class="item"><a href="registration.html"><span>Registration</span></a></li>
  
                        <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="left">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
        </div>
        <div class="content">
            <div class="slider">
                <h2>Our Latest Offers</h2>
                <p>Explore the best deals and discounts on hotel bookings available now. Whether you're planning a relaxing getaway or a business trip, we have the perfect accommodation options for you.</p>
                <p>Take advantage of our seasonal promotions and save on your next stay at one of our luxurious hotels. Don't miss out on limited-time offers that are tailored to your needs.</p>
                <p>Check out our early bird offers for the upcoming holiday season. Plan your stay in advance and enjoy exclusive discounts on rooms and services.</p>
                <p>For a memorable experience, explore our premium rooms, complete with world-class amenities and personalized service.</p>
                <p>Our hotels offer top-notch dining, wellness services, and activities, ensuring a complete vacation experience. Book now and indulge in the luxury you deserve.</p>
                <p>We strive to provide the best hospitality for every guest, with special packages designed for families, couples, and business travelers.</p>
            </div>
            <div class="news">
                <h2>News</h2>
                <p>Our hotel chain has recently expanded, adding new locations in popular tourist destinations. Stay tuned for more updates on our new properties.</p>
                <p>We're introducing a loyalty program that rewards frequent guests with exclusive perks and discounts. Sign up now and start earning points on every stay.</p>
                <p>In response to the growing demand for sustainable travel, our hotels are implementing eco-friendly practices. We're committed to reducing our environmental footprint and promoting green tourism.</p>
                <p>Our culinary team has launched a new seasonal menu at all locations, featuring locally sourced ingredients and innovative dishes. Join us for an unforgettable dining experience.</p>
                <p>We are upgrading our guest rooms with the latest technology to enhance comfort and convenience. Expect new smart features, comfortable bedding, and more.</p>
                <p>Exciting events are coming up at our hotels, including live performances, themed parties, and special promotions. Check out our event calendar for the latest happenings.</p>
            </div>
            <div class="about">
                <h2>About the Project</h2>
                <p>This CRM system is designed to streamline hotel booking and customer management. It integrates multiple functionalities to manage reservations, customer preferences, and services efficiently.</p>
                <p>Our system allows hotel staff to track bookings in real-time, manage guest information, and offer personalized services based on individual preferences.</p>
                <p>Through this platform, customers can easily book rooms, check availability, and access a range of services from the comfort of their home or on the go.</p>
                <p>We are continuously improving the system with new features and updates to enhance the user experience and ensure seamless interaction between guests and hotel staff.</p>
                <p>The goal of this CRM is to create an all-in-one solution for hotel operations, ensuring that both guests and staff enjoy a smooth and efficient experience.</p>
            </div>
        </div>
        <div class="right">
            <h2>About</h2>
            <p>Our hotel chain is committed to offering high-quality service, luxurious accommodations, and a welcoming atmosphere. Whether you're here for business or leisure, we ensure your stay is unforgettable.</p>
            <p>With a wide variety of properties in prime locations, our hotels are perfect for travelers seeking comfort, convenience, and top-tier amenities.</p>
            <p>We prioritize sustainability, customer satisfaction, and innovation in all our operations. Join us in experiencing the best in hospitality.</p>
        </div>
        <footer>
            <div class="container">
                <div class="footer-icons">
                    <a href="tel:+123456789" aria-label="Call Us"><i class="fas fa-phone"></i></a>
                    <a href="mailto:info@example.com" aria-label="Send Email"><i class="fas fa-envelope"></i></a>
                    <a href="https://t.me/yourusername" aria-label="Chat on Telegram"><i class="fab fa-telegram-plane"></i></a>
                    <a href="https://wa.me/1234567890" aria-label="Chat on WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    <a href="viber://chat?number=+123456789" aria-label="Chat on Viber"><i class="fab fa-viber"></i></a>
                </div>
                <p>© 2023 Hotel CRM. All rights reserved.</p>
            </div>
        </footer>   
    </body>
    </html>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    display: grid;
    grid-template-areas: 
        "header header header"
        "left content right"
        "footer footer footer";
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 10px;
}

header {
    grid-area: header;
    background-color: #f8f9fa;
    padding: 20px;
    border-bottom: 2px solid #dee2e6;
    display: flex;
    justify-content: space-between; 
    align-items: center; 
}

.header-logo{
  margin-right: 40px;
}

.header-container {
    display: flex;
    justify-content: flex-start;
}

.menu {
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
}

.menu li {
    margin: 0 10px;
}

.menu li a {
    text-decoration: none;
    color: #4CAF50;
    font-weight: bold;
}




.lds-grid,
.lds-grid div {
  box-sizing: border-box;
}
.lds-grid {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  padding: 30px 0px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: currentColor;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.lds-grid{
  margin-left: 40px;
}

.left, .right {
    padding: 20px;
    background-color: white;
    border: 2px solid #dee2e6;
}

.left {
    grid-area: left;
}

.right {
    grid-area: right;
}

.content {
    grid-area: content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: white;
    border: 2px solid #dee2e6;
}

.slider, .news, .about {
    padding: 10px;
    background-color: #f8f9fa;
    border: 1px solid #ccc;
}

.slider h2, .news h2, .about h2 {
    color: #343a40;
    margin-bottom: 10px;
}

.slider p, .news p, .about p {
    color: #666;
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


ul, li {
    list-style-type: none;
    line-height: 1.5;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    color: #007bff;
}

.content img:hover {
    transform: scale(1.1);
}



@media (max-width: 768px) {
  body {
      grid-template-areas:
          "header"
           "left"
          "content"
          "right"
          "footer";
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
  }
  
  .left, .content, .right{
    text-align: center;
  }
  
  .content {
      grid-template-columns: 1fr;
  }
  
  .menu {
      flex-direction: column;
      align-items: center;
  }
  
  .menu li {
      margin: 10px 0;
  }
  
  .header-container {
      flex-direction: column;
      align-items: center;
  }
  
  .logo {
      margin-bottom: 10px;
  }
  
  .slider, .news, .about {
      margin-bottom: 20px;
  }
  
  footer {
      flex-direction: column;
      align-items: center;
  }
  }
</style>
<script>
</script>
  