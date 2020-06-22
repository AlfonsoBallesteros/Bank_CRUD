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
                    <div class="alert alert-info button-text">
                    <p><strong>Número de cuenta:</strong> {{cuenta.number_account}}</p>
                    <p><strong>Código: </strong> {{cuenta.ccv}}</p>
                    <p><strong>Fecha de vencimiento: </strong> {{month}}/{{year}}</p>
                   
                    <strong v-if="cuenta.state">&nbsp; DISPONIBLE</strong>
                    <strong v-if="!cuenta.state">&nbsp; Bloqueada</strong>
                </div>
                    <div class="alert alert-secondary">
                        <a class="button-text">
                        <b-button v-b-modal.modal-multi-a variant="info">Consignar Dinero</b-button>
                        <strong>&nbsp; Enviar</strong> dinero a otras cuentas</a>
                        <b-modal id="modal-multi-a" size="lg" title="Transferir Dinero" ok-only no-stacking>
                            <fieldset>
                                <!-- Text input-->
                                <div class="form-group">
                                <label class="col-md-4 control-label" for="Amount"><strong>Ingrese el Monto</strong></label>  
                                <div class="col-md-8">
                                <input v-model="saldo" id="Amount" name="Amount" type="number" placeholder="$0.000" class="form-control input-md" required="">  
                                </div>
                                </div>
                                </fieldset>
                            <b-button v-b-modal.modal-multi-b  @click="consignarSaldo()" >Enviar código de verificación</b-button>
                        </b-modal>

                        <b-modal id="modal-multi-b" title="Código de Verificación">
                            <h4 v-if="Transferencia == 'Transferencia realizada'"  class="circulo">1205407</h4>
                            <p v-if="Transferencia == 'Saldo muy alto'" class="my-2">{{Transferencia}}</p>
                            <b-button v-b-modal.modal-multi-c >Aplicar</b-button>
                        </b-modal>

                        <b-modal id="modal-multi-c" size="sm" title="Exitoso!" ok-only>
                            <p class="my-1">{{Transferencia}}</p>
                        </b-modal>
                        
                    </div>
                </div>
                <div class="alert alert-secondary">
                        <a class="button-text">
                        <b-button v-b-modal.modal-multi-1 variant="info">Retirar Dinero</b-button>
                        <strong>&nbsp; Retirar</strong> dinero a sólo un click</a>
                        <b-modal id="modal-multi-1" size="lg" title="Transferir Dinero" ok-only no-stacking>
                            <fieldset>
                                <!-- Text input-->
                                <div class="form-group">
                                <label class="col-md-4 control-label" for="Amount">Monto</label>  
                                <div class="col-md-8">
                                <input v-model="saldo" id="Amount" name="Amount" type="number" placeholder="$0.000" class="form-control input-md" required="">  
                                </div>
                                </div>
                                </fieldset>
                            <b-button v-b-modal.modal-multi-2 @click="retirarSaldo()" >Enviar código de verificación</b-button>
                        </b-modal>

                        <b-modal id="modal-multi-2" title="Código de Verificación" ok-only>
                            <h3 v-if="Transferencia == 'Transferencia realizada'" class="circulo">1205407</h3>
                            <h5 v-if="Transferencia == 'Saldo insuficiente'" class="my-2">{{Transferencia}}</h5>
                        </b-modal>
                    </div>

                <div>
                     <h2 style="padding-top: 50px">SALDO DISPONIBLE:</h2>
                     <h5 id="saldo">Dinero móvil:<strong> {{cuenta.saldo}} </strong></h5>
                </div>

           </div>
    </div>  
</div>
</template>
<style scoped>
.btn1{
    margin-left: 70%;
}
.circulo{
    background-color: cadetblue;
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
    text-align: center;
    color: white;
  margin:0px auto;
  padding:3%
  }

.circulo > h2 {
	font-family: sans-serif;
	color: white;
	font-size: 1.4rem;
	font-weight: bold;
}
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
<script>
import axios from 'axios'
export default {
    data:() =>({
        verificar: true,
        idCuenta: '',
        token: '',
        saldoCuenta: 0,
        saldo: 0,
        Transferencia: '',
        cuenta: [],
        month: '',
        year: ''
    }),
    methods: {
        getCuenta(){
            this.token = localStorage.getItem('session')
            axios.get('http://127.0.0.1:4000/api/accounts/one',{
                headers:{
                    'x-access-token': this.token,
                    'x-access-account': this.idCuenta
                }
            }).then( res => {
                this.cuenta = res.data;
                this.month = res.data.date_due.month;
                this.year = res.data.date_due.year
                console.log(res.data);
            }).catch( err => {
                console.log(err);
            })
        },
        consignarSaldo(){
            if(parseInt(this.saldo) < 10000000000){
                this.saldoCuenta = (parseInt(this.cuenta.saldo) + parseInt(this.saldo))
           
                axios.put('http://127.0.0.1:4000/api/accounts/one', {
                    saldo: this.saldoCuenta
                } ,{
                    headers:{
                        'x-access-token': this.token,
                        'x-access-account': this.idCuenta
                    }
                }).then( res => {
                    console.log(res);
                    this.Transferencia = res.data
                    this.getCuenta();
                    console.log(this.Transferencia);
                    console.log(this.saldoCuenta)
                }).catch(err =>{
                    console.log(err);
                });
            }else{
                this.Transferencia = 'Saldo muy alto'
            }
        },
        retirarSaldo(){
            this.saldoCuenta = (parseInt(this.cuenta.saldo) - parseInt(this.saldo))
            if(parseInt(this.saldoCuenta)>0){
                
                axios.put('http://127.0.0.1:4000/api/accounts/one', {
                    saldo: this.saldoCuenta
                },{
                    headers:{
                        'x-access-token': this.token,
                        'x-access-account': this.idCuenta
                    }
                }).then( res => {
                    console.log(res);
                    this.Transferencia = res.data
                    this.getCuenta();
                    console.log(this.Transferencia);
                }).catch(err =>{
                    console.log(err);
                })
            }else{
                this.Transferencia = 'Saldo insuficiente'
            }
        },
    },

    mounted() {
        this.idCuenta = this.$route.params.id;
        console.log(this.idCuenta);
        this.getCuenta();
    },
}
</script>