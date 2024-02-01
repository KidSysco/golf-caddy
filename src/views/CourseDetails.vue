<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="d-flex align-center">
                    <v-icon size="34" icon="mdi-golf" class="ma-4"></v-icon>
                    <h1>{{ selectedCourse.name }}</h1>
                    <v-spacer></v-spacer>
                    <!-- show on everything BUT phones -->
                    <div class="d-none d-sm-flex">{{ enterStrokesText }}</div>
                </div>
            </v-col>
        </v-row>
        <v-row class="mt-0">
            <v-col cols="12" sm="5" xl="4">
                <v-card rounded="xl" variant="outlined">
                    <v-img :src="selectedCourse.image" cover height="300"></v-img>
                </v-card>
            </v-col>
            <v-col cols="12" sm="7" xl="8">
                <!-- only show on phones -->
                <div class="d-flex d-sm-none mb-2">{{ enterStrokesText }}</div>
                <ScoreInput v-if="selectedCourse" :holes="selectedCourse.parScores.length" @scoresEntered="calculateScore" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <ScoreCard v-if="finalScore" :scoreCard="finalScore" :course-id="selectedCourse.id" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import { Course, courses } from "@/types/Course";
    import ScoreInput from "@/components/ScoreInput.vue";
    import ScoreCard from "@/components/ScoreCard.vue";

    const route = useRoute();
    const router = useRouter();
    const selectedCourse = ref<Course>(courses[0]!);
    const finalScore = ref<number[] | null>(null);
    const enterStrokesText = "Enter strokes for this player.";

    onMounted(() => {
        setCourse(route.params.id as string);
    });

    const setCourse = (id: string) => {
        const foundCourse = courses.find((course) => course.id.toString() === id);
        if (foundCourse) {
            selectedCourse.value = foundCourse;
        } else {
            console.error("Selected course ID not found in courses.");
            console.error("id: " + id);
            router.push("/");
        }
    };

    const calculateScore = (scores: number[]) => {
        if (selectedCourse.value !== undefined) {
            finalScore.value = scores.map((score, index) => {
                const parScore: number | undefined = selectedCourse.value.parScores[index];
                return parScore ? score - parScore : 0;
            });
        }
    };
</script>
