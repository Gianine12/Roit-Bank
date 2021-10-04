<template>
  <div class="home">
  <Principal/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Principal from '@/components/Principal.vue'

@Component({
  components: {
    Principal,
  },
})
export default class Home extends Vue {}
</script>
