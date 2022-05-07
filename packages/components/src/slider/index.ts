import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Slider as VanSlider } from 'vant'
import { PreviewText } from '../preview-text'

const TransformVanSlider = transformComponent(VanSlider, {
  change: 'modelValue',
})

export const Slider = connect(
  TransformVanSlider,
  mapProps({ readOnly: 'readonly', value: 'modelValue' }),
  mapReadPretty(PreviewText.Slider)
)
export default Slider
