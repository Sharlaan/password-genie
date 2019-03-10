<template>
  <section class="mt-3">
    <v-layout justify-space-between>
      <h3 class="subheading">Strength</h3>
      <span
        :style="{ color: $vuetify.theme[status.color] || status.color }"
      >{{ status.label }} {{ computedScore }} %</span>
    </v-layout>
    <v-progress-linear v-model="computedScore" :color="status.color"></v-progress-linear>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ColoredStatus, Status } from '../types';

const COLORS: ColoredStatus[] = [
  { label: Status.VERY_WEAK, color: 'error' }, // 0 - 19;
  { label: Status.WEAK, color: 'orange' }, // 20 - 39;
  { label: Status.AVERAGE, color: 'warning' }, // 40 - 59;
  { label: Status.STRONG, color: 'success' }, // 60 - 79;
  { label: Status.SECURE, color: 'info' }, // 80 - 100;
];

@Component
export default class Strength extends Vue {
  @Prop() private score!: number;

  /** Since v-linear-progress requires a bidirectional v-model prop,
   * a setter must be explicitly written even if not used;
   * else vue will complain at compile time to not mutate directly etc ...
   */
  set computedScore(s) {} // tslint:disable-line
  get computedScore() {
    return Number.isFinite(this.score) ? this.score : 0;
  }

  get status() {
    if (!Number.isFinite(this.score)) {
      return { label: '', color: 'darkgrey' };
    }

    return this.score >= 100 ? COLORS[4] : COLORS[Math.floor(this.score / 20)];
  }
}
</script>
