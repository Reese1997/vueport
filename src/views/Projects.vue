<template>
<div class="proj">
  <MDBCard class="mb-3">
    <MDBCardImg top src=".//sc.png" alt="..."/>
    <MDBCardBody>
      <MDBCardTitle></MDBCardTitle>
      <MDBCardText>
        First cards.
      </MDBCardText>HTML, CSS.
      <MDBCardText>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <p>GitHub link: </p>
    <p>Netlify link: </p>


   <MDBCard class="mb-3">
    <MDBCardImg top src="" alt="..."/>
    <MDBCardBody>
      <MDBCardTitle></MDBCardTitle>
      <MDBCardText>
         JavaScript.
      </MDBCardText>
      <MDBCardText>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
<p>GitHub link: </p>
    <p>Netlify link: </p>
   <MDBCard class="mb-3">
    <MDBCardImg top src="" alt="..."/>
    <MDBCardBody>
      <MDBCardTitle></MDBCardTitle>
      <MDBCardText>
        This is a wider card with supporting text below as a natural lead-in to additional
        content. This content is a little bit longer.
      </MDBCardText>
      <MDBCardText>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>

   <MDBCard class="mb-3">
    <MDBCardImg top src="" alt="..."/>
    <MDBCardBody>
      <MDBCardTitle></MDBCardTitle>
      <MDBCardText>
        This is a wider card with supporting text below as a natural lead-in to additional
        content. This content is a little bit longer.
      </MDBCardText>
      <MDBCardText>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  </div>
      <p>GitHub link: </p>
    <p>Netlify link: </p>
</template>

<script>
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardImg, MDBBtn } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBCardHeader,
      MDBCardImg,
      MDBBtn
    }
  };
</script>
  

<style>
.proj {
    max-height: 100vh;
    width: 70%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>
