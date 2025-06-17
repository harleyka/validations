<template>
  <div class="code-block my-16 max-w-4xl mx-auto overflow-hidden">
    <div class="code-header flex items-center px-4 py-2 bg-gray-700 text-white rounded-t-lg">
      <span class="text-sm font-mono">Form.vue</span>
    </div>
    <div class="relative p-0 py-2 m-0 bg-[#2b2b2b] text-[#a9b7c6] rounded-b-lg overflow-auto">
      <div
        class="absolute left-0 top-2 bottom-0 w-12 bg-[#313335] flex flex-col text-[#606366] text-right pr-2 select-none overflow-hidden"
      >
        <div v-for="item in 10" :key="item" class="line-number">{{ item }}</div>
      </div>
      <div class="block pl-16 font-mono text-sm">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-block {
  font-family: 'JetBrains Mono', monospace;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

<style>
.line-number {
  height: 1.5rem;
  line-height: 1.5rem;
}
</style>
