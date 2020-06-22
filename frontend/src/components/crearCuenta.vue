<template>
    <div>
    <div class="jumbotron" style="margin-bottom: 1rem;">
  <div class="container">
    <h1 class="display-3"><strong>Bienvenido!</strong></h1>
    <h5>Al ontener una tarjeta puedes comprar lo que quieras al instante, obtienes mayores beneficios y disfrutas de momentos inolvidables.
      Pensada para que empieces a construir tu historial credicticio sin grandes deudas.
    </h5>
    <!-- Button trigger modal -->
  <div>
   <div class="alert">
      <a class="button-text">
      <b-button v-b-modal.modal-multi-1>Crear Cuenta</b-button></a>
      <b-modal id="modal-multi-1" size="lg" title="Crear cuenta" cerrar-only no-stacking>
          <fieldset>
              <!-- Text input-->
          <div class="form-group" >
          <label class="col-md-6 control-label" for="tipo_tarjeta">Seleccione Tipo de cuenta</label>
          <div class="col-md-8">
            <select id="tipo_tarjeta" name="tipo_tarjeta" class="form-control"  v-model="type_account" >
              <option value="VISA">Ahorros</option>
              <option value="MASTER CARD">Corriente</option>
              <option value="AMERICAN EXPRESS">Crédito</option>
            </select>
          </div>
        </div>
       </fieldset>
        <button @click="crearCuenta()" class="btn btn-info">Añadir Cuenta</button>   
      </b-modal>
  </div>
</div>
 </div>
 </div>
 <div>
    <div class="row  col-md-12" style="margin-bottom: 1rem;">
       <div v-for="(cuenta, index) in Cuentas" :key="index" class=" col-md-4 card border-info p-3">
        <b-card title="Numero de cuenta:" >
          <b-card-text><strong>{{cuenta.number_account}}</strong></b-card-text>
          <!--{ name:'cuenta', params: {id : cuenta.token} }-->
          <b-button class="button" variant="info"><router-link :to="'/cuenta/' + cuenta.token">Ver Cuenta </router-link> </b-button>
          <b-button @click="eliminarCuenta(cuenta.token)" >Eliminar Cuenta  </b-button>
        </b-card>
      </div>
    </div>
    </div>    
</div>  
</template>

<style scoped>

.row{
 padding-left: 40px;
}
div{
  width: 100%;
}
.button{
  margin-right: 10px;
}
</style>
<script>
import axios from 'axios'
export default {
  data: ()=> ({
    Cuentas: [],
    token: '',
    idCuenta:'',
    type_account:''
  }),
  methods: {
    listarCuentas(){
      this.token = localStorage.getItem('session');
      console.log('Token aqui', this.token);
      axios.get('http://127.0.0.1:4000/api/accounts/', {
        headers: {
          'x-access-token': this.token
          }
      }).then(res => {
        console.log(res.data);
        //this.idCuenta = res.data[0].token;
        //console.log(this.idCuenta);
        this.Cuentas = res.data;
      }).catch(err => {
        console.log(err)
      })
    },
    crearCuenta(){
        this.token = localStorage.getItem('session');
        console.log('Token here', this.token);
        axios.post('http://127.0.0.1:4000/api/accounts/', this.type_account,{
            headers: {
          'x-access-token': this.token
          }
        }).then(res => {
          if(res.status === 200){
            alert(res.request.responseText);
            this.listarCuentas();
          } 
        }).catch(err => {
          console.log(err)
        })  
    },
    eliminarCuenta(cuenta){
      this.token = localStorage.getItem('session');
      console.log('token', this.token);
      axios.delete('http://127.0.0.1:4000/api/accounts/one',{
        headers:{
          'x-access-token': this.token,
          'x-access-account': cuenta
        }
      }).then(res => {
        console.log(res);
        this.listarCuentas();
        //this.$router.push({path:'/movimientos'})
      }).catch(err =>{
        console.log(err)
      });
  }, 
  },
  mounted() {
    this.listarCuentas();
    //this.crearCuenta();
    //this.eliminarCuenta();
  },
}
</script>