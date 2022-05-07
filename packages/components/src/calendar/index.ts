import { observer } from '@formily/reactive-vue'
import { connect, mapProps, mapReadPretty, h } from '@formily/vue'
import { ref, defineComponent } from 'vue'
import { Calendar as VanCalendar } from 'vant'
import FormItem from '../form-item'
import { PreviewText } from '../preview-text'

const BaseCalendar = observer(
  defineComponent({
    name: 'FBaseCalendar',
    setup(props, { attrs, emit, slots }) {
      const {
        formItemProps = {},
        calendarProps = {},
        fieldListeners = {},
        calendarListeners = {},
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
                    ...fieldListeners,
                  },
                },
                slots
              ),
              h(
                VanCalendar,
                {
                  attrs: {
                    show: show.value,
                    ...calendarProps,
                  },
                  on: {
                    close: () => {
                      show.value = false
                    },
                    confirm: (val: any) => {
                      emit('change', val)
                      show.value = false
                    },
                  },
                  ...calendarListeners,
                },
                {}
              ),
            ],
          }
        )
      }
    },
  })
)

export const Calendar = connect(
  BaseCalendar,
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Calendar)
)

export default Calendar
