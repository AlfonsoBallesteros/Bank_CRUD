<template>
    <div>
    <div class="jumbotron" style="margin-bottom: 0rem;">
  <div class="container">
    <h1 class="display-3">Bienvenido!</h1>
    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
    <!-- Button trigger modal -->
      <div>
        <b-button v-b-modal.modal-1  style="background-color: #00A897">Enviar Dinero</b-button> 
        <b-modal id="modal-1" title="Datos de Destinatario">
          <form class="form-horizontal">
    <fieldset>

    <!-- Text input-->

    <div class="form-group">
      <label class="col-md-6 control-label" for="CardHolderID">Cedula Ciudadana</label>  
      <div class="col-md-8">
      <input id="CardHolderID" name="CardHolderID" type="text" placeholder="Ingrese Numero de Cedula" class="form-control input-md" required="">
    
      </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
      <label class="col-md-6 control-label" for="CardHolder">Nombre Completo</label>  
      <div class="col-md-8">
      <input id="CardHolder" name="CardHolder" type="text" placeholder="Nombres Apellidos" class="form-control input-md" required="">
      </div>
    </div>

    <!-- Select Basic -->
    <div class="form-group">
      <label class="col-md-6 control-label" for="tipo_tarjeta">Seleccione Tipo de Tarjeta</label>
      <div class="col-md-8">
        <select id="tipo_tarjeta" name="tipo_tarjeta" class="form-control">
          <option value="VISA">VISA</option>
          <option value="MASTER CARD">MASTER CARD</option>
          <option value="AMERICAN EXPRESS">AMERICAN EXPRESS</option>
        </select>
      </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
      <label class="col-md-6 control-label" for="CardNumber">Número de Cuenta</label>  
      <div class="col-md-8">
      <input id="CardNumber" name="CardNumber" type="text" placeholder="Ingrese Numero de Cuenta" class="form-control input-md" required="">
      
      </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
      <label class="col-md-4 control-label" for="Amount">Monto</label>  
      <div class="col-md-8">
      <input id="Amount" name="Amount" type="text" placeholder="$0.000" class="form-control input-md" required="">  
      </div>
    </div>
    </fieldset>
    </form>
      </b-modal>
</div>
  </div>
 </div>
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#ID</th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripción</th>
            <th scope="col">Valor</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">120501</th>
            <td>24-04-20</td>
            <td>Retiro Cajero</td>
            <td>$250.000</td>
            </tr>
            <tr>
            <th scope="row">120501</th>
            <td>05-05-20</td>
            <td>Transferencia</td>
            <td>$25.000</td>
            </tr>
            <tr>
            <th scope="row">120502</th>
            <td>20-05-20</td>
            <td>Retiro corresponsal bancario</td>
            <td>$150.000</td>
            </tr>
            <tr>
            <th scope="row">120503</th>
            <td>04-06-20</td>
            <td>Transferencia</td>
            <td>$45.000</td>
            </tr>
            <tr>
            <th scope="row">120504</th>
            <td>11-06-20</td>
            <td>Pago Movistar</td>
            <td>$35.000</td>
            </tr>
        </tbody>
        </table>

    </div>      
</template>