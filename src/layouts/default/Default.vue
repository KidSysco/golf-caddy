<template>
    <v-app>
        <v-app-bar elevation="0" color="blue-darken-4" class="">
            <v-toolbar-items>
                <v-btn to="/" size="large" variant="text" title="Back to Home">
                    <v-icon icon="mdi-golf-cart"></v-icon>
                    <span class="ml-2">Golf Caddy</span>
                </v-btn>
            </v-toolbar-items>

            <v-spacer class=""></v-spacer>
            <v-toolbar-items>
                <v-btn variant="text" @click="toggleTheme"
                    ><v-icon size="large" class="mt-1">mdi-theme-light-dark</v-icon>
                    <span class="d-none d-sm-inline ml-2 font-splash2 text-capitalize">{{
                        theme.global.current.value.dark ? "Light Mode" : "Dark Mode"
                    }}</span></v-btn
                >
            </v-toolbar-items>
        </v-app-bar>

        <default-view />
        <div class="d-flex justify-center mt-8 mb-2">
            <v-avatar size="64" variant="tonal" color="primary"><v-icon size="32" icon="mdi-golf-cart"></v-icon></v-avatar>
        </div>
        <div class="d-flex justify-center mb-8 text-body-2">By Ryan Segura</div>
    </v-app>
</template>

<script lang="ts" setup>
    import DefaultView from "./View.vue";
    import { useTheme } from "vuetify";

    const theme = useTheme();

    function toggleTheme() {
        theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
    }
</script>
