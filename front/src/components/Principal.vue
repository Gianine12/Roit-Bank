<template>
  <div>
    <Modal v-if="visivel" />

    <div class="head" >
      <div class="icon-logo">
        <img src="@/assets/menu-1.svg" alt=""/>
      </div>
        <img class='logoRoit' src="@/assets/Grupo 4.svg" alt="logo Roit Bank"/>
    </div>

    <div class="body">

        <div class="menu-lateral">
          <button class="teste">
            <img class="img-menu" src="@/assets/bars-graphic.svg" alt=""/>
          </button>
          
          <button class="teste" >
            <img class="img-menu" src="@/assets/flow-magic.svg" alt=""/>
          </button>
          
          <button class="teste">
            <img class="img-menu" src="@/assets/file-edit.svg" alt=""/>
          </button>
          
          <button class="teste">
            <img class="img-menu" src="@/assets/contract (2).svg" alt=""/>
          </button>

        </div>

        
        <div class="content">
          <h2>Teste Engenheiro de Software Full-Stack</h2>
         
          <div class="details">
            <button @click="add()" class="btn-cad">Cadastrar</button>
            <input type="search" placeholder="Busca"/>

            <table>
              <tr class="tb-header">
                <th rowspan="1">
                  ID
                  <img src="@/assets/filter.svg" alt="filter"/>
                </th>

                <th>
                  Nome
                  <img src="@/assets/filter.svg" alt="filter"/>
                </th>
                <th>
                  Idade
                  <img src="@/assets/filter.svg" alt="filter"/>
                </th>
                <th>
                  GitHub User
                  <img src="@/assets/filter.svg" alt="filter"/>
                </th>
                <th>
                  Endereço
                  <img src="@/assets/filter.svg" alt="filter"/>
                </th>
                <th></th>
              </tr>

              <tr v-for="pess in lista" :key="pess.key" >
                <td>{{pess.id}}</td>
                <td>{{pess.nome}}</td>
                <td>{{pess.idade}} anos</td>
                <td>{{pess.userGit}}</td>
                <td>{{pess.rua}}, {{pess.numero}} - {{pess.bairro}} - {{pess.cidade}}/{{pess.estado}}</td>
                <td>
                  <button @click="edit()">
                    <img class="icon-button" src="@/assets/eye (8).svg" alt="icon lixeira"/>
                  </button>
                  <button @click="excluse(pess)">
                    <img class="icon-button" src="@/assets/trash (5).svg" alt="icon lixeira"/>
                  </button>
                </td>

              </tr>
            </table>
          </div>
        </div>
    </div>
   
  </div>
</template>

<script lang="ts">

import Modal from './Modal.vue' 

export default{
  name: 'Principal',

  prop:{
    pess: {}
  },

  methods: {
    excluse(pess){
      this.$store.dispatch('setModalVisible', true)
      this.$store.dispatch('setExcluse', true);
      this.$store.dispatch('setCad', pess)
    },

    retira() {
      this.$store.dispatch('removeItem',this.pess)
    },

    add(){
        this.$store.dispatch('setModalVisible', true)
        this.$store.dispatch('setTitle', 'Adicionar');
        this.$store.dispatch('setExcluse', false);
    },
    edit(){
      this.$store.dispatch('setModalVisible', true);
      this.$store.dispatch('setTitle', 'Editar');
      this.$store.dispatch('setExcluse', false);
    },
    showModal() {
      this.$store.dispatch('setModalVisible', true)
    },
    closeModal() {
      this.$store.dispatch('setModalVisible', false)
    },
  },


  computed: {
    titulo() {
      return this.$store.state.title;
    },
    visivel() {
      return this.$store.state.isModalVisible;
    },
    lista(){
      return this.$store.state.list
    }
  },
  
  components:{
    Modal,
  }
}

</script>

<style scoped >

.teste{
  background:  transparent;
  height:  38px;
  line-height:  40px;
  border:  2px solid white;
  display:  inline-block;
  float:  none;
  text-align:  center;
  width:  120px;
  font-size:  14px;
  color:  #fff;
}

.teste:hover  {
  border-left: 5px solid #E2B874;
}

.head{
  background: #0C517E;
  color: #FFFFFF;
  font-weight: 900;
  height: 7vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.icon-logo{
  background: #0000008A;
  margin: 20px;
  border-radius: 50%;
  width: 6%;
  height: 85%;
  max-width: 3%;

  display: flex;
  align-items: center;
  justify-content: center;
  
}

.body{
  background:#0000004D;

  width: 100vw;
  height: 93vh;

  display: flex;
}

.menu-lateral{
  background: #ffffff;

  height: 97%;

  display: flex;
  flex-direction: column;

}

.img-menu{
  margin: 0px;
}

.img-menu:hover{
  color: black;
}

.content{
  height: 100%;
  width: 100%;

  text-align: left;
}

h2{
  margin: 20px;
}

.details{
  background: #FFFFFF;
  margin: auto;
  width: 95%;
  height: 80%;
  
}

table{
  border: 1px solid #DFE3E6;
  border-collapse: collapse;
  width: 96%;
  margin: auto;
  /* padding: 8px; */
}

.tb-header{
  background: #DFE3E6;
}
.tb-header:hover{
  background: #DFE3E6;
}

th, td {
  height: 32px;
  padding: 8px;
}

tr{
  border: 1px solid #DFE3E6;
}

tr:hover{
  background:#F9FAFB;
}


.btn-cad{
  border: 1px solid #E2B874;
  border-radius: 5px;
  background: #FFFFFF;
  color:#E2B874  ;
  height:40px;
  font-weight: 900;

  margin: 2%;
}

.btn-cad:hover{
  border: 1px solid #E2B874;
  border-radius: 5px;
  background: #E2B874;
  color: #FFFFFF;
 
  height:40px;
  font-weight: 900;

  margin: 25px;
}

input{
  border:1px solid #DFE3E6;
  border-radius: 4px;
  opacity:1;
  padding: 5px;
  height:40px;
}

.modal{
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  opacity: 1;
}

.icon-button{
  height: 10px;
  width: 15px; 
}

.logoRoit{
  width: 10%;
  min-width: 120px;
}
</style>

