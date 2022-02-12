<template>
<h3>Projects:</h3>

  <div class="main">
    <ul class="cards">
      <li class="cards_item animate__animated animate__fadeInLeft">
        <div class="card">
          <div class="card_image"><img src="@/assets/sc.png" /></div>
          <div class="card_content">
            <h2 class="card_title">First cards made with HTML and CSS</h2>
            <a
              href="
/"
              class="fa fa-github"
              style="font-size: 40px; color: #222"
            ></a>
            <i
              ><span
                class="iconify mx-2"
                data-icon="simple-icons:netlify"
                style="font-size: 2rem"
              ></span>
            </i>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInLeft">
        <div class="card">
          <div class="card_image"><img src="@/assets/sc2.png" /></div>
          <div class="card_content">
            <h2 class="card_title">First attempt at HTML and CSS coding</h2>
            <a
              href="/"
              class="fab fa-github"
              style="font-size: 40px; color: #222"
            ></a>
            <a href="https://www.google.com" target="_blank"
              ><img
                src="../assets/netlify.png"
                style="height: 50px; width: 50px"
                alt=""
            /></a>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInLeft">
        <div class="card">
          <div class="card_image"><img src="@/assets/sc3.png" /></div>
          <div class="card_content">
            <h2 class="card_title">First Portfolio</h2>
            <a
              href="https://github.com/Reese1997/Reese-s-Contact-Form.git
/ "
              class="fab fa-github"
              style="font-size: 40px; color: #222"
            >
           </a>
            <a href="https://www.google.com" target="_blank"
              ><img
                src="../assets/netlify.png"
                style="height: 50px; width: 50px"
                alt=""
            /></a>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInRight">
        <div class="card">
          <div class="card_image"><img src="@/assets/ts.png" /></div>
          <div class="card_content">
            <h2 class="card_title">Temperature Converter with Javascript functionality</h2>
            <a
              href="https://github.com/Reese1997/temp-converter.git
/ "
              class="fab fa-github"
              style="font-size: 40px; color: #222"
            ></a>
            <a href="https://www.google.com" target="_blank"
              ><img
                src="../assets/netlify.png"
                style="height: 50px; width: 50px"
                alt=""
            /></a>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInRight">
        <div class="ja">
          <div class="card_image">
            <img src="@/assets/jss.png" style="width: 500px; height: 220px" />
          </div>
          <div class="card_content">
            <h2 class="card_title">Calculator with Javascript</h2>
            <a
              href="https://github.com/Reese1997/JavascriptCalc.git/"
              class="fab fa-github"
              style="font-size: 40px; color: #222"
            ></a>
            <a href="https://www.google.com" target="_blank"
              ><img
                src="../assets/netlify.png"
                style="height: 50px; width: 50px"
                alt=""
            /></a>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInRight">
        <div class="card">
          <div class="card_image">
            <img src="@/assets/js.png" style="width: 500px; height: 220px" />
          </div>
          <div class="card_content">
            <h2 class="card_title">E-commerce site with Javascript</h2>
            <a
              href="https://github.com/Reese1997/comstoreprojjs.git/"
              class="fab fa-github"
              style="font-size: 40px; color: #222"
            ></a>
            <a href="https://www.google.com" target="_blank"
              ><img
                src="../assets/netlify.png"
                style="height: 50px; width: 50px"
                alt=""
            /></a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Font */
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,700");

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: "Quicksand", serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(241, 231, 231, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(
    to bottom left,
    #698cadb3 40%,
    rgb(21, 107, 192) 100%
  );
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
.ja {
  max-height: 5%;
}
</style>
