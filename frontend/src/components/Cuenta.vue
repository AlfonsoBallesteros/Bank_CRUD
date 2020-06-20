<template>
<div>
    <div class="row">
            <div class="col-md-7">
                <img  id="img" src="../assets/images/about_2.jpg" style="text-align: center;"/>
            </div>
            <div class="col-md-5">
                <br>
                <h2>HABLEMOS DE DINERO:</h2>
                <div>
                    <div class="alert alert-info">
                        <a class="button-text">
                        <b-button v-b-modal.modal-multi-1>Consignar Dinero</b-button>
                        <strong>&nbsp; Envía</strong> dinero a otra cuenta</a>
                        <b-modal id="modal-multi-1" size="lg" title="Transferir Dinero" ok-only no-stacking>
                            <fieldset>
                                <!-- Text input-->
                                <div class="form-group">
                                <label class="col-md-4 control-label" for="Amount">Monto</label>  
                                <div class="col-md-8">
                                <input id="Amount" name="Amount" type="text" placeholder="$0.000" class="form-control input-md" required="">  
                                </div>
                                </div>
                                </fieldset>
                            <b-button v-b-modal.modal-multi-2>Enviar código de verificación</b-button>
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
                <div class="alert alert-warning">
                        <a class="button-text">
                        <b-button v-b-modal.modal-multi-1>Retirar Dinero</b-button>
                        <strong>&nbsp; Retirar</strong> dinero a sólo un click</a>
                        <b-modal id="modal-multi-1" size="lg" title="Transferir Dinero" ok-only no-stacking>
                            <fieldset>
                                <!-- Text input-->
                                <div class="form-group">
                                <label class="col-md-4 control-label" for="Amount">Monto</label>  
                                <div class="col-md-8">
                                <input id="Amount" name="Amount" type="text" placeholder="$0.000" class="form-control input-md" required="">  
                                </div>
                                </div>
                                </fieldset>
                            <b-button v-b-modal.modal-multi-2>Enviar código de verificación</b-button>
                        </b-modal>

                        <b-modal id="modal-multi-2" title="Second Modal" ok-only>
                            <p class="my-2">Second Modal</p>
                            <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
                        </b-modal>

                        <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
                            <p class="my-1">Third Modal</p>
                        </b-modal>
                        
                    </div>

                <div class="alert alert-danger button-text">
                    <a href="#" class=" btn btn-xs btn-danger pull-right">Pagar Facturas</a>
                    <strong>&nbsp; Cancela</strong> tus Facturas inmediatamente!
                </div>
                <div><br><br><br><br>
                     <h2 style="padding-top: 50px">SALDO DISPONIBLE:</h2>
                     <h5 id="saldo">Dinero móvil:<strong> $355.000 </strong></h5>
                </div>

           </div>
    </div>  
</div>
</template>
<style scoped>
.button-text{
    color: black !important;
}
h5{
    text-align: right;
}
#saldo{
     padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 10px 10px 14px 2px rgba(0,0,0,0.47);
    -moz-box-shadow: 10px 10px 14px 2px rgba(0,0,0,0.47);
    box-shadow: 10px 10px 14px 2px rgba(0,0,0,0.47);
}
div{
 width: 100%;
}
h2{
text-align: center;
}
  #img{
      display: block;
      margin: auto;
      height: 92vh;
      width: 100%;
  }
  .alert{
      margin-top: 20px;
      margin-right: 20px;
  }

</style>