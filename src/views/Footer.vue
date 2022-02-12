<template>
  <MDBFooter :text="['center', 'black']">
    <!-- Grid container -->
    <MDBContainer class="p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        
      
      </section>
      <!-- Section: Social media -->
    </MDBContainer>
    <!-- Grid container -->
    <!-- Copyright -->
    <div
      class="text-center p-3"
      style="background-color: rgb(205, 223, 240)"
    >
      © 2022 Copyright: Reese Abrahams
      <a class="text-white" href="https://mdbootstrap.com/"
        ></a
      >
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>


<script>
  import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBBtn
    },
  };
</script>


<style>

</style>