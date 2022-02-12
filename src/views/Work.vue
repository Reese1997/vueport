<template>
<h3>Work:</h3>
  <div class="timeline">
    <div class="timeline__component">
      <div
        class="timeline__date timeline__date--right animate__animated animate__backInLeft"
      >
        2015
      </div>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component timeline__component--bg">
      <h2 class="timeline__title animate__animated animate__backInLeft">
        2015
      </h2>
      <p class="timeline__paragraph animate__animated animate__backInLeft">
        I matriculated from Heathfield High School.
      </p>
    </div>
    <div class="timeline__component timeline__component--bg">
      <h2 class="timeline__title animate__animated animate__backInRight">
        2016
      </h2>
      <p class="timeline__paragraph animate__animated animate__backInLeft">
        I completed a Learnership for Grassroots (NPO) employed via The Western
        Cape Government (Social Development) for two years.
      </p>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component">
      <div class="timeline__date animate__animated animate__backInRight">
        2016
      </div>
    </div>
    <div class="timeline__component">
      <div
        class="timeline__date timeline__date--right animate__animated animate__backInLeft"
      >
        2017-2018
      </div>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
    </div>
    <div class="timeline__component timeline__component--bg">
      <h2 class="timeline__title animate__animated animate__backInLeft">
        2017-2018
      </h2>
      <p class="timeline__paragraph animate__animated animate__backInLeft">
        The department I worked for (The Department Social Development) moved
        the workload to an (NPO) called CECD (Centre For Early Childhood
        Development) aiding in registering ECD Centres.
      </p>
    </div>
    <div
      class="timeline__component timeline__component--bottom timeline__component--bg"
    >
      <h2 class="timeline__title animate__animated animate__backInLeft">
        2021
      </h2>
      <p class="timeline__paragraph animate__animated animate__backInLeft">
        Enrolled at Lifechoices Academy
      </p>
      <p class="timeline__paragraph"></p>
    </div>
    <div class="timeline__middle">
      <div class="timeline__point"></div>
      <div class="timeline__point timeline__point--bottom"></div>
    </div>
    <div class="timeline__component timeline__component--bottom">
      <div class="timeline__date">September 2021-March 2022</div>
    </div>
  </div>
</template>

<script>
export default {};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@500&family=Festive&family=Lato:ital,wght@0,300;1,400&family=Montserrat+Alternates:wght@300;400&family=Montserrat:ital,wght@1,300&family=Playfair+Display:ital@1&display=swap');
body {
  background: #070707;
}

.timeline {
  margin: 0 auto;
  max-width: 1400px;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
  font-family: "Fira Sans", sans-serif;
  color: #0a0a0a;
  padding: 30px;
  padding-right: 100px;
  padding-left: 5%;
}

.timeline__component {
  margin: 0 20px 20px 20px;
}

.timeline__component--bg {
  padding: 1.5em;
  background: rgba(3, 3, 3, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

/* LEAVE TILL LAST */
.timeline__component--bottom {
  margin-bottom: 0;
}

.timeline__middle {
  position: relative;
  background: #1a1919;
}

.timeline__point {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  background: #5c88da;
  border-radius: 50%;
}

/* LEAVE TILL LAST */
.timeline__point--bottom {
  top: initial;
  bottom: 0;
}

.timeline__date--right {
  text-align: right;
}

.timeline__title {
  margin: 0;
  font-size: 1.15em;
  font-weight: bold;
}

.timeline__paragraph {
  line-height: 1.5;
}
</style>
