import { defineComponent, computed, toRef, Ref } from 'vue'
import {
  createContext,
  resolveComponent,
  useContext,
  composeExport,
} from '../__builtins__/shared'
import { Field } from '@formily/core'
import { observer } from '@formily/reactive-vue'
import { h, useField, useFieldSchema } from '@formily/vue'
import { isArr, isValid, isEmpty } from '@formily/shared'
import { stylePrefix } from '../__builtins__/configs'
import { Space } from '../space'
import {
  Switch as VanSwitch,
  Rate as VanRate,
  Uploader as VanUploader,
  Tag,
  Field as VanInput,
} from 'vant'

const prefixCls = `${stylePrefix}-preview-text`
const PlaceholderContext = createContext('N/A')

export const usePlaceholder = (value?: Ref<any>) => {
  const placeholderCtx = useContext(PlaceholderContext)
  const placeholder = computed(() => {
    return isValid(value?.value) && value?.value !== ''
      ? value?.value
      : resolveComponent(placeholderCtx.value as any) || 'N/A'
  })
  return placeholder
}

const Input = observer(
  defineComponent({
    name: 'FPreviewTextInput',
    props: ['value'],
    setup(props, { attrs }) {
      const fieldRef = useField<Field>()
      const field = fieldRef.value
      const value = toRef(props, 'value')
      const placeholder = usePlaceholder(value)
      return () => {
        return h(
          'div',
          {
            class: [prefixCls, `${stylePrefix}-preview-input`],
            style: attrs.style,
            attrs: {
              ...attrs,
              ...props,
              disabled: true,
            },
          },
          {
            default: () => [placeholder.value],
          }
        )
      }
    },
  })
)

const Checkbox = observer(
  defineComponent({
    name: 'FPreviewTextCheckbox',
    props: [],
    setup(_props, { attrs }) {
      const fieldRef = useField<Field>()
      const field = fieldRef.value
      const props = attrs as any
      const dataSource: any[] = field?.dataSource?.length
        ? field.dataSource
        : props?.options?.length
        ? props.options
        : []
      const placeholder = usePlaceholder()
      const getSelected = () => {
        const value = props.value

        if (props.multiple) {
          return isArr(value)
            ? value.map((val) => ({ label: val, value: val }))
            : []
        } else {
          return !isEmpty(value) ? [{ label: value, value }] : []
        }
      }

      const getLabels = () => {
        const selected = getSelected()
        if (!selected.length) {
          return h(
            Tag,
            {},
            {
              default: () => placeholder.value,
            }
          )
        }
        return selected.map(({ value, label }, key) => {
          const text =
            dataSource?.find((item) => item.name === value)?.label || label
          return h(
            Tag,
            {
              key,
              props: {
                size: 'medium',
                type: 'primary',
              },
            },
            {
              default: () => text || placeholder.value,
            }
          )
        })
      }

      return () => {
        return h(
          Space,
          {
            class: [prefixCls],
            style: attrs.style,
          },
          {
            default: () => getLabels(),
          }
        )
      }
    },
  })
)

const Switch = observer(
  defineComponent({
    name: 'FPreviewTextSwitch',
    setup(props, { attrs, slots }) {
      return () => {
        return h(
          VanSwitch,
          {
            class: [prefixCls],
            style: attrs.style,
            attrs: {
              size: 20,
              ...attrs,
              modelValue: attrs.value,
              disabled: true,
            },
          },
          slots
        )
      }
    },
  })
)

const Stepper = observer(
  defineComponent({
    name: 'FPreviewTextStepper',
    setup(props, { attrs }) {
      const placeholder = usePlaceholder()
      return () => {
        return h(
          'div',
          {
            class: [prefixCls],
            style: attrs.style,
            attrs: {
              ...attrs,
              disabled: true,
            },
          },
          {
            default: () => [attrs.value || placeholder.value],
          }
        )
      }
    },
  })
)

const Rate = observer(
  defineComponent({
    name: 'FPreviewTextRate',
    setup(props, { attrs, slots }: any) {
      const placeholder = usePlaceholder()
      return () => {
        return attrs.value
          ? h(
              VanRate,
              {
                class: [prefixCls],
                style: attrs.style,
                attrs: {
                  size: 20,
                  count: Math.ceil(attrs?.value && Number(attrs?.value)),
                  modelValue: attrs?.value,
                  ...attrs,
                  disabled: true,
                },
              },
              slots
            )
          : h(
              'div',
              {
                class: [prefixCls],
                style: attrs.style,
              },
              {
                default: () => [placeholder.value],
              }
            )
      }
    },
  })
)

