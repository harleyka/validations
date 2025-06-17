<template>
  <div>
    <div
      class="border border-gray-200 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-lg max-w-xl mx-auto"
    >
      <h1 class="text-bold text-4xl mb-8 mx-auto">Superstruct form</h1>
      <UForm ref="form" :schema="schema" :state="formData" class="space-y-4 max-w-lg mx-auto" @submit="onSubmit">
        <UFormField label="Jméno *" name="name">
          <UInput v-model="formData.name" class="w-lg" />
        </UFormField>

        <UFormField label="E-mail *" name="email">
          <UInput v-model="formData.email" type="email" class="w-lg" />
        </UFormField>

        <UFormField label="Heslo *" name="password">
          <UInput v-model="formData.password" type="password" class="w-lg" />
        </UFormField>

        <UFormField label="Potvrďte heslo *" name="confirmPassword">
          <UInput v-model="formData.confirmPassword" type="password" class="w-lg" />
        </UFormField>

        <UFormField label="Věk *" name="age">
          <UInput v-model="formData.age" type="number" class="w-lg" />
        </UFormField>

        <UFormField name="terms">
          <div class="flex items-center space-x-2">
            <UCheckbox v-model="formData.terms" />
            <label for="terms">Souhlasím s podmínkami *</label>
          </div>
        </UFormField>
        <UButton type="submit" label="Odeslat" color="primary" />
      </UForm>
    </div>

    <CodeBox>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&lt;</span><span class="text-[#2fb8a1]">UForm</span>
        <span class="text-[#9876aa]">&nbsp;ref</span>=<span class="text-[#6a8759]">"form"</span>
        <span class="text-[#9876aa]">&nbsp;:schema</span>=<span class="text-[#6a8759]">"schema"</span>
        <span class="text-[#9876aa]">&nbsp;:state</span>=<span class="text-[#6a8759]">"formData"</span>
        <span class="text-[#9876aa]">&nbsp;@submit</span>=<span class="text-[#6a8759]">"onSubmit"</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&lt;</span><span class="text-[#2fb8a1]">UFormField</span>
        <span class="text-[#9876aa]">&nbsp;label</span>=<span class="text-[#6a8759]">"Jméno"</span>
        <span class="text-[#9876aa]">&nbsp;name</span>=<span class="text-[#6a8759]">"name"</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&lt;</span><span class="text-[#2fb8a1]">UInput</span>
        <span class="text-[#9876aa]">&nbsp;v-model</span>=<span class="text-[#6a8759]">"formData.name"</span>
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
import { validate } from 'superstruct'
import type { FormSubmitEvent } from '@nuxt/ui'
import CodeBox from '~/components/CodeBox.vue'
import { superstructSchema } from '~/schemas/superstruct'

type FormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
  age?: number
  terms: boolean
}

const form = ref()
const toast = useToast()

const schema = superstructSchema

const formData = ref<FormData>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  age: 0,
  terms: false,
})

const onSubmit = async (event: FormSubmitEvent<FormData>) => {
  //const [error] = validate(formData, superstructSchema)

  if (formData.value.password !== formData.value.confirmPassword) {
    console.error('Hesla se neshodují')
    return
  }

  toast.add({
    title: '✅ Odesláno:',
    description: `Formulář odeslal ${event.data.name}`,
    color: 'success',
  })
}
</script>
