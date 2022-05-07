import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { ref, defineComponent } from 'vue'
import { Cascader as VanCascader, Popup as VanPopup } from 'vant'
import FormItem from '../form-item'
import { PreviewText } from '../preview-text'

const BaseCascader = observer(
  defineComponent({
    name: 'FBaseCascader',
    setup(props: any, { attrs, emit, slots }: any) {
      const {
        formItemProps = {},
        popupProps = {},
        cascaderProps = {},
        popupListeners = {},
        cascaderListeners = {},
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
                  attrs: {
                    modelValue: format ? format(attrs.value) : attrs.value,
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
                      VanCascader,
                      {
                        attrs: {
                          ...cascaderProps,
                        },
                        on: {
                          close: () => {
                            show.value = false
                          },
                          finish: (val: any) => {
                            emit('change', val)
                            show.value = false
                          },
                          ...cascaderListeners,
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

export const Cascader = connect(
  BaseCascader,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Cascader)
)

export default Cascader
