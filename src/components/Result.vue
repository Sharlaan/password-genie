<template>
  <v-card color="white">
    <v-card-text class="text-xs-center">{{password}}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Result extends Vue {
  @Prop() private password!: string;
}
</script>

<style lang="scss" scoped>
.card__text {
  letter-spacing: 0.25rem;
  word-break: break-all;
}
</style>
