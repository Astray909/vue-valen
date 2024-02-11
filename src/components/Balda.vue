<template>
  <v-app>
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
              <v-btn color="green darken-1" text @click="showYayDialog = false, showHappyDialog = true">Yayyyyy</v-btn>
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
        <v-dialog v-model="showHappyDialog" max-width="800px">
          <v-card>
            <v-card-title class="text-h5">HAPPY HAPPY!</v-card-title>
            <v-img :src="happy" class="my-5" contain height="300"></v-img>
            <v-card-text>HAPPY HAPPY CAT IS US</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" link :to="'/hub'">happy</v-btn>
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
import happy from '@/assets/happy.gif';

export default {
  name: 'App',
  data() {
    return {
      noClickCount: 0,
      showNayDialog: false,
      showYayDialog: false,
      showHappyDialog: false,
      yesButtonSize: 100,
      noButtonPosition: { top: '50%', left: '50%' },
      noButtonClicked: false,
      heart: heart,
      hold: hold,
      squint: squint,
      happy: happy,
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
