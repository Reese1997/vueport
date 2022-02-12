<template>
<h3>Testimonials:</h3>

  <div class="main">
    <ul class="cards ">
      <li class="cards_item animate__animated animate__fadeInRight">
        <div class="card ">
          <div class="godwin"><img src="@/assets/Godwin.jpeg" style="width: 700px; height; 300px" /></div>
          <div class="card_content">
            <h2 class="card_title">Head of Cirriculum</h2>
            <p class="card_text">Godwin Dzvapatsva</p>
            <p class="card_text">
              I think Reese is a very creative student. I think she enjoys
              working with her classmates. She has learned many new words
              through the class readings and our lessons. I am quite happy with
              the effort she puts into her work. Its a pleasure to see her
              projects which she worked on so far. I recommend her.
            </p>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInRight">
        <div class="card">
          <div class="card_image"><img src="@/assets/jason.jpeg" style="width: 700px; height: 100%" /></div>
          <div class="card_content">
            <h2 class="card_title">Lecturer</h2>
            <p class="card_text">Jason Wandrag</p>
            <p class="card_text">
              Through focus, hard work and dedication, Reese has quickly gained
              and improved her skills as a software developer. Reese has a
              'never-give-up' attitude, and a work ethic that will make her a
              great asset to any team. She has proven to be both diligent and
              consistent in her studies. I would recommend Reese to anyone
              looking for a great team player and motivated developer.
            </p>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInRight">
        <div class="card">
          <div class="card_image"><img src="@/assets/Abdul.jpg" style="width: 90%" /></div>
          <div class="card_content">
            <h2 class="card_title">Full-Stack Developer</h2>
            <p class="card_text">Abdul-Muhaymien Salaam</p>
            <p class="card_text">
              Reese is like the glue that holds any group she joins together.
              She has excellent leadership qualities and is a really great
              person. She has an excellent work ethic and always strives her
              best.
            </p>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInLeft">
        <div class="card">
          <div class="card_image"><img src="@/assets/Sergio3.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">Full-Stack Developer</h2>
            <p class="card_text">
              Reese is a hard worker who is very good at what she does. she is
              committed and loyal, making her an essential part of any team.
            </p>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInLeft">
        <div class="card">
          <div class="card_image"><img src="@/assets/chad.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">Full-Stack Developer</h2>
            <p class="card_text">
              "Since we started working together, Reese has shown that she is a
              committed, hardworking and a talented developer. Always striving
              for excellence, never giving less than 110 percent. She definitely
              has a bright future in this industry!"
            </p>
          </div>
        </div>
      </li>
      <li class="cards_item animate__animated animate__fadeInLeft">
        <div class="card">
          <div class="card_image"><img src="" /></div>
          <div class="card_content">
            <h2 class="card_title">Daniel Bowers</h2>
            <p class="card_text">Full-Stack Developer</p>
            <p class="card_text">
              Reese is an inspirational person with a lot of dedication, she
              puts her all into the work she does and a joy to be around.
            </p>
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
  color: #f0dfdf;
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
  height: 100%;
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
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
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

.g {
  height: 200px;
}
</style>
