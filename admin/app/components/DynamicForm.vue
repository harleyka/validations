<template>
  <UForm :state="values" class="space-y-4 max-w-lg mx-auto" @submit="onSubmit">
    <div v-for="{ as, name, label, rules, ...attrs } in fields" :key="name" class="space-y-1">
      <UFormField v-if="as === 'UCheckbox'">
        <Field
          v-slot="{ field, errorMessage, handleChange }"
          name="terms"
          type="checkbox"
          :value="true"
          :unchecked-value="false"
        >
          <div class="flex items-center space-x-2">
            <UCheckbox :id="field.name" v-model="field.value" @update:model-value="handleChange" />
            <label :for="field.name">Souhlasím s podmínkami *</label>
          </div>
          <p v-if="errorMessage" class="text-red-500 text-sm">
            {{ errorMessage }}
          </p>
        </Field>
      </UFormField>
      <UFormField v-else :error="errors[name]">
        <template #label>{{ label }}</template>
        <Field v-slot="{ field }" :name="name" :rules="rules" :unchecked-value="false" v-bind="attrs">
          <component :is="componentMap[as]" :id="name" v-bind="{ ...field, ...attrs }" class="w-lg" />
        </Field>
      </UFormField>
    </div>

    <UButton type="submit" label="Odeslat" color="primary" />
  </UForm>
</template>

<script lang="ts" setup>
import { Field, useForm } from 'vee-validate'
import { UInput, UCheckbox, UTextarea } from '#components'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod/v4'

const props = defineProps({
  schema: {
    type: Object as PropType<z.ZodObject>,
    required: true,
  },
  fields: {
    type: Object,
    required: true,
  },
})

const { schema, fields } = toRefs(props)

const toast = useToast()

const componentMap: Record<string, any> = {
  UInput: UInput,
  UCheckbox: UCheckbox,
  UTextarea: UTextarea,
}

const initialValues = Object.assign(
  {},
  ...fields.value.flatMap((field: { name: string; value: string | boolean }) => ({
    [field.name]: field.value,
  })),
)
const { handleSubmit, errors, values } = useForm<FormData>({
  validationSchema: toTypedSchema(schema.value),
  initialValues,
})

const onSubmit = handleSubmit((values) => {
  toast.add({
    title: '✅ Odesláno:',
    description: `Formulář odeslal ${values}`,
    color: 'success',
  })
})
</script>
