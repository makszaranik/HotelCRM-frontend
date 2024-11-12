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
                <img src="logo.jpg" alt="Hotel Logo" class="logo">
                <nav id="menu">
                    <ul class="menu">
                        <li id="current" class="active item1"><a href="https://example.com"><span>Main Page</span></a></li>
                        <li class="item"><a href="autorization.html"><span>Autorization</span></a></li>
                        <li class="item"><a href="https://example.com/hotelslist"><span>Hotel Catalog</span></a></li>
                        <li class="item"><a href="FAQ.html"><span>FAQ</span></a></li>
                        <li class="item"><a href="https://example.com/contacts"><span>Our Contacts</span></a></li>
                        <li class="item"><a href="regestration.html"><span>Registration</span></a></li>
  
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
                <p>Check out our latest hotel deals and promotions.</p>
            </div>
            <div class="news">
                <h2>News</h2>
                <p>Read the latest news about our hotel services and community events.</p>
            </div>
            <div class="about">
                <h2>About the Project</h2>
                <p>This CRM system is designed to streamline hotel booking and customer management.</p>
            </div>
        </div>
        <div class="right">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
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
  