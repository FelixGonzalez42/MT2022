<template>
<div class="grid-container"> 
  <img src="@/assets/img/home.png" alt="" class="img"/>
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

.img{
width: 100%;
}

</style>