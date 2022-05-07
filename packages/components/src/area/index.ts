import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { ref, defineComponent } from 'vue'
import { Popup as VanPopup, Area as VanArea } from 'vant'
import { PreviewText } from '../preview-text'
import FormItem from '../form-item'
import { stylePrefix } from '../__builtins__/configs'

const BaseArea = observer(
  defineComponent({
    name: 'FArea',
    setup(props, { attrs, emit, slots }) {
      const {
        formItemProps = {},
        popupProps = {},
        areaProps = {},
        fieldListeners = {},
        popupListeners = {},
        areaListeners = {},
      } = attrs as any
      const { format } = formItemProps
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
                  class: { [`${stylePrefix}-input-asterisk`]: attrs.asterisk },
                  attrs: {
                    modelValue: format ? format(attrs.value) : attrs.value,
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
                      VanArea,
                      {
                        attrs: {
                          ...areaProps,
                        },
                        on: {
                          cancel: () => {
                            show.value = false
                          },
                          confirm: (val: any) => {
                            emit('change', val)
                            show.value = false
                          },
                          ...areaListeners,
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

export const Area = connect(
  BaseArea,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Area)
)

export default Area
