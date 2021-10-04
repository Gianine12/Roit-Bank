<template>
    <div class="mini-box">
        <div class="head">
            <h3>Excluir</h3>
            <button @click="close" class="button-close"> X </button>
        </div>
        <hr>
        <div class="content">
            <img src="@/assets/checagem_errada.svg" alt=""/>
            <p> Confirmar a exclusão deste registro?</p>
        </div>
        <hr>
        <div class="button">
            <button @click="close()">Cancelar</button>
            <button @click="retira()" >Excluir</button>
        </div>
    </div>
</template>

<script lang="ts"> 
export default{
    name: 'Exclusao',

    computed: {
        item(){
            return this.$store.state.cad
        }
    },

    methods:{
        close(){
            this.$store.dispatch('setModalVisible', false)
        },

        retira() {
            this.$store.dispatch('removeItem', this.item)
            this.$store.dispatch('setModalVisible', false)
        }
    },
}

</script>


<style scoped >

.head{
    display:flex;
    justify-content: space-between;
}

.button-close{
    background: #DDDFE5;
    border: 1px solid #DDDFE5;
    border-radius: 100%;
    color: black;
    height: 18px;
    width: 18px;
    padding: 0px;
}
.button-close:hover{
    background: #000000;
    color: #DDDFE5;
}

.mini-box{
    border: 1px solid black;
    border-radius: 10px;
    max-width: 300px;
    padding: 0 10px;
}

.close{
    width:18px;
    height:18px;
    padding:0px;
    text-align:center;
    opacity: 1;
    border-radius: 100%;
}

.content{
    display:flex;
}

p{
    margin: 5px;
}

.button{
    text-align: right;
}

button{
    margin:5px 10px 15px 5px;
    height:40px;
    border: 1px solid #D83636;
    border-radius: 5px;
    font-weight: 900;
    background: #ffffff;
    color:#D83636;
    
}

button:hover{
    font-weight: 900;
    background:#D83636;
    color: #ffffff;
}

hr{
    width: 98%;
}

</style>