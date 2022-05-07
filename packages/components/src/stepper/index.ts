import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Stepper as VanStepper } from 'vant'
import { PreviewText } from '../preview-text'

const TransformVanStepper = transformComponent(VanStepper, {
  change: 'input',
})

export const Stepper = connect(
  TransformVanStepper,
  mapProps({ readOnly: 'readonly', value: 'modelValue' }),
  mapReadPretty(PreviewText.Stepper)
)

export default Stepper
