<template>
  <section class="mt-3">
    <v-layout justify-space-between>
      <h3 class="subheading">Strength</h3>
      <span :style="{ color: $vuetify.theme[status.color] || status.color }">
        {{ status.label }} {{ score }} %
      </span>
    </v-layout>
    <v-progress-linear v-model="score" :color="status.color"></v-progress-linear>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Status, ColoredStatus } from '@/types';

const COLORS: ColoredStatus[] = [
  { label: Status.VERY_WEAK, color: 'error' }, // 0 - 19;
  { label: Status.WEAK, color: 'orange' }, // 20 - 39;
  { label: Status.AVERAGE, color: 'warning' }, // 40 - 59;
  { label: Status.STRONG, color: 'success' }, // 60 - 79;
  { label: Status.SECURE, color: 'info' }, // 80 - 100;
];

@Component
export default class Strength extends Vue {
  @Prop({ default: 0, required: true })
  private score: number;

  get status() {
    return this.score >= 100 ? COLORS[4] : COLORS[Math.floor(this.score / 20)];
  }
}
</script>
