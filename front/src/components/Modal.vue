<template>
  <div class="modal-backdrop">
    <div class="modal">
        <Exclusao v-if="deleta" />
        <Cadastro v-else />
    </div>
  </div>
</template>

<script lang="ts" >

import Cadastro from './Cadastro.vue'
import Exclusao from './Exclusao.vue'

export default {
    name: 'Modal',
    
    computed:{
      deleta() {
        return this.$store.state.isExcluse;
      }
    },
    
    methods: {
      close() {
        this.$emit('close');
      },
    },
   
    components:{
        Cadastro,
        Exclusao,
    }
  };
</script>

<style scoped >

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

</style>