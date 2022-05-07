import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Switch as VanSwitch } from 'vant'
import { PreviewText } from '../preview-text'

const TransformVanSwitch = transformComponent(VanSwitch, {
  change: 'modelValue',
})

export const Switch = connect(
  TransformVanSwitch,
  mapProps({ readOnly: 'readonly', value: 'modelValue' }),
  mapReadPretty(PreviewText.Switch)
)

export default Switch
