<template>
  <section class="mt-5">
    <v-layout>
      <h3 class="subheading mr-2">Options</h3>
      <v-tooltip top>
        <v-icon slot="activator">info</v-icon>
        <span>The tool will generate a password with the chosen length,<br>
          containing the chosen number of digits and symbols, filling the remaining slots with letters.<br>
          Notes:<br>
          - letters will be randomly upper-cased;<br>
          - digits + symbols <= length;<br>
          - if you set digits + symbols = length, password will not contain any letter.
        </span>
      </v-tooltip>
    </v-layout>
    
    <v-layout align-center>
      <label for="length" class="slider-label">Length</label>
      <v-flex>
        <v-slider id="length" min="4" :max="255" v-model="settings.length" />
      </v-flex>
      <v-text-field v-model="settings.length" min="4" type="number" class="slider-field" />
    </v-layout>
    
    <v-layout align-center>
      <label for="Digits" class="slider-label">Digits</label>
      <v-flex>
        <v-slider id="Digits" :max="settings.length" v-model="settings.digits" />
      </v-flex>
      <v-text-field v-model="settings.digits" min="0" type="number" class="slider-field" />
    </v-layout>
    
    <v-layout align-center>
      <v-tooltip top class="slider-label">
        <label for="Symbols" slot="activator">Symbols</label>
        <span>{{ SYMBOLS }}</span>
      </v-tooltip>
      <v-flex>
        <v-slider id="Symbols" :max="settings.length" v-model="settings.symbols" />
      </v-flex>
      <v-text-field v-model="settings.symbols" min="0" type="number" class="slider-field" />
    </v-layout>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch, Model } from 'vue-property-decorator';
import { SYMBOLS } from '../pwdGenerator';
import { Settings } from '../App.vue';

@Component
export default class Options extends Vue {
  private SYMBOLS: string = SYMBOLS.split('').join(' ');

  @Model('change')
  private settings: Partial<Settings>;
}
</script>

<style lang="scss" scoped>
  .layout.align-center {
    height: 60px;
  }
  .slider-label {
    width: 80px;
    height: 30px;
    font-size: 16px;
    opacity: 0.54
  }
  .slider-field {
    width: 46px;
    margin-left: 10px;
    flex: none
  }
</style>
