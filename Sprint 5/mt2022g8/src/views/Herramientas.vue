<template>
  <div class="grid-container">
   
      <div class="card" style="width: 18rem;">
      <img src="@/assets/img/Fertilidad_Categoria.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title">FERTILIZANTE</h5>
        <p class="card-text">
          Fertilizante, una sustancia orgánica o inorgánica que contiene nutrientes en formas asimilables por las plantas.
        </p>
        <button class="btn btn-danger">Comprar</button>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img src="@/assets/img/img1.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title">KIT HERRAMIENTAS</h5>
        <p class="card-text">
          Kit de herramientas ideal para la granja, este kit incluye; pala, pica, rastrillo, Segadora, Machete, Zapapicos.
        </p>
        <button class="btn btn-danger">Comprar</button>
      </div>
    </div>

      <div class="card" style="width: 18rem;">
      <img src="@/assets/img/Macetas_Categoria.jpg" alt="" srcset="" />
      <div class="card-body">
        <h5 class="card-title">MACETA</h5>
        <p class="card-text">
          La Maceta es un recipiente contenedor, normalmente en forma de cono truncado con un agujero en el fondo para el drenaje.
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
