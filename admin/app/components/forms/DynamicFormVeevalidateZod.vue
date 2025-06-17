<template>
  <div>
    <div
      class="border border-gray-200 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-lg max-w-xl mx-auto"
    >
      <h1 class="text-bold text-4xl mb-8 mx-auto">Dynamic VeeValidate Zod</h1>

      <DynamicForm :schema="zodSchema" :fields="fields" />
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
        <span class="text-[#9876aa]">&nbsp;v-model</span>=<span class="text-[#6a8759]">"values.name"</span>
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
import type { SubmissionHandler } from 'vee-validate'
import CodeBox from '~/components/CodeBox.vue'
import DynamicForm from '~/components/DynamicForm.vue'
import { zodSchema, FormData } from '~/schemas/zodschema'

const fields = ref([
  {
    label: 'Jméno *',
    name: 'name',
    as: 'UInput',
    value: '',
    rules: zodSchema.shape.name,
  },
  {
    label: 'E-mail *',
    name: 'email',
    as: 'UInput',
    type: 'email',
    value: '',
    rules: zodSchema.shape.email,
  },
  {
    label: 'Heslo *',
    name: 'password',
    as: 'UInput',
    type: 'password',
    value: '',
    rules: zodSchema.shape.password,
  },
  {
    label: 'Potvrďte heslo *',
    name: 'confirmPassword',
    as: 'UInput',
    type: 'password',
    value: '',
    rules: zodSchema.shape.confirmPassword,
  },
  {
    label: 'Věk *',
    name: 'age',
    as: 'UInput',
    type: 'number',
    value: 0,
    rules: zodSchema.shape.age,
  },
  {
    label: 'Souhlasím s podmínkami *',
    name: 'terms',
    as: 'UCheckbox',
    rules: zodSchema.shape.terms,
    type: 'checkbox',
    value: false,
  },
])

const toast = useToast()

const onSubmit: SubmissionHandler<FormData> = (values) => {
  toast.add({
    title: '✅ Odesláno:',
    description: `Formulář odeslal ${values.name}`,
    color: 'success',
  })
}
</script>
