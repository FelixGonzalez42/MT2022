<template>
  <div class="grid-container">
    <div class="prueba"> </div>
    <div class="divlog">
      <form>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Nombres</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Nunca compartiremos su correo electrónico con nadie más.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"> Confirmar la Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Recordar Usuario</label
          >
        </div>
        <button type="submit" class="btn btn-danger"><router-link to="/">Enviar</router-link> </button>
      </form>
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
  align-content: center;
  justify-content: center;
}

.prueba{
  visibility:hidden
}

.divlog {
 padding: 60px;
}

a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

</style>
