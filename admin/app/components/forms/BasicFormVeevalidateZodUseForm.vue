<template>
  <div>
    <div
      class="border border-gray-200 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-lg max-w-xl mx-auto"
    >
      <h1 class="text-bold text-4xl mb-8 mx-auto">VeeValidate Zod + useForm</h1>

      <UForm :state="values" class="space-y-4 max-w-lg mx-auto" @submit="onSubmit">
        <UFormField :error="errors.name" label="Jméno *" name="name">
          <UInput v-model="name" class="w-lg" />
        </UFormField>

        <UFormField :error="errors.email" label="E-mail *" name="email">
          <UInput v-model="email" type="email" class="w-lg" />
        </UFormField>

        <!--
        <UFormField :error="errors.url" label="URL *" name="url">
          <UInput v-model="url" type="url" class="w-lg" />
        </UFormField>
        -->

        <UFormField :error="errors.password" label="Heslo *" name="password">
          <UInput v-model="password" type="password" class="w-lg" />
        </UFormField>

        <UFormField :error="errors.confirmPassword" label="Potvrďte heslo *" name="confirmPassword">
          <UInput v-model="confirmPassword" type="password" class="w-lg" />
        </UFormField>

        <UFormField :error="errors.age" label="Věk *" name="age">
          <UInput v-model="age" type="number" class="w-lg" />
        </UFormField>

        <UFormField :error="errors.terms" name="terms">
          <div class="flex items-center space-x-2">
            <UCheckbox v-model="terms" />
            <label for="terms">Souhlasím s podmínkami *</label>
          </div>
        </UFormField>

        <UButton type="submit" label="Odeslat" color="primary" />
      </UForm>
    </div>

    <CodeBox>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&lt;</span><span class="text-[#2fb8a1]">UForm</span>
        <span class="text-[#9876aa]">&nbsp;:state</span>=<span class="text-[#6a8759]">"values"</span>
        <span class="text-[#9876aa]">&nbsp;@submit</span>=<span class="text-[#6a8759]">"handleSubmit(onSubmit)"</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&lt;</span><span class="text-[#2fb8a1]">UFormField</span>
        <span class="text-[#9876aa]">&nbsp;error</span>=<span class="text-[#6a8759]">"errors.name"</span>
        <span class="text-[#9876aa]">&nbsp;label</span>=<span class="text-[#6a8759]">"Jméno"</span>
        <span class="text-[#9876aa]">&nbsp;name</span>=<span class="text-[#6a8759]">"name"</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&lt;</span><span class="text-[#2fb8a1]">UInput</span>
        <span class="text-[#9876aa]">&nbsp;v-model</span>=<span class="text-[#6a8759]">"name"</span>
        <span class="text-[#9876aa]">&nbsp;class</span>=<span class="text-[#6a8759]">"w-lg"</span>
        <span class="text-[#e8bf6a]">/&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&lt;/</span><span class="text-[#2fb8a1]">UFormField</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&lt;/</span><span class="text-[#2fb8a1]">UForm</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
    </CodeBox>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField, Field } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { zodSchema, Form } from '~/schemas/zodschema'
import CodeBox from '~/components/CodeBox.vue'

const toast = useToast()

const { handleSubmit, errors, values, defineField } = useForm<Form>({
  validateOnMount: false,
  validationSchema: toTypedSchema(zodSchema),
  initialValues: {
    name: '',
    email: '',
    //url: '',
    password: '',
    confirmPassword: '',
    age: undefined,
    terms: false,
  },
})

const [name] = defineField('name')
const [email] = defineField('email')
const [password] = defineField('password')
const [confirmPassword] = defineField('confirmPassword')
const [age] = defineField('age')
const [terms] = defineField('terms')

const onSubmit = handleSubmit((values) => {
  toast.add({
    title: '✅ Odesláno:',
    description: `Formulář odeslal ${values}`,
    color: 'success',
  })
})
</script>
