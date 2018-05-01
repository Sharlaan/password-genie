<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header">More options</div>
      <v-card>
        <v-card-text>
          <v-tooltip top>
            <v-switch label="Ambiguous" v-model="settings.ambiguous" slot="activator" color="blue darken-2" />
            <span>Adds ambiguous chars to the Symbols set.<br>{{ ambiguousChars }}</span>
          </v-tooltip>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch, Model } from 'vue-property-decorator';
import { AMBIGUOUS } from '../pwdGenerator';
import { Settings } from '../App.vue';

@Component
export default class MoreOptions extends Vue {
  private ambiguousChars: string = AMBIGUOUS.split('').join(' ');

  @Model('change')
  private settings: Partial<Settings>;
}
</script>
