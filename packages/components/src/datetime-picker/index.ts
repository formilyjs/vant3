import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { ref, defineComponent } from 'vue'
import { DatetimePicker as VanDatetimePicker, Popup as VanPopup } from 'vant'
// Field as VanFormItem
import FormItem from '../form-item'
import { PreviewText } from '../preview-text'

const BaseDatetimePicker = observer(
  defineComponent({
    name: 'FBaseDatetimePicker',
    setup(props, { attrs, emit, slots }) {
      const {
        formItemProps = {},
        popupProps = {},
        datetimePickerProps = {},
        fieldListeners = {},
        popupListeners = {},
        datetimePickerListeners = {},
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
                    ...fieldListeners,
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
                      VanDatetimePicker,
                      {
                        attrs: {
                          showToolbar: true,
                          ...datetimePickerProps,
                        },
                        on: {
                          cancel: () => {
                            show.value = false
                          },
                          confirm: (val: any) => {
                            emit('change', val)
                            show.value = false
                          },
                          ...datetimePickerListeners,
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

export const DatetimePicker = connect(
  BaseDatetimePicker,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.DatetimePicker)
)

export default DatetimePicker
