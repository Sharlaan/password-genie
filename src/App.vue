<template>
  <v-app>
    <v-container fluid fill-height :style="customBackground">
      <v-layout align-center justify-center>
        <v-card color="grey lighten-3" class="pa-4 elevation-5" width="400">
          <h1 class="text-xs-center mb-3">The Password Genie</h1>
          <Result :password="newPassword"/>
          <Commands :password="newPassword" @reload="generatePassword"/>
          <Strength :score="score"/>
          <Options v-model="settings"/>
          <MoreOptions v-model="settings"/>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import UnsplashSourceEs6 from 'unsplash-source-es6';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Commands, MoreOptions, Options, Result, Strength } from './components';
import pwdGenerator from './pwdGenerator';
import scoreGenerator from './scoreCalculator';
import scoreCalculator from './scoreCalculator';
import { Settings } from './types';

export const defaultSettings = {
  ambiguous: true,
  digits: 4,
  length: 8,
  symbols: 2,
};

const radialGradientBG = {
  backgroundImage: `-webkit-radial-gradient(100% 100%,ellipse farthest-side,#dbf6c8 20%,#1cafc6 50%,#012690 110%),
  radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 20%,#1cafc6 50%,#012690 110%)`,
};

const randomBG = (url: string) => ({
  background: `url(${url}) no-repeat center fixed`,
  backgroundSize: 'cover',
});

@Component({
  components: {
    Commands,
    MoreOptions,
    Options,
    Result,
    Strength,
  },
})
export default class App extends Vue {
  private customBackground: object = { backgroundColor: '#b0c4de' };
  private newPassword: string = 'Click "REGENERATE"';
  private score: number | null = null;
  private settings: Settings = defaultSettings;

  public async mounted() {
    const unsplash = new UnsplashSourceEs6();
    const url = await unsplash
      .search(['nature', 'zen'])
      .size(1980, 1080)
      .frequency('daily')
      .fetch();
    this.customBackground = radialGradientBG; // randomBG(url);
  }

  @Watch('settings', { deep: true })
  public generatePassword(newSettings: Settings) {
    this.newPassword = pwdGenerator({ ...this.settings });
    this.score = scoreCalculator(this.newPassword);
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.customBG {
  background-color: rgb(176, 196, 222);
}
</style>
