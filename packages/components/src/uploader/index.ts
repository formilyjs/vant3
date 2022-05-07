import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { defineComponent } from 'vue'
import { Uploader as VanUploader } from 'vant'
import { PreviewText } from '../preview-text'

const BaseUploader = observer(
  defineComponent({
    name: 'FBaseUploader',
    props: ['onChange'],
    setup(props, { attrs, slots, emit }) {
      return () => {
        return h(
          VanUploader,
          {
            attrs: {
              ...attrs,
              modelValue: attrs.value,
            },
            on: { ...emit, 'update:modelValue': props.onChange },
          },
          slots
        )
      }
    },
  })
)

export const Uploader = connect(
  BaseUploader,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Uploader)
)

export default Uploader
