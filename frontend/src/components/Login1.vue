<template>
<div class="bg-container " style="width: 100%; position: fixed; height: 100%">
    <div class="container m-l-a">
<div class=" card-register  col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" >
<div role="form"  @submit.prevent="register">
<h2 class="text-center" style="color: black">Regístrate</h2>
<hr class="">
<div class="row">
<div class="form-group col-md-6">
<input v-model="name" type="text" name="name" id="name" class="form-control input-lg" placeholder="Nombre(s)" tabindex="3">
</div>
<div class="form-group col-md-6">
<input v-model="lastname" type="text" name="lastname" id="lastname" class="form-control input-lg" placeholder="Apellidos" tabindex="3">
</div>
</div>
<div class=" row">
<div class="form-group col-md-5" >
<select v-model="type_document" placeholder="Tipo de Documento" class="form-control input-lg">
<option>Cédula ciudadana</option>
<option>Tarjeta Identidad</option>
</select>
</div>
<div class="form-group col-md-7">
<input v-model="document" type="text" name="document" id="document" class="form-control input-lg" placeholder="Documento" tabindex="3">
</div>
</div>
<div class=" row">
<div class="col-md-7">
<input v-model="date_exp_docuement" type="date" name="date_exp_docuement" id="date_exp_docuement" class="form-control input-lg" placeholder="Fecha Expedición: Año/Mes/Día" tabindex="3">
</div>
<div class="form-group col-md-5">
<input v-model="address" type="text" name="address" id="address" class="form-control input-lg" placeholder="Dirección" tabindex="3">
</div>
</div>
<div class=" row">
<div class="col-md-4">
<input v-model="number_phone" type="text" name="number_phone" id="number_phone" class="form-control input-lg" placeholder="Celular" tabindex="3">
</div>
<div class="form-group col-md-8">
<input v-model="date_born" type="date" name="document" id="document" class="form-control input-lg" placeholder="Fecha de Nacimiento: Año/Mes/Día" tabindex="3">
</div>
</div>
<div class="form-group">
<input v-model="email" type="email" name="email" id="email" class="form-control input-lg" placeholder="Email" tabindex="4">
</div>
<div class="row">
<div class="col-xs-12 col-sm-6 col-md-6">
<div class="form-group">
<input  v-model="password" type="password" name="password" id="password" class="form-control input-lg" placeholder="Contraseña" tabindex="5" ref="password">
</div>
</div>
<div class="col-xs-12 col-sm-6 col-md-6">
<div class="form-group">
<input type="password" name="password_confirmation" id="confirme contraseña" class="form-control input-lg" placeholder="Confirmar Contraseña" tabindex="6" data-vv-as="password">
</div>
</div>
</div>
<div class="row">
<div class="col-xs-4 col-sm-3 col-md-3">
<span class="button-checkbox">
<button type="button" class="btn" data-color="info" tabindex="7" style="background-color:gray">I Agree</button>
<input type="checkbox" name="t_and_c" id="t_and_c" class="hidden" value="1">
</span>
</div>
<div class="col-xs-8 col-sm-9 col-md-9 letra" style="color:black"> Haciendo Click <strong class="label label-primary">Aceptar</strong>, 
Estás de acuerdo con <a data-toggle="modal" data-target="#t_and_c_m" style="background-color:gray">Términos y condiciones</a> Establecido por este sitio, incluyendo el uso de Cookies.
</div>
</div>
<hr class="">
<div class="row">
<div class="col-xs-12 col-md-6"><button class=" btn-block btn-lg form-submit" style="color: #17a2b8" @click="register()">registrar</button></div>
<div class="col-xs-12 col-md-6"><button class="btn btn-success btn-block btn-lg" style="background-color: #17a2b8"><router-link to="/login">Ingresar</router-link></button></div>
</div>
</div>
</div>
<!-- Modal -->
<div class="modal fade" id="t_and_c_m" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h4 class="modal-title" id="myModalLabel">Terminos y condiciones</h4>
</div>
<div class="modal-body">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" data-dismiss="modal">Estoy de acuerdo</button>
</div>
</div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</div>
</div>

</template>
<style scoped>
.td{
background-color: gray;
transition: background-color .5s;
}
.td:hover{
background-color: gold !important;
}
/* Credit to bootsnipp.com for the css for the color graph */
.colorgraph {
height: 20px;
border-top: 0;
background: #c4e17f;
border-radius: 5px;
background-image: -webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
background-image: -moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
background-image: -o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
}
.register-fondo{
background:url(https://hdqwalls.com/download/material-design-4k-2048x1152.jpg) fixed;
background-size: cover;
background-repeat: no-repeat;
height: 100%;
font-family: 'Numans', sans-serif;
font-size: large;
}
.card{
height: 100%;
padding-bottom: 3%;
margin-left: 50px !important;
}
.container{
height: 100%;
display: flex;
margin-top: 20px;
margin-left: 30%;
}
h2{
color: white;
}
.letra{
color: white;
}
.btn{
color: white;
}
</style>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            name: "",
            lastname: "",
            type_document: "",
            document: "",
            date_exp_docuement: "",
            address: "",
            number_phone: "",
            date_born: "",
            email: "",
            password: "",
            error: ""
        }
    },
    name: 'Register',
    methods: {
        async register(){
                axios.post('http://127.0.0.1:4000/api/clientes',{
                    name: this.name,
                    lastname: this.lastname,
                    type_document: this.type_document,
                    document: this.document,
                    date_exp_docuement: this.date_exp_docuement,
                    address: this.address,
                    number_phone: this.number_phone,
                    date_born: this.date_born,
                    email: this.email,
                    password: this.password
                }).then(Response => {
                    alert("Usuario creado")
                    console.log(Response);
                     console.log(Response.data.auth);
                }).catch(Error =>{
                    console.log(Error);
                })
        },
    },
 }

/*import axios from "axios";
export default {
data(){
    return{
    name: "",
    lastname: "",
    type_document: "",
    document: "",
    date_exp_docuement: "",
    address: "",
    number_phone: "",
    date_born: "",
    email: "",
    password: "",
    error: ""
    }
},
	methods: {
    register(){
    axios.post('http://localhost/api/clientes'){
   /*    name: this.name,
    lastname: this.lastname,
    type_document: this.type_document,
    document: this.document,
    date_exp_docuement: this.date_exp_docuement,
    address: this.address,
    number_phone: this.number_phone,
    date_born: this.date_born,
    email: this.email,
    password: this.password
}).then( res => {
    alert("enviando datos...")
    if(res.data.ok){
        alert({
            title: 'Usuario creado',
            text: 'Datos correctos',
            icon: 'success',
            closeOnClickOutside: false,
            closeOnEsc: false
        }).then( select => {
            if(select){
                this.$router.push({path:'/login'})
            }
        })
    }
}).catch( err => {
    console.log(err)
})
}

},
}
/*import auth from "@/logic/auth";
export default {
data: () => ({
name: this.name,
lastname: this.lastname,
type_document: this.type_document,
document: this.document,
date_exp_docuement: this.date_exp_docuement,
address: this.address,
number_phone: this.number_phone,
date_born: this.date_born,
email: this.email,
password: this.password,
error: false
}),
methods: {
async register() {
try {
await auth.register( this.name, this.lastname, this.type_document, this.document, this.date_exp_docuement, this.address, this.number_phone,
this.date_born, this.email, this.password);
this.$router.push("/login")
} catch (error) {
console.log(error);
}
}
}
};*/

</script>