import { FormKitNode } from '@formkit/core'

export const noJanNovak = (node: FormKitNode) => {
  return node.value !== 'Jan Novák'
}
