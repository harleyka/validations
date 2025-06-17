<template>
  <div
    class="border border-gray-200 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-lg"
  >
    <h1 class="text-bold text-4xl mb-8 mx-auto">Super form</h1>
    <UForm
      ref="form"
      :schema="schema"
      :state="formData"
      class="space-y-4 max-w-lg mx-auto"
      @submit="onSubmit"
    >
      <UFormField label="Jméno" name="name">
        <UInput v-model="formData.name" class="w-lg" />
      </UFormField>

      <UFormField label="Email" name="email">
        <UInput v-model="formData.email" type="email" class="w-lg" />
      </UFormField>

      <UFormField label="Heslo" name="password">
        <UInput v-model="formData.password" type="password" class="w-lg" />
      </UFormField>

      <UFormField label="Potvrďte heslo" name="confirmPassword">
        <UInput
          v-model="formData.confirmPassword"
          type="password"
          class="w-lg"
        />
      </UFormField>

      <UFormField label="Věk" name="age">
        <UInput v-model="formData.age" type="number" class="w-lg" />
      </UFormField>

      <UFormField name="terms">
        <div class="flex items-center space-x-2">
          <UCheckbox v-model="formData.terms" />
          <label for="terms">Souhlasím s podmínkami</label>
        </div>
      </UFormField>
      <UButton type="submit" label="Odeslat" color="primary" />
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  name: yup
    .string()
    .required('Jméno je povinné')
    .min(3, 'Minimálně 3 znaky')
    .equals(['Jan Novák'], 'To si vymýšlíte'),
  email: yup.string().email('Neplatný e-mail').required('E-mail je povinný'),
  password: yup
    .string()
    .required('Heslo je povinné')
    .min(8, 'Minimálně 8 znaků')
    .matches(/\d/, 'Musí obsahovat číslo'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Hesla se neshodují')
    .required('Potvrďte heslo'),
  age: yup
    .number()
    .required('Věk je povinný')
    .min(18, 'Musí být alespoň 18 let')
    .max(99, 'Na tohle jste už starý'),
  terms: yup.boolean().oneOf([true], 'Musíte souhlasit s podmínkami'),
})

const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  age: null,
  terms: false,
})

const { handleSubmit } = useForm({ validationSchema: schema })

const onSubmit = handleSubmit((values) => {
  console.log('✅ Odesláno:', values)
})
</script>
