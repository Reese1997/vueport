<template>
  <div class="row">
    <div class="col-xl-6 col-md-6 col-sm-12">
      <header class="masthead">
        <p class="masthead-intro">Hello, I'm</p>
        <h1 class="masthead-heading animate__animated animate__fadeInLeft">
          Reese!
        </h1>
        <section
          class="introduction-section animate__animated animate__fadeInLeft"
        >
          <h1>| Introduction</h1>
          <p>
            Hi, I'm Reese Simone Abrahams. I specialise as Full-Stack Developer.
            Along with functionality, I construct and transform code into
            beautiful Applications. My skills range from a wide variety of
            coding niches, from databases to graphic design and UI/UX
            management, and I do my job pretty well.
          </p>
        </section>
      </header>
    </div>
    <div class="col-xl-6 col-md-6 col-sm-12">
      <img src="@/assets/Reese4.jpg" class="reese" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media only screen and (max-width: 900px) {
  .masthead {
    padding: 7em 0;
    padding-left: 28px;
  }
  .masthead-heading {
    font-size: 3em;
  }
}

body {
  /* Typography Declarations */
  color: #030303;
  font-size: 1em;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  background-color: white;
}
.reese {
  padding-left: 80px;
  padding-right: 80px;
  max-width: 800px;
  margin-top: 60px;
  max-height: 700px;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* border-radius: 100%; */
}

/* .content-footer, */
.masthead-heading,
.masthead-intro {
  text-align: center;
  padding: 1px;
  margin-top: -140px;
}

.masthead {
  padding: 20em 0;
  background-image: url("https://unsplash.com/photos/RYyr-k3Ysqg");
  background-repeat: no-repeat;
  background-size: cover;
  border-top: solid 1em rgb(15, 112, 202);
  padding-left: 330px;
}

.masthead-intro {
  /* Layout Declarations */
  margin-bottom: 0.3em;
  /* Typography Declarations */
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 2em;
  color: #585450;
  padding: 1px;
}

.masthead-heading {
  /* Layout Declarations */
  margin-top: -0.3em;
  /* Typography Declarations */
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  font-family: "Arima Madurai", cursive;
  font-family: "Lato", sans-serif;
  font-family: "Montserrat", sans-serif;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 6em;
  letter-spacing: -0.02em;
  /* text-transform: uppercase; */
  color: black;
  text-shadow: 0.02em 0.03em #dee3e9;
}

.introduction-section,
.location-section,
.questions-section {
  max-width: 38em;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2em;
}

.social > li {
  display: inline-block;
}

.introduction-section h1,
.location-section h1,
.questions-section h1 {
  /* Typography Declarations */
  font-size: 2em;
  letter-spacing: 0.05em;
  color: #0096c7;
  font-weight: 900;
}
.introduction-section p,
.location-section p,
.questions-section p {
  /* Typography Declarations */
  font-size: 1.2em;
  letter-spacing: 0.05em;
}

section > h1 {
  margin-top: 2em;
}

a {
  text-decoration: none;
  color: white;
  padding: 0.5em;
}
</style>
