<template>
    <div>
    <div class="jumbotron" style="margin-bottom: 0rem;">
  <div class="container">
    <h1 class="display-3">Bienvenido!</h1>
    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
    <!-- Button trigger modal -->
  <div>
   <div class="alert alert-info">
      <a class="button-text">
      <b-button v-b-modal.modal-multi-1>Crear Cuenta</b-button></a>
      <b-modal id="modal-multi-1" size="lg" title="Crear cuenta" ok-only no-stacking>
          <fieldset>
              <!-- Text input-->
          <div class="form-group">
          <label class="col-md-6 control-label" for="tipo_tarjeta">Seleccione Tipo de cuenta</label>
          <div class="col-md-8">
            <select id="tipo_tarjeta" name="tipo_tarjeta" class="form-control">
              <option value="VISA">Ahorros</option>
              <option value="MASTER CARD">Corriente</option>
              <option value="AMERICAN EXPRESS">Crédito</option>
            </select>
          </div>
        </div>
       </fieldset>
      </b-modal>
      <b-modal id="modal-multi-2" title="Second Modal" ok-only>
          <p class="my-2">Second Modal</p>
          <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
      </b-modal>

      <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
          <p class="my-1">Third Modal</p>
      </b-modal>
      
  </div>
</div>
 </div>
 </div>
    <div class="row">
      <div class="col-md-4">
        <b-card title="Numero de cuenta:" >
          <b-card-text><strong>147852963</strong></b-card-text>
          <b-button class="button" variant="info"><router-link to="/cuenta">Ver Cuenta </router-link> </b-button>
          <b-button ><router-link to="/">Eliminar Cuenta </router-link> </b-button>
        </b-card>
      </div>
       <div class="col-md-4">
        <b-card title="Numero de cuenta:" >
          <b-card-text><strong>147852963</strong></b-card-text>
          <b-button class="button" variant="info"><router-link to="/cuenta">Ver Cuenta </router-link> </b-button>
          <b-button ><router-link to="/">Eliminar Cuenta </router-link> </b-button>
        </b-card>
      </div>
       <div class="col-md-4">
        <b-card title="Numero de cuenta:" >
          <b-card-text><strong>147852963</strong></b-card-text>
          <b-button class="button" variant="info"><router-link to="/">Ver Cuenta </router-link> </b-button>
          <b-button ><router-link to="/">Eliminar Cuenta </router-link> </b-button>
        </b-card>
      </div>
    </div>
    </div>      
</template>

<style scoped>
div{
  width: 100%;
}
.button{
  margin-right: 10px;
}
</style>