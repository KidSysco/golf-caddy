<template>
    <div v-for="hole in holes" :key="hole">
        <v-text-field v-model="scores[hole - 1]" min="1" :label="`Hole ${hole}`" type="number" hide-details="auto" dense></v-text-field>
    </div>
    <div class="text-right mt-4">
        <v-btn @click="submitScores" color="primary" size="large">Calculate Score</v-btn>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    export interface Props {
        holes: number;
    }

    defineProps<Props>();
    const emit = defineEmits<{
        (event: "scoresEntered", scores: number[]): void;
    }>();

    const scores = ref([1, 1, 1, 1, 1, 1, 1, 1, 1]);

    const submitScores = () => {
        emit("scoresEntered", scores.value);
    };
</script>
