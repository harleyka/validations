<template>
  <div>
    <BasicFormYup v-if="type === 'yup'" />
    <BasicFormZod v-else-if="type === 'zod'" />
    <BasicFormSuperstruct v-else-if="type === 'superstruct'" />
    <BasicFormVest v-else-if="type === 'vest'" />
    <BasicFormVeevalidateYup v-else-if="type === 'veevalidateyup'" />
    <BasicFormVeevalidateZod v-else-if="type === 'veevalidatezod'" />
    <BasicFormVeevalidateValibot v-else-if="type === 'veevalidatevalibot'" />
    <BasicFormVeevalidateZodUseForm v-else-if="type === 'veevalidatezoduseform'" />
    <DynamicFormVeevalidateZod v-else-if="type === 'dynamicveevalidate'" />
    <BasicFormFormKit v-else-if="type === 'formkit'" />
  </div>
</template>

<script setup lang="ts">
import BasicFormYup from '~/components/forms/BasicFormYup.vue'
import BasicFormVeevalidateYup from '~/components/forms/BasicFormVeevalidateYup.vue'
import BasicFormZod from '~/components/forms/BasicFormZod.vue'
import BasicFormVeevalidateZod from '~/components/forms/BasicFormVeevalidateZod.vue'
import BasicFormVeevalidateZodUseForm from '~/components/forms/BasicFormVeevalidateZodUseForm.vue'
import BasicFormSuperstruct from '~/components/forms/BasicFormSuperstruct.vue'
import BasicFormVest from '~/components/forms/BasicFormVest.vue'
import DynamicFormVeevalidateZod from '~/components/forms/DynamicFormVeevalidateZod.vue'
import BasicFormVeevalidateValibot from '~/components/forms/BasicFormVeevalidateValibot.vue'
import BasicFormFormKit from '~/components/forms/BasicFormFormKit.vue'

const route = useRoute()
const type = computed(() => route.params.type)
</script>
