<template>
  <div class="grid-container">
   
    <div> <b>Producto</b>  
    <BR></BR> Fresa  
    <BR></BR> Manzaba 
    <BR></BR> Pollito 
    <BR></BR> Rosa 
    <BR></BR> Perrito 
    </div>
    <div> <b>Precio</b> </div>
    <div> <b>Cantidad</b> </div>
    <div> <b>Total </b> </div>
    <div> <b>Resumen de compra</b> </div>
       
  </div>
</template>

<script></script>

<style>


.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
