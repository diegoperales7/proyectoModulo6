<template>
    <div class="container">

<h2>Editar Destinatarios</h2>
<form @submit.prevent="guardar()">
<div class="form-group alin">
<label for="inputci">CI:</label>
<input type="text" class="form-control " v-model="destinatario.ci" >
<label for="inputNombreCompleto">Nombre Completo:</label>
<input type="text" v-model="destinatario.nombreCompleto" class="form-control" >
<label for="inputCelular">Celular:</label>
<input type="text" v-model="destinatario.celular" class="form-control" >
<label for="inputDireccion">Dirección:</label>
<input type="text" v-model="destinatario.direccion" class="form-control" >
<label for="inputCiudad">Ciudad:</label>
<input type="text" v-model="destinatario.ciudad" class="form-control" >
<br>
<button type="submit" class="btn btn-primary m-2 ">Guardar</button>
<button class="btn btn-danger m-2">Cancelar</button>
</div>
<br>
</form>
</div>
</template>

<script>
    export default{
        name: 'editarDestinatarioView',
        data(){
            return {
                destinatario:{
                    ci:null,
                    nombreCompleto:null,
                    celular:null,
                    direccion:null,
                    ciudad:null
                },
                destinatarios:{

                }
            }
        },
        methods:{
            getDestinatario(){
                axios
                ({
                    method: "get",
                    url: "http://localhost:3333/destinatarios/"+this.$route.params.id,
                    
                })
                .then(response => {
                    this.destinatario=response.data;
                    console.log(response);
                    
                })
                .catch(e => console.log(e));
            },
            guardar(){
                axios
                ({
                    method: "patch",
                    url: "http://localhost:3333/destinatarios/"+this.$route.params.id,
                    data:this.destinatario
                    
                })
                .then(response => {   
                    this.$store.state.mensaje = {
                        texto:"El destinatario se edito exitosamente",
                        tipo:"exito"
                    };
                    this.$store.dispatch('addMensajeAction');
                    this.$router.push({name:'app'});
                     
                })
                .catch(e => console.log(e));
            }
        },
        computed:{
        },
        mounted(){
            this.getDestinatario();
        },
        components:{
        }
    }
</script>

<style>
.alin{
    text-align: left;
}
</style>