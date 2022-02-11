<template>
  <div class="row">
    <div class="col-xl-6 col-md-6 col-sm-12">
      <header class="masthead">
        <p class="masthead-intro">Hello, I'm</p>
        <h1 class="masthead-heading animate__animated animate__fadeInLeft">
          Reese!
        </h1>
      </header>
    </div>
    <div class="col-xl-6 col-md-6 col-sm-12">
      <img src="@/assets/Reese4.jpg" class="reese"  />
    </div>
  </div>

  <section class="introduction-section">
    <h1>| Introduction</h1>
    <p>
      I am attending a coding bootcamp course at Lifechoices Academy. I
      specialise in both User Interface/User Experience. I bring design and
      functionality and transform Applications. My skills range from a wide
      variety of coding niches, from databases to graphic design and UI/UX
      management, and I do my job pretty well.
    </p>
  </section>
  <section class="location-section">
    <h1>| Where I'm From</h1>
    <p>
      I was born in Cape Town and while I suffer from a serious case of
      Wanderlust from time-to-time, I truly cannot imagine living somewhere
      else. I love to be outdoors as much as possible hiking, camping and
      soaking up the sunshine (which isn't nearly as rare as some like to
      believe!)
    </p>
  </section>
  <section class="questions-section">
    <h1>| More About Me</h1>
    <h2>What are your favorite hobbies?</h2>
    <p>
      When I'm not coding, I love to be outdoors, I also am a big fan of staying
      in as well! I am a movie and TV junkie and can most Friday nights be
      found, binge watching whatever show or movie is new to Netflix. I also
      very much enjoy spending time with my friends and family. From wine/beer
      tasting, or simply grabbing dinner at my favorite restaurant, I truly
      believe that time with loved ones is time well spent.
    </p>
    <h2>What's your dream job?</h2>
    <p>
      My dream job would be a Creative Director or Senior Developer of a tech
      company. I have always find Development fascinating (and intriguing) and I
      think that my marketing, project management skills and design background
      would make me highly successful (and fulfilled) in this career.
    </p>
    <h2>What's your background?</h2>
    <p>
      I started my career as an ECD Assistant at the Department of Social
      Development. After a year (while finishing my Learnership) I decided to
      look for a more fulfilling career, and decided to job hunt. After many
      attempts I failed and decided to do more research in the IT Industry and
      found Web Development rather interesting. I then transitioned to an
      Academy called Lifechoices Academy and decided to enrol immediately. I
      decided to pursue a career in web design and development in 2021 after
      growing more interested in internet marketing, technical and software side
      of the business. Where I currently am today.
    </p>
    <h2>Why do you want to learn web development?</h2>
    <p>
      I've always been the "techier" one of my girlfriends and find the internet
      fascinating yet daunting in it's ever-changing ways. I grew up with a
      passion for learning languages and web languages are no exception. I'm
      nervous about not "getting it" but I'm more excited about the challenges
      and possibilities and education in web/software development will give me.
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style>
@media only screen and (max-width: 900px) {
  .masthead {
    padding: 7em 0;
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
  padding-left: 180px;
  padding-right: 80px;
  width: 80%;
  max-height: 700px;
  border-radius: 100%;
}


/* .content-footer, */
.masthead-heading,
.masthead-intro {
  text-align: center;
  padding: 10px;
}

.masthead {
  padding: 14em 0;
  background-image: url("https://unsplash.com/photos/RYyr-k3Ysqg");
  background-repeat: no-repeat;
  background-size: cover;
  border-top: solid 1em #34719b;
}

.masthead-intro {
  /* Layout Declarations */
  margin-bottom: 0.1em;
  /* Typography Declarations */
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 2em;
  color: #585450;
  padding: 5px;
}

.masthead-heading {
  /* Layout Declarations */
  margin-top: -0.2em;
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
  margin-top: 2em;
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
/* .introduction-section > p,
.location-section > p,{
    font-weight: 300;
    letter-spacing: 0.05em;  
} */

.questions-section > h2 {
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 1.5em;
  font-weight: 100;
  /* Layout */
  margin: 1em 0 1em 0;
  color: #0077b6;
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
