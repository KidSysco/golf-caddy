<template>
    <div>
        <h2>Final Scorecard</h2>
        <v-table>
            <thead>
                <tr>
                    <th>Hole #</th>
                    <th v-for="hole in 9" :key="hole">{{ hole }}</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Par</td>
                    <td class="text-secondary" v-for="par in parScores" :key="par">{{ par }}</td>
                    <td class="text-secondary">{{ totalPar }}</td>
                </tr>
                <tr>
                    <td>Golfer Score</td>
                    <td class="text-secondary" v-for="(score, index) in scoreCard" :key="index">{{ (parScores?.[index] ?? 0) + score }}</td>
                    <td class="text-secondary">{{ golferScore }}</td>
                </tr>
                <tr>
                    <td>Golfer Performance</td>
                    <td class="text-secondary" v-for="(score, index) in scoreCard" :key="index">{{ score }}</td>
                    <td class="text-secondary">{{ totalScore }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed, withDefaults, onMounted } from "vue";
    import { courses } from "@/types/Course";

    export interface Props {
        scoreCard: number[];
        courseId: number;
    }

    const props = withDefaults(defineProps<Props>(), {
        scoreCard: () => [1, 1, 1, 1, 1, 1, 1, 1, 1],
        courseId: 1,
    });

    const parScores = ref<number[]>([]);

    onMounted(() => {
        const selectedCourse = courses.find((course) => course.id === props.courseId);
        if (selectedCourse) {
            parScores.value = selectedCourse.parScores;
        }
    });

    const totalScore = computed(() => {
        return props.scoreCard.reduce((acc, score) => acc + score, 0);
    });

    const golferScore = computed(() => {
        return (parScores.value ?? []).reduce((acc, par, index) => acc + par + (props.scoreCard?.[index] ?? 0), 0);
    });

    const totalPar = computed(() => {
        return parScores.value.reduce((sum, par) => sum + par, 0);
    });
</script>
