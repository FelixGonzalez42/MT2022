<template>
  <div class="grid-container">
    <div class="prueba"> </div>
    <div class="divlog">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
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
          <label for="exampleInputPassword1" class="form-label">Password</label>
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

<script></script>

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
</style>
