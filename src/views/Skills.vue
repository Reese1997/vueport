<template>
<h3>Skills:</h3>

  <div class="container animate__animated animate__fadeInRight">
    <div class="skills">
      <li>
        <h3>
          <i class="fab fa-html5" style="font-size: 70px; color: #a2c8ec"></i>
          HTML
        </h3>

        <span class="bar"><span class="html"></span></span>
        <!-- skill bar 1 -->
      </li>

      <li>
        <h3>
          <i
            class="fab fa-css3-alt"
            style="font-size: 70px; color: #a2c8ec"
          ></i>
          CSS
        </h3>
        <span class="bar"><span class="css"></span></span
        ><!-- skill bar 2 -->
      </li>

      <li>
        <h3>
          <i class="fab fa-js" style="font-size: 70px; color: #a2c8ec"></i>
          JAVASCRIPT
        </h3>
        <span class="bar"><span class="javascript"></span></span
        ><!-- skill bar 3 -->
      </li>

      <li>
        <h3>
          <i class="fab fa-vuejs" style="font-size: 70px; color: #a2c8ec"></i>
          VUEJS
        </h3>
        <span class="bar"><span class="vuejs"></span></span
        ><!-- skill bar 4 -->
      </li>

      <li>
        <h3>
          <i class="fab fa-node" style="font-size: 70px; color: #a2c8ec"></i>
          NODEJS
        </h3>
        <span class="bar"><span class="nodejs"></span></span
        ><!-- skill bar 4 -->
      </li>

      <li>
        <h3>
          <i class="fab fa-vuejs" style="font-size: 70px; color: #a2c8ec"></i>
          EXPRESSJS
        </h3>
        <span class="bar"><span class="expressjs"></span></span
        ><!-- skill bar 4 -->
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: white;
}

h1 {
  /*change font family of heading*/
  font-family: sans-serif;
  padding-bottom: 20px;
  color: #040505;
  
}

li {
  /*style the li tag*/
  /* border-style: groove; */

  list-style-type: none;
  font-family: sans-serif;
}

.skills {
  /*style the text*/
  width: 1170px;
  margin: 60px auto;
  color: rgb(10, 10, 10);
}

.skills li {
  /*set margin of li*/
  margin: 20px 0;
}

.bar {
  /*style the bar*/
  /* background-color: #b2cddd; */
  display: block;
  height: 2px;
  border: 8px solid rgba(82, 80, 80, 0.3);
  border-radius: 3px;
  box-shadow: 0 0 10px #1e91fdb3;
}

.bar span {
  /*style the span tag*/
  height: 3px;
  float: left;
  background-color: #1c62a3;
}

.html {
  /*set skills and animation of html*/
  width: 100%;
  animation: html 2s;
}

.css {
  /*set skills and animation of css*/
  width: 90%;
  animation: css 2s;
}

.javascript {
  /*set skills and animation of javascript*/
  width: 80%;
  animation: javascript 2s;
}

.vuejs {
  width: 90%;
  animation: vuejs 2s;
}

.nodejs {
  width: 90%;
  animation: nodejs 2s;
}

.expressjs {
  width: 100%;
  animation: expressjs 2s;
}

/* ICONS STYLING */
/* .fab fa-html5 {
  color: aqua;
} */

@keyframes html {
  /*animate html skills*/
  0% {
    width: 0%;
  }

  100% {
    width: 80%;
  }
}

@keyframes css {
  /*animate css skills*/
  0% {
    width: 0%;
  }

  100% {
    width: 93%;
  }
}

@keyframes javascript {
  /*animate javascript skills*/
  0% {
    width: 0%;
  }

  100% {
    width: 50%;
  }
}

@keyframes javascript {
  0% {
    width: 0%;
  }

  100% {
    width: 30%;
  }
}

@keyframes vuejs {
  0% {
    width: 0%;
  }

  100% {
    width: 30%;
  }
}

@keyframes nodejs {
  0% {
    width: 0%;
  }

  100% {
    width: 30%;
  }
}

@keyframes express {
  0% {
    width: 0%;
  }

  100% {
    width: 30%;
  }
}
</style>
