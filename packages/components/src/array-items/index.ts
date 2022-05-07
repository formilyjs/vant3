import { defineComponent, h } from 'vue'
import { ArrayField } from '@formily/core'
import { useField, useFieldSchema, RecursionField } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { ISchema } from '@formily/json-schema'
import { ArrayBase } from '../array-base'
import { stylePrefix } from '../__builtins__/configs'
import { composeExport } from '../__builtins__/shared'
const isAdditionComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Addition') > -1
}

const ArrayItemsInner = observer(
  defineComponent({
    name: 'FArrayItems',
    setup(props, { attrs }) {
      const fieldRef = useField<ArrayField>()
      const schemaRef = useFieldSchema()
      const prefixCls = `${stylePrefix}-array-items`
      const { getKey, keyMap } = ArrayBase.useKey(schemaRef.value)

      return () => {
        const field = fieldRef.value
        const schema = schemaRef.value
        const dataSource = Array.isArray(field.value) ? field.value.slice() : []
        const renderItems = () => {
          const myItems = dataSource?.map((item: any, index: any) => {
            const items = Array.isArray(schema.items)
              ? schema.items[index] || schema.items[0]
              : schema.items
            const key = getKey(item, index)
            return h(
              ArrayBase.Item,
              {
                key,
                index,
                record: item,
              },
              {
                default: () =>
                  h(
                    RecursionField,
                    {
                      schema: items,
                      name: index,
                    },
                    {}
                  ),
              }
            )
          })
          return h(
            'div',
            {},
            {
              default: () => myItems,
            }
          )
        }
        const renderAddition = () => {
          return schema.reduceProperties((addition: any, schema: any) => {
            if (isAdditionComponent(schema)) {
              return h(
                RecursionField,
                {
                  schema,
                  name: 'addition',
                },
                {}
              )
            }
            return addition
          }, null)
        }

        return h(
          ArrayBase,
          {
            keyMap,
          },
          {
            default: () =>
              h(
                'div',
                {
                  class: [prefixCls],
                },
                {
                  default: () => [renderAddition(), renderItems()],
                }
              ),
          }
        )
      }
    },
  })
)

const ArrayItemsItem = defineComponent({
  name: 'FArrayItemsItem',
  props: ['type'],
  setup(props, { attrs, slots }) {
    const prefixCls = `${stylePrefix}-array-items`

    return () =>
      h(
        'div',
        {
          class: [`${prefixCls}-${props.type}`],
          attrs: {
            ...attrs,
          },
        },
        slots
      )
  },
})

const ArrayItemsFirstItem = defineComponent({
  name: 'FArrayItemsFirstItem',
  setup(props, { attrs }) {
    const index = ArrayBase.useIndex().value + 1
    const prefixCls = `${stylePrefix}-array-items`
    return () =>
      h(
        'div',
        {
          class: [`${prefixCls}-first`],
          attrs: { ...attrs },
          title: attrs.itemTitle + index,
          style: { display: 'flex', alignItmes: 'center' },
        },
        {
          default: () =>
            attrs?.titleImg
              ? [
                  h('img', {
                    src: attrs?.titleImg,
                    width: 20,
                    height: 20,
                    style: { 'margin-right': '5px' },
                  }),
                  h('span', [`${attrs.itemTitle + index}`]),
                ]
              : [`${attrs.itemTitle + index}`],
        }
      )
  },
})

export const ArrayItems = composeExport(ArrayItemsInner, {
  FirstItem: ArrayItemsFirstItem,
  Item: ArrayItemsItem,
  Index: ArrayBase.Index,
  Addition: ArrayBase.Addition,
  Remove: ArrayBase.Remove,
  useArray: ArrayBase.useArray,
  useIndex: ArrayBase.useIndex,
  useRecord: ArrayBase.useRecord,
})

export default ArrayItems
