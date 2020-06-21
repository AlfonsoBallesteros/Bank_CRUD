<template>
<div>
    <br>
    <div class="container bootstrap snippet">
    <div class="row">
    <div class="col-sm-10" style="padding-left:90px"><h1>User name</h1></div>
   
</div>
<div class="row">
<div class="col-md-4"><!--left col-->
    <div class="text-center">
    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">
    <h6>Upload a different photo...</h6>
    <input type="file" class="text-center center-block file-upload">
</div>
<br>


<ul class="list-group">
<li class="list-group-item text-muted">Activity <i class="fa fa-dashboard fa-1x"></i></li>
<li class="list-group-item text-right"><span class="pull-left"><strong>Shares</strong></span> 125</li>
<li class="list-group-item text-right"><span class="pull-left"><strong>Likes</strong></span> 13</li>
<li class="list-group-item text-right"><span class="pull-left"><strong>Posts</strong></span> 37</li>
<li class="list-group-item text-right"><span class="pull-left"><strong>Followers</strong></span> 78</li>
</ul> 

<div class="panel panel-default">
<div class="panel-heading">Social Media</div>
<div class="panel-body">
<i class="fa fa-facebook fa-2x"></i> <i class="fa fa-github fa-2x"></i> <i class="fa fa-twitter fa-2x"></i> <i class="fa fa-pinterest fa-2x"></i> <i class="fa fa-google-plus fa-2x"></i>
</div>
</div>

</div><!--/col-3-->
<div class="col-md-8">
<ul class="nav nav-tabs">
<h3 class="active"><a data-toggle="tab">Mis datos</a></h3>
</ul>
<div class="tab-content">
<div class="tab-pane active" id="home">
<div class="form">
<div class="form-group">
<div class="col-xs-6">
<label for="first_name"><h4>Nombre</h4></label>
<input v-model="name" type="text" class="form-control" name="first_name" id="first_name">
</div>
</div>
<div class="form-group">

<div class="col-xs-6">
<label for="last_name"><h4>Apellido</h4></label>
<input v-model="lastname" type="text" class="form-control" name="lastname" id="lastname" placeholder="Apellido" title="enter your last name if any.">
</div>
</div>

<div class="form-group">

<div class="col-xs-6">
<label for="Adress"><h4>Dirección</h4></label>
<input v-model="address" type="text" class="form-control" name="address" id="address" placeholder="Dirección" title="enter your address">
</div>
</div>

<div class="form-group">
<div class="col-xs-6">
<label for="mobile"><h4>Celular</h4></label>
<input v-model="number_phone" type="text" class="form-control" name="mobile" id="mobile" placeholder="Celular" title="enter your mobile number if any.">
</div>
</div>
<div class="form-group">
<div class="col-xs-6">
<label for="email"><h4>Email</h4></label>
<input v-model="email" type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email.">
</div>
</div>

<div class="form-group">
<div class="col-xs-6">
<label for="password"><h4>Password</h4></label>
<input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">
</div>
</div>
<div class="form-group">
<div class="col-xs-12">
<br>
<button class="btn btn-lg btn-info" @click="updateUser()"><i class="glyphicon glyphicon-ok-sign"></i> Actualizar</button>
<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
</div>
</div>
</div>

</div><!--/tab-pane-->

</div><!--/tab-pane-->
</div><!--/tab-content-->

</div><!--/col-9-->
</div><!--/row-->

</div>
</template>
<script>
import axios from 'axios'
export default {
    data:() => ({
        token: '',
        name: "",
        lastname: "",
        type_document: "",
        document: "",
        date_exp_docuement: "",
        address: "",
        number_phone: "",
        date_born: "",
        email: "",
    }),
    methods: {
        getUser(){
            this.token = localStorage.getItem('session');
            axios.get('http://127.0.0.1:4000/api/clientes/me', {
                headers:{
                    'x-access-token': this.token
                }
            }).then( res =>{
                this.name = res.data.name;
                this.lastname = res.data.lastname;
                this.address = res.data.address;
                this.number_phone = res.data.number_phone;
                this.email = res.data.email;
                console.log(res.data.name)
            }).catch( err =>{
                console.log(err)
            })
        },
        updateUser(){
            const body = {
                name: this.name,
                lastname: this.lastname,
                address: this.address,
                number_phone: this.number_phone,
                email: this.email
            }
            this.token = localStorage.getItem('session')
            axios.put('http://127.0.0.1:4000/api/clientes/', body ,
            {
                headers:{
                    'x-access-token': this.token
                }
            }).then(res =>{
                console.log(res)
            })
        },
   },
    mounted() {
        this.getUser(); 
        //this.updateUser();
    },
}
</script>
