<template>
  <div class="grid-container">
   
      <div class="card" style="width: 18rem;">
      <img src="@/assets/img/Manzana_PR.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title">  MANZANA </h5>
        <p class="card-text">
          La manzana nos aporta vitaminas B1 y B6, que evitan el agotamiento mental y refuerzan la memoria.
        </p>
        <button class="btn btn-danger" id="btnP1" >Comprar</button>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img src="@/assets/img/Banano_PR.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title"> BANANO </h5>
        <p class="card-text">
          Las bananas son alimentos ricos en fibra que si bien pueden ayudarnos a saciar el apetito, reponer energías, prevenir calambres musculares
        </p>
        <button class="btn btn-danger">Comprar</button>
      </div>
    </div>

      <div class="card" style="width: 18rem;">
      <img src="@/assets/img/Fresas_PR.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title"> FRESA </h5>
        <p class="card-text">
          Las fresas son ricas en fibra, antioxidantes, vitaminas y minerales, lo que ayuda a mantener un intestino saludable.
        </p>
        <button class="btn btn-danger">Comprar</button>
      </div>
    </div>

       
  </div>
</template>

<script>
export default {
  mounted(){
    let prod1 = {"nombre": "MANZANA", "precio" : 7000 };
    let prod2 = {"nombre": "BANANO", "precio" : 4000 };
    let prod3 = {"nombre": "FRESA", "precio" : 3000 };

    let prod4 = {"nombre": "ROSA", "precio" : 2000 };
    let prod5 = {"nombre": "GIRASOL", "precio" : 2500 };
    let prod6 = {"nombre": "TRIGO", "precio" : 1000 };

    let prod7 = {"nombre": "PERRO", "precio" : 700000 };
    let prod8 = {"nombre": "POLLO", "precio" : 3000};
    let prod9 = {"nombre": "CERDO", "precio" : 90000 };

    let prod10 = {"nombre": "FERTILIZANTE", "precio" : 25000 };
    let prod11 = {"nombre": "KIT HERRAMIENTAS", "precio" : 210000 };
    let prod12 = {"nombre": "MACETA", "precio" : 50000 };

    this.productos =[ prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12];
    },
    data(){
      return{
        productos:[],
        titulo:"Carrito de Compra",
        compra:{},
        }
    },
  name: 'Home',
  components: {
  }
}

</script>

<style>


.grid-container {
    display: grid;
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
