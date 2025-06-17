<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-1">
      <UNavigationMenu
        class="p-4 border-r border-gray-300 data-[orientation=vertical]:w-64"
        color="neutral"
        orientation="vertical"
        :items="items"
        highlight
        highlight-color="primary"
      >
        <template #logo> Validations </template>
      </UNavigationMenu>
      <div class="w-full p-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '#ui/components/NavigationMenu.vue'

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: 'admin',
      class: 'text-lg font-bold text-gray-600 tracking-wide',
      slot: 'logo' as const,
      type: 'link',
      to: '/',
    },
    {
      label: 'Yup',
      to: '/yup',
    },
    {
      label: 'Zod',
      to: '/zod',
    },
    {
      label: 'Superstruct',
      to: '/superstruct',
    },
    {
      label: 'Vest',
      to: '/vest',
    },
    {
      label: 'VeeValidate with Yup',
      to: '/veevalidateyup',
    },
    {
      label: 'Veevalidate with Zod',
      to: '/veevalidatezod',
    },
    {
      label: 'Veevalidate with Valibot',
      to: '/veevalidatevalibot',
    },
    {
      label: 'Veevalidate with Zod and useForm',
      to: '/veevalidatezoduseform',
    },
    {
      label: 'Dynamic form with VeeValidate',
      to: '/dynamicveevalidate',
    },
    {
      label: 'Formkit',
      to: '/formkit',
    },
  ],
])
</script>
