<template>
    <v-form v-model="isForm2Valid" lazy-validation ref="form2">
        <div v-for="hole in holes" :key="hole">
            <v-text-field
                v-model="scores[hole - 1]"
                :rules="[validationRules.required, validationRules.integer, validationRules.intMin(scores[hole - 1] as any, 1)]"
                :label="`Hole ${hole}`"
                hide-details="auto"
                dense
            ></v-text-field>
        </div>
    </v-form>
    <div class="text-right mt-4">
        <v-btn @click="submitScores" color="primary" size="large">Calculate Score</v-btn>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { validationRules } from "@/modules/validationRules";
    export interface Props {
        holes: number;
    }

    const form2 = ref<any>(null);
    const isForm2Valid = ref(true);

    const { holes } = defineProps<Props>();
    const emit = defineEmits<{
        (event: "scoresEntered", scores: number[]): void;
    }>();

    const scores = ref([1, 1, 1, 1, 1, 1, 1, 1, 1]);

    const submitScores = async () => {
        var form2Validator = { valid: true };

        if (form2.value) {
            form2Validator = await form2.value.validate();
        }

        await new Promise((resolve) => setTimeout(resolve, 100));
        if (!form2Validator.valid) {
        } else {
            emit("scoresEntered", scores.value);
        }
    };
</script>
