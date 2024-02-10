<template>
  <v-app :theme="currentTheme">
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Will you be my Balda?</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="isDark" :label="`Dark Mode: ${isDark ? 'On' : 'Off'}`"></v-switch>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="text-center">
        <v-img :src="heart" class="my-5" contain height="600"></v-img>
        <v-btn color="primary" @click="showYayDialog = true" :style="noButtonClicked ? yesButtonStyle : {}">Yes!</v-btn>
        <v-dialog v-model="showYayDialog" max-width="800px">
          <v-card>
            <v-card-title class="text-h5">MUEJEJEJEJEJEJEJEJE</v-card-title>
            <v-img :src="hold" class="my-5" contain height="300"></v-img>
            <v-card-text>Muahhhhhhhhhhhhhh, you are my valentine!!!</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="showYayDialog = false">Yayyyyy</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="showNayDialog" max-width="800px">
          <v-card>
            <v-card-title class="text-h5">NuoOOooOOOooOOoooo!</v-card-title>
            <v-img :src="squint" class="my-5" contain height="300"></v-img>
            <v-card-text>CLICK YES!</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="showNayDialog = false">Okay...</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn color="error" @click="moveNoButton" :style="noButtonClicked ? noButtonStyle : {}">NO</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import hold from '@/assets/hold.jpg';
import heart from '@/assets/heart.png';
import squint from '@/assets/squint.png';

export default {
  name: 'App',
  data() {
    return {
      noClickCount: 0,
      showNayDialog: false,
      showYayDialog: false,
      yesButtonSize: 100,
      noButtonPosition: { top: '50%', left: '50%' },
      noButtonClicked: false,
      isDark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
      drawer: false,
      heart: heart,
      hold: hold,
      squint: squint,
    };
  },
  computed: {
    yesButtonStyle() {
      return {
        width: this.yesButtonSize + 'px',
        height: this.yesButtonSize + 'px',
      };
    },
    noButtonStyle() {
      return {
        position: 'absolute',
        top: this.noButtonPosition.top,
        left: this.noButtonPosition.left,
      };
    },
    currentTheme() {
      return this.isDark ? 'dark' : 'light';
    },
  },
  methods: {
    moveNoButton() {
      this.noButtonClicked = true;
      this.noClickCount++;
      const xOffset = 100;
      const yOffset = 50;
      const appBarHeight = 64;
      const x = Math.random() * (window.innerWidth - xOffset);
      const y = Math.random() * (window.innerHeight - appBarHeight - yOffset) + appBarHeight;
      this.noButtonPosition = { top: `${y}px`, left: `${x}px` };
      this.yesButtonSize += 50;
      if (this.noClickCount >= 5) {
        this.showNayDialog = true;
      }
    },

  },
};
</script>

<style scoped>
.v-btn {
  margin: 10px;
}
</style>
