<!-- Home.vue -->
<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4" md="4" lg="4" xl="3">
                <CourseSelector :courses="courses" @courseSelected="setCourse" />
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4" xl="5">
                <ScoreInput v-if="selectedCourse" :holes="selectedCourse.parScores.length" @scoresEntered="calculateScore" />
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4" xl="4">
                <ScoreCard v-if="finalScore" :scoreCard="finalScore" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { Course, courses } from "@/types/Course";
    import CourseSelector from "@/components/CourseSelector.vue";
    import ScoreInput from "@/components/ScoreInput.vue";
    import ScoreCard from "@/components/ScoreCard.vue";

    const selectedCourse = ref<Course>(courses[0]!);
    const finalScore = ref<number[] | null>(null);

    const setCourse = (course: Course) => {
        selectedCourse.value = course;
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
