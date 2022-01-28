<template>
<div class="skills">
  <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>Web Design/Development</MDBCardTitle>
      <MDBCardText>
        Beauty and functionality.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
   <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>Strategic Planning</MDBCardTitle>
      <MDBCardText>
        Thinking beyond tomorrow.
      </MDBCardText>
    </MDBCardBody>
     <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>Branding and Identity</MDBCardTitle>
      <MDBCardText>
        Leaving a lasting impression.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  </MDBCard>
  <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>Responsive Design</MDBCardTitle>
      <MDBCardText>
        Converting users to customers.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  </div>

<div class="skil">

   <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>HTML, CSS, JavaScript</MDBCardTitle>
    </MDBCardBody>
  </MDBCard>
   <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>VueJS</MDBCardTitle>
    </MDBCardBody>
  </MDBCard>
   <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>NodeJS</MDBCardTitle>
    </MDBCardBody>
  </MDBCard>
   <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>ExpressJS</MDBCardTitle>
    </MDBCardBody>
  </MDBCard>
   <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>GitHub</MDBCardTitle>
    </MDBCardBody>
  </MDBCard>
   <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>BootStrap</MDBCardTitle>
    </MDBCardBody>
  </MDBCard>
  </div>

</template>



<script>
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBCardImg,
      MDBBtn
    }
  };
</script>

<style>
.skills {
  width: 50%;
  font-size: 30px;
  padding: 50px;
  
}
.skil {
  width: 50%;
  font-size: 60px;
    padding: 50px;

}
</style>