// formkit.config.ts
import { defaultConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme'
import { noJanNovak } from '~/rules/formkitCustomRules'

export default defaultConfig({
  config: {
    rootClasses,
  },
  rules: {
    noJanNovak: noJanNovak,
  },
})
