<template>
  <div class="grid-container">
   
      <div class="card" style="width: 18rem;">
      <img src="@/assets/img/rosa.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button class="btn btn-danger">Comprar</button>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img src="@/assets/img/girasol.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button class="btn btn-danger">Comprar</button>
      </div>
    </div>

      <div class="card" style="width: 18rem;">
      <img src="@/assets/img/trigo.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button class="btn btn-danger">Comprar</button>
      </div>
    </div>

       
  </div>
</template>

<script></script>

<style>


.grid-container {
    display: grid;
    justify-content: space-around;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
    background-color: #21f3ad;
    padding: 5px;
  
    
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid black;
    text-align: center;
    font-size: 20px;
    margin: 10px;
}


</style>