const Slider = observer(
  defineComponent({
    name: 'FPreviewTextSlider',
    setup(props, { attrs }) {
      const placeholder = usePlaceholder()
      return () => {
        return h(
          'div',
          {
            class: [prefixCls],
            style: attrs.style,
            attrs: {
              ...attrs,
              disabled: true,
            },
          },
          {
            default: () => [attrs.value || placeholder.value],
          }
        )
      }
    },
  })
)

const Uploader = observer(
  defineComponent({
    name: 'FPreviewTextUploader',
    setup(props, { attrs, slots, emit }) {
      const placeholder = usePlaceholder()
      return () => {
        return (attrs.value as [])?.length
          ? h(
              VanUploader,
              {
                class: [prefixCls],
                style: attrs.style,
                attrs: {
                  ...attrs,
                  deletable: false,
                  showUpload: false,
                  modelValue: attrs.value,
                  disabled: true,
                },
                on: emit,
              },
              slots
            )
          : h(
              'div',
              {
                class: [prefixCls],
                style: attrs.style,
                attrs,
              },
              {
                default: () => [placeholder.value],
              }
            )
      }
    },
  })
)

const Picker = observer(
  defineComponent({
    name: 'FPreviewTextPicker',
    setup(props, { attrs }) {
      const fieldRef = useFieldSchema()
      const { formItemProps = {} } = attrs as any
      const placeholder = usePlaceholder()
      return () => {
        return h(
          VanInput,
          {
            class: [prefixCls],
            style: attrs.style,
            attrs: {
              ...formItemProps,
              disabled: true,
              label: fieldRef.value.title || '',
            },
          },
          {
            input: () => attrs.value || placeholder.value,
          }
        )
      }
    },
  })
)

const DatetimePicker = observer(
  defineComponent({
    name: 'FPreviewTextDatetimePicker',
    setup(props, { attrs }) {
      const fieldRef = useFieldSchema()
      const { formItemProps = {} } = attrs as any
      const placeholder = usePlaceholder()
      return () => {
        return h(
          VanInput,
          {
            class: [prefixCls],
            style: attrs.style,
            attrs: {
              ...formItemProps,
              disabled: true,
              label: fieldRef.value.title || '',
            },
          },
          {
            input: () => attrs.value || placeholder.value,
          }
        )
      }
    },
  })
)

const Calendar = observer(
  defineComponent({
    name: 'FPreviewTextCalendar',
    setup(props, { attrs }) {
      const fieldRef = useFieldSchema()
      const { formItemProps = {} } = attrs as any
      const placeholder = usePlaceholder()
      const { format } = formItemProps
      const echoVal =
        format && attrs.value
          ? format(attrs.value)
          : attrs.value || placeholder.value

      return () => {
        return h(
          VanInput,
          {
            class: [prefixCls],
            style: attrs.style,
            attrs: {
              ...formItemProps,
              disabled: true,
              label: fieldRef.value.title || '',
            },
          },
          {
            input: () => echoVal,
          }
        )
      }
    },
  })
)

const Cascader = observer(
  defineComponent({
    name: 'FPreviewTextCascader',
    setup(props, { attrs }) {
      const fieldRef = useFieldSchema()
      const { formItemProps = {} } = attrs as any
      const placeholder = usePlaceholder()
      const { format } = formItemProps
      const echoVal =
        format && attrs.value
          ? format(attrs.value)
          : attrs.value || placeholder.value
      return () => {
        return h(
          VanInput,
          {
            class: [prefixCls],
            style: attrs.style,
            attrs: {
              ...formItemProps,
              disabled: true,
              label: fieldRef.value.title || '',
            },
          },
          {
            input: () => echoVal,
          }
        )
      }
    },
  })
)

const Area = observer(
  defineComponent({
    name: 'FPreviewTextArea',
    setup(props, { attrs }) {
      const fieldRef = useFieldSchema()
      const { formItemProps = {} } = attrs as any
      const placeholder = usePlaceholder()
      return () => {
        return h(
          VanInput,
          {
            class: [prefixCls],
            style: attrs.style,
            attrs: {
              ...formItemProps,
              disabled: true,
              label: fieldRef.value.title || '',
            },
          },
          {
            input: () => attrs.value || placeholder.value,
          }
        )
      }
    },
  })
)

const Text = defineComponent<any>({
  name: 'FPreviewText',
  setup(_props, { attrs }) {
    const placeholder = usePlaceholder()

    return () => {
      return h(
        'div',
        {
          class: [prefixCls],
          style: attrs.style,
        },
        {
          default: () => placeholder.value,
        }
      )
    }
  },
})

export const PreviewText = composeExport(Text, {
  Input,
  Checkbox,
  Switch,
  Stepper,
  Rate,
  Slider,
  Uploader,
  Picker,
  DatetimePicker,
  Area,
  Calendar,
  Cascader,
  Placeholder: PlaceholderContext.Provider,
  usePlaceholder,
})

export default PreviewText
