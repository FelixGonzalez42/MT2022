<template>
<header> <h1> {{titulo}} </h1> </header>

<main>    
<p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vero tenetur vel praesentium incidunt expedita voluptates, veniam perspiciatis eos laudantium earum quas, nisi ea reprehenderit? Nesciunt quas ab quisquam at!</p>
</main>

</template>

<script>

export default {
  mounted(){
    let prod1 = {"nombre": " ", "precio" : 20000 };
    let prod2 = {"nombre": " ", "precio" : 20000 };
    let prod3 = {"nombre": " ", "precio" : 20000 };

    let prod4 = {"nombre": " ", "precio" : 20000 };
    let prod5 = {"nombre": " ", "precio" : 20000 };
    let prod6 = {"nombre": " ", "precio" : 20000 };

    let prod7 = {"nombre": " ", "precio" : 20000 };
    let prod8 = {"nombre": " ", "precio" : 20000 };
    let prod9 = {"nombre": " ", "precio" : 20000 };

    let prod10 = {"nombre": " ", "precio" : 20000 };
    let prod11 = {"nombre": " ", "precio" : 20000 };
    let prod12 = {"nombre": " ", "precio" : 20000 };

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
