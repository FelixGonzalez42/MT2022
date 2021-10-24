<template>
  <div id="nav">

    <div class="grid-container1">
      <div class="divlogo">
        <img src="@/assets/img/Logo_Kampo.png" alt="" class="logo" />
      </div>
      <div>
      <div>
        <button type="button" class="btn btn-danger btnmenu">
          <router-link to="/">Home</router-link>
        </button>

        <button type="button" class="btn btn-danger btnmenu">
          <router-link to="/login">Login</router-link>
        </button>

        <button type="button" class="btn btn-danger btnmenu">
          <router-link to="/register">Register</router-link>
        </button>

        <button type="button" class="btn btn-danger btnmenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            ></path>
          </svg>
          <router-link to="/Compras">  Compras</router-link>
        </button>

        <button type="button" class="btn btn-danger btnmenu">
          <router-link to="/About">About</router-link>
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-danger btnmenu">
          <router-link to="/alimentos">Alimentos</router-link>
        </button>

        <button type="button" class="btn btn-danger btnmenu">
          <router-link to="/Plantas">Plantas</router-link>
        </button>

        <button type="button" class="btn btn-danger btnmenu">
          <router-link to="/Animales">Animales</router-link>
        </button>

        <button type="button" class="btn btn-danger btnmenu">
          <router-link to="/Herramientas">Herramientas</router-link>
        </button>
      </div>
      </div>

    </div>
    
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #e6f4a2;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.btnmenu {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  width: 120px;
}
.grid-container1 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1px;
    padding: 5px;    
}


</style>
