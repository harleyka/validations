<template>
  <div
    class="border border-gray-200 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-lg max-w-xl mx-auto"
  >
    <h1 class="text-bold text-4xl mb-8 mx-auto">FormKit Form</h1>

    <FormKit type="form" :actions="false" form-class="space-y-4 max-w-lg mx-auto" @submit="onSubmit">
      <FormKitSchema :schema="formkitFormSchema" />
      <div class="mt-4">
        <UButton type="submit" label="Odeslat" color="primary" />
      </div>
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { FormKitSchema } from '@formkit/vue'
import { formkitFormSchema } from '~/schemas/formkit'

const toast = useToast()

const onSubmit = (values: Record<string, any>) => {
  console.log('Formulář odeslán s daty:', values)
  toast.add({
    title: '✅ Odesláno:',
    description: `Formulář odeslal ${values.name}`,
    color: 'success',
  })
}
</script>
