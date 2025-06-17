<template>
  <div>
    <div
      class="border border-gray-200 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-lg max-w-xl mx-auto"
    >
      <h1 class="text-bold text-4xl mb-8 mx-auto">VeeValidate Valibot form</h1>
      <Form
        :validation-schema="schema"
        :initial-values="formData"
        class="space-y-4 max-w-lg mx-auto"
        @submit="onSubmit"
      >
        <div class="space-y-1">
          <UFormField>
            <template #label>Jméno *</template>
            <Field v-slot="{ field, errorMessage }" name="name">
              <UInput v-bind="field" class="w-lg" />
              <p v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
              </p>
            </Field>
          </UFormField>
        </div>

        <div class="space-y-1">
          <UFormField>
            <template #label>E-mail *</template>
            <Field v-slot="{ field, errorMessage }" name="email">
              <UInput v-bind="field" type="email" class="w-lg" />
              <p v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
              </p>
            </Field>
          </UFormField>
        </div>

        <!--
        <div class="space-y-1">
          <UFormField>
            <template #label>URL *</template>
            <Field v-slot="{ field, errorMessage }" name="url">
              <UInput v-bind="field" type="url" class="w-lg" />
              <p v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
              </p>
            </Field>
          </UFormField>
        </div>
        -->

        <div class="space-y-1">
          <UFormField>
            <template #label>Heslo *</template>
            <Field v-slot="{ field, errorMessage }" name="password">
              <UInput v-bind="field" type="password" class="w-lg" />
              <p v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
              </p>
            </Field>
          </UFormField>
        </div>

        <div class="space-y-1">
          <UFormField>
            <template #label>Potvrďte heslo *</template>
            <Field v-slot="{ field, errorMessage }" name="confirmPassword">
              <UInput v-bind="field" type="password" class="w-lg" />
              <p v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
              </p>
            </Field>
          </UFormField>
        </div>

        <div class="space-y-1">
          <UFormField>
            <template #label>Věk *</template>
            <Field v-slot="{ field, errorMessage }" name="age">
              <UInput v-bind="field" type="number" class="w-lg" />
              <p v-if="errorMessage" class="text-red-500 text-sm">
                {{ errorMessage }}
              </p>
            </Field>
          </UFormField>
        </div>

        <div class="space-y-1">
          <UFormField>
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
        </div>

        <UButton type="submit" label="Odeslat" color="primary" />
      </Form>
    </div>

    <CodeBox>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&lt;</span><span class="text-[#2fb8a1]">Form</span>
        <span class="text-[#9876aa]">&nbsp;:validation-schema</span>=<span class="text-[#6a8759]">"schema"</span>
        <span class="text-[#9876aa]">&nbsp;class</span>=<span class="text-[#6a8759]">"space-y-2 max-w-lg mx-auto"</span>
        <span class="text-[#9876aa]">&nbsp;@submit</span>=<span class="text-[#6a8759]">"onSubmit"</span>
        <span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&lt;div</span>
        <span class="text-[#9876aa]">&nbsp;class</span>=<span class="text-[#6a8759]">"space-y-1"</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&lt;</span><span class="text-[#2fb8a1]">UFormField</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&emsp;&lt;template</span>
        <span class="text-[#9876aa]">&nbsp;#label</span>
        <span class="text-[#e8bf6a]">&gt;</span>Jméno<span class="text-[#e8bf6a]">&lt;/label&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&emsp;&lt;</span><span class="text-[#2fb8a1]">Field</span>
        <span class="text-[#9876aa]">&nbsp;name</span>=<span class="text-[#6a8759]">"name"</span>
        <span class="text-[#9876aa]">&nbsp;v-slot</span>=<span class="text-[#6a8759]">"{ field, errorMessage }"</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&emsp;&emsp;&lt;</span><span class="text-[#2fb8a1]">UInput</span>
        <span class="text-[#9876aa]">&nbsp;v-bind</span>=<span class="text-[#6a8759]">"field"</span>
        <span class="text-[#9876aa]">&nbsp;class</span>=<span class="text-[#6a8759]">"w-lg"</span>
        <span class="text-[#e8bf6a]">/&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&emsp;&emsp;&lt;p</span>
        <span class="text-[#9876aa]">&nbsp;v-if</span>=<span class="text-[#6a8759]">"errorMessage"</span>
        <span class="text-[#9876aa]">&nbsp;class</span>=<span class="text-[#6a8759]">"text-red-500 text-sm"</span
        ><span class="text-[#e8bf6a]">&gt;</span>{{ '{{ errorMessage' }} {{ ' }' }} {{ '}'
        }}<span class="text-[#e8bf6a]">&lt;/p&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&emsp;&lt;/</span><span class="text-[#2fb8a1]">Field</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&emsp;&lt;/</span><span class="text-[#2fb8a1]">UFormField</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&emsp;&lt;/div&gt;</span>
      </div>
      <div class="line-number">
        <span class="text-[#e8bf6a]">&lt;/</span><span class="text-[#2fb8a1]">Form</span
        ><span class="text-[#e8bf6a]">&gt;</span>
      </div>
    </CodeBox>
  </div>
</template>

<script setup lang="ts">
import type { SubmissionHandler } from 'vee-validate'
import { Form, Field } from 'vee-validate'
import CodeBox from '~/components/CodeBox.vue'
import { toTypedSchema } from '@vee-validate/valibot'
import { valibotSchema, FormData } from '~/schemas/valibot'

const formData = ref<FormData>({
  name: '',
  email: '',
  //url: '',
  password: '',
  confirmPassword: '',
  age: 0,
  terms: false,
})

const toast = useToast()

const schema = toTypedSchema(valibotSchema)

const onSubmit: SubmissionHandler<FormData> = (values) => {
  toast.add({
    title: '✅ Odesláno:',
    description: `Formulář odeslal ${values.name}`,
    color: 'success',
  })
}
</script>
