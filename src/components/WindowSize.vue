<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../assets/construction_cat.jpg')" class="my-3" contain height="200" />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    Window Size
                </h1>
                <p class="display-1">Outer Width: {{ outerWidth }}</p>
                <p class="display-1">Outer Height: {{ outerHeight }}</p>
                <p class="display-1">Inner Width: {{ innerWidth }}</p>
                <p class="display-1">Inner Height: {{ innerHeight }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'WindowSize',
    data() {
        return {
            outerWidth: 0,
            outerHeight: 0,
            innerWidth: 0,
            innerHeight: 0
        }
    },
    mounted() {
        this.updateWindowSize();
        window.addEventListener('resize', this.updateWindowSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateWindowSize);
    },
    methods: {
        updateWindowSize() {
            this.outerWidth = window.outerWidth;
            this.outerHeight = window.outerHeight;
            this.innerWidth = window.innerWidth;
            this.innerHeight = window.innerHeight;
        }
    }
}
</script>

<style scoped>
.display-1 {
    font-size: 2rem;
    margin: 0.5rem 0;
}
</style>
