<template>
    <v-container>
        <v-row>
            <v-col class="text-center mt-6">
                <v-avatar size="200" variant="tonal" color="primary"><v-icon size="110" icon="mdi-golf-cart"></v-icon></v-avatar>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="mb-4">
                <v-card width="100%" max-width="350" class="mx-auto bg-transparent" elevation="0">
                    <h1>Welcome to Golf Caddy</h1>
                    <div>Select a Golf Course to Begin</div>
                </v-card>
            </v-col>
        </v-row>
        <v-divider class="mb-10 mt-4"></v-divider>
        <v-row>
            <v-col cols="12" sm="6" v-for="course in courses" :key="course.id">
                <v-card
                    color="bg-grey-darken-4 "
                    rounded="xl"
                    variant="outlined"
                    width="100%"
                    max-width="500"
                    :to="`/CourseDetails/${course.id}`"
                    class="mx-auto"
                >
                    <v-img :src="course.image" cover height="250"></v-img>
                    <div class="d-flex align-center">
                        <v-icon size="48" icon="mdi-golf" class="ma-4"></v-icon>
                        <div>
                            <div class="pb-0">
                                <h2>{{ course.name }}</h2>
                            </div>
                            <div class="text-body pt-0">Holes: {{ course.holes }}</div>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import { courses } from "@/types/Course";
</script>
