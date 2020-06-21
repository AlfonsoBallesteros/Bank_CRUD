<template>
  <div>
   <div >
    <b-navbar  toggleable="lg" type="light" variant="info" bg-dark>
        <b-navbar-brand><router-link to="/index">Banco Estelar</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link"><router-link to="/inicio">Inicio</router-link><span class="sr-only">(current)</span></a>
            </li>
            <!--<li class="nav-item">
              <a class="nav-link"><router-link to="/movimientos">Mi Cuenta </router-link></a>
            </li>-->
            <b-nav-item-dropdown text="Cuentas" right>
               <b-dropdown-item> <router-link to="/movimientos">Crear Cuenta </router-link></b-dropdown-item>
            </b-nav-item-dropdown>

            <li class="nav-item">
              <a class="nav-link"><router-link to="/perfil">Mi Perfil </router-link></a>
            </li>
         </ul>
        <!--<b-navbar-nav>
            <b-nav-item style="" ><router-link to="/index">Inicio </router-link></b-nav-item>
            <b-nav-item> <router-link to="/movimientos">Mis Movimientos </router-link></b-nav-item>
            <b-nav-item> <router-link to="/perfil">Mis Perfil </router-link></b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>Acceder</em>
            </template>
            <b-dropdown-item><router-link to="/login"> Iniciar sesión</router-link></b-dropdown-item>
            <b-dropdown-item ><router-link to="/login1">Registrarse</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <router-view></router-view>
</div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  margin-top: 60px;
}
.dropdown-menu.dropdown-menu-right.show{
background-color: darkslategrey;
}

.navbar-toggler-icon{
  color: blue !important;
}

a{
  color: white !important;
}
</style>
