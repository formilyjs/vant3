import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { ref, defineComponent } from 'vue'
import { Picker as VanPicker, Popup as VanPopup } from 'vant'
import FormItem from '../form-item'
import { PreviewText } from '../preview-text'

const BasePicker = observer(
  defineComponent({
    name: 'FBasePicker',
    setup(props, { attrs, emit, slots }) {
      const {
        formItemProps = {},
        popupProps = {},
        pickerProps = {},
        popupListeners = {},
        pickerListeners = {},
      } = attrs as any
      const show = ref(false)

      return () => {
        return h(
          'div',
          {},
          {
            default: () => [
              h(
                FormItem,
                {
                  attrs: {
                    modelValue: attrs.value,
                    ...formItemProps,
                  },
                  on: {
                    click: () => {
                      show.value = true
                    },
                  },
                },
                slots
              ),
              h(
                VanPopup,
                {
                  attrs: {
                    show: show.value,
                    round: true,
                    position: 'bottom',
                    ...popupProps,
                  },
                  on: {
                    input: (val: any) => {
                      show.value = val
                    },
                    ...popupListeners,
                  },
                },
                {
                  default: () => [
                    h(
                      VanPicker,
                      {
                        attrs: {
                          showToolbar: true,
                          ...pickerProps,
                        },
                        on: {
                          cancel: () => {
                            show.value = false
                          },
                          confirm: (val: string) => {
                            emit('change', val)
                            show.value = false
                          },
                          ...pickerListeners,
                        },
                      },
                      {}
                    ),
                  ],
                }
              ),
            ],
          }
        )
      }
    },
  })
)

export const Picker = connect(
  BasePicker,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Picker)
)

export default Picker
