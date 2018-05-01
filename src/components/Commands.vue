<template>
  <v-layout my-1>
    <v-flex xs6>
      <v-btn block flat @click="reload">
        <v-icon class="mr-1">cached</v-icon>Regenerate
      </v-btn>
    </v-flex>
    <v-flex xs6>
      <v-btn block flat v-clipboard="password">
        <v-icon class="mr-1">content_copy</v-icon>Copy
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Commands extends Vue {
  @Prop() private password: string;

  @Emit()
  private reload(): void {
    return;
  }
}
</script>
