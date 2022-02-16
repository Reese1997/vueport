<template>
  <form class="form" action="https://formspree.io/f/mwkazvyq" method="POST">
    <h1>Get in touch:</h1>
    <br /><br />
    <input type="First name" placeholder="First Name" /><br /><br />
    <input type="Last name" placeholder="Last Name" /><br /><br />
    <input type="E-mail" placeholder="E-mail" /><br /><br />
    <input type="Tel" placeholder="Tel" /><br /><br />

    <textarea class="mess" name="message"></textarea><br /><br />

    <!-- your other form fields go here -->
    <button class="but" type="submit ">Send</button>
    <!-- <button class="but2" type="Reset">Reset</button> -->
  </form>
  <Footer />
</template>

<script>
import Footer from "../views/Footer.vue";
export default {
  components: { Footer },
  data() {
    return {
      email: "",
      name: "",
      role: "",
      terms: false,
    };
  },
  handleSubmit() {
    //validate pwd
    this.passwordError =
      this.password.length > 5
        ? ""
        : "Password must be at least 6 characters long.";
    if (!this.password) {
      console.log("email: ", this.email);
      console.log("name: ", this.name);
      console.log("role: ", this.role);
      console.log("terms accepted: ", this.terms);
    }
  },
};
</script>

<style>
form {
  max-width: 1170px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 50px;
  border-radius: 10px;
  border-style: ridge;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
label {
  color: rgb(58, 55, 55);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1 em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(77, 135, 202);
  color: #555;
}

.pill {
  display: inline block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}
button {
  background: rgb(15, 112, 202);
  /* border: ; */
  padding: 20px 30px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: bold;
}

.mess {
  width: 100%;
}

.but {
  margin-left: 46%;
  padding: 15px 29px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
