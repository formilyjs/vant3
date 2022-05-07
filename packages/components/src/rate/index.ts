import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Rate as VanRate } from 'vant'
import { PreviewText } from '../preview-text'

const TransformVanRate = transformComponent(VanRate, {
  change: 'input',
})

export const Rate = connect(
  TransformVanRate,
  mapProps({ readOnly: 'readonly', value: 'modelValue' }),
  mapReadPretty(PreviewText.Rate)
)
export default Rate
