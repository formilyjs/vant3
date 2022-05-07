/* eslint-disable */
import {
  defineComponent,
  provide,
  InjectionKey,
  Ref,
  inject,
  toRefs,
  ref,
  onBeforeUnmount,
  PropType,
} from 'vue'
import { Fragment, useField, useFieldSchema, h } from '@formily/vue'
import { isValid, uid, clone } from '@formily/shared'
import { ArrayField } from '@formily/core'
import { stylePrefix } from '../__builtins__/configs'

import type { ButtonProps as VantButtonProps } from 'vant'
import { Button as VantButton } from 'vant'
import type { Schema } from '@formily/json-schema'
import { composeExport } from '../__builtins__/shared'
export interface IArrayBaseAdditionProps extends VantButtonProps {
  title?: string
  method?: 'push' | 'unshift'
  defaultValue?: any
}

export interface IArrayBaseProps {
  // disabled?: boolean
  keyMap?: WeakMap<Object, string> | string[] | null
}

export interface IArrayBaseItemProps {
  index: number
  record: any
}

export interface IArrayBaseContext {
  field: Ref<ArrayField>
  schema: Ref<Schema>
  props: IArrayBaseProps
  keyMap?: WeakMap<Object, string> | string[] | null
}

const ArrayBaseSymbol: InjectionKey<IArrayBaseContext> =
  Symbol('ArrayBaseContext')
const ItemSymbol: InjectionKey<IArrayBaseItemProps> = Symbol('ItemContext')

const useArray = () => {
  return inject(ArrayBaseSymbol, null)
}

const useIndex = (index?: number) => {
  const { index: indexRef } = toRefs(inject(ItemSymbol) as any)

  return indexRef ?? ref(index)
}

const useRecord = (record?: number) => {
  const { record: recordRef } = toRefs(inject(ItemSymbol) as any)
  return recordRef ?? ref(record)
}

const isObjectValue = (schema: Schema): any => {
  if (Array.isArray(schema?.items)) return isObjectValue(schema.items[0])

  if (schema?.items?.type === 'array' || schema?.items?.type === 'object') {
    return true
  }
  return false
}

const useKey = (schema: Schema) => {
  const isObject = isObjectValue(schema)
  let keyMap: WeakMap<Object, string> | string[] = []

  if (isObject) {
    keyMap = new WeakMap()
  } else {
    keyMap = []
  }

  onBeforeUnmount(() => {
    keyMap = []
  })

  return {
    keyMap,
    getKey: (record: any, index?: number) => {
      if (keyMap instanceof WeakMap) {
        if (!keyMap.has(record)) {
          keyMap.set(record, uid())
        }
        return `${keyMap.get(record)}-${index}`
      }
      let myKeyMap = keyMap as any
      if (!myKeyMap[index as any]) {
        myKeyMap[index as any] = uid()
      }

      return `${myKeyMap[index as any]}-${index}`
    },
  }
}

const getDefaultValue = (defaultValue: any, schema: Schema): any => {
  if (isValid(defaultValue)) return clone(defaultValue)
  if (Array.isArray(schema?.items))
    return getDefaultValue(defaultValue, schema.items[0])
  if (schema?.items?.type === 'array') return []
  if (schema?.items?.type === 'boolean') return true
  if (schema?.items?.type === 'date') return ''
  if (schema?.items?.type === 'datetime') return ''
  if (schema?.items?.type === 'number') return 0
  if (schema?.items?.type === 'object') return {}
  if (schema?.items?.type === 'string') return ''
  return null
}

const ArrayBaseInner = defineComponent({
  name: 'ArrayBase',
  emits: ['change', 'focus', 'blur'],
  props: {
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
    keyMap: {
      type: [WeakMap, Array] as PropType<WeakMap<Object, string> | string[]>,
    },
  },
  setup(props, { slots, emit }) {
    const field = useField<ArrayField>()
    const schema = useFieldSchema()
    provide(ArrayBaseSymbol as any, {
      field,
      schema,
      props,
      keyMap: props.keyMap,
    })
    return () => {
      return h('div', {}, slots)
    }
  },
})

const ArrayBaseItem = defineComponent({
  name: 'ArrayBaseItem',
  emits: ['change', 'focus', 'blur'],
  props: ['index', 'record'],
  setup(props: IArrayBaseItemProps, { slots, emit }) {
    provide(ItemSymbol, props)
    return () => {
      return h('div', {}, slots)
    }
  },
})

const ArrayBaseIndex = defineComponent({
  name: 'ArrayBaseIndex',
  setup(props, { attrs }) {
    const index = useIndex()
    const prefixCls = `${stylePrefix}-array-base`
    return () => {
      return h(
        'span',
        {
          class: `${prefixCls}-index`,
          attrs: { ...attrs },
        },
        {
          default: () => [`#${index.value + 1}.`],
        }
      )
    }
  },
})

const ArrayBaseAddition = defineComponent({
  name: 'ArrayBaseAddition',
  emits: ['change', 'focus', 'blur'],
  props: ['title', 'method', 'defaultValue'],

  setup(props, { attrs, emit }) {
    const self = useField()
    const array = useArray()
    const index = useIndex()
    const prefixCls = `${stylePrefix}-array-base`
    // 如果index大于0的时候，只显示第一个
    if (index.value > 0) {
      return () => h('div', {}, {})
    }
    return () => {
      if (!array) return null
      // if (array?.field.value.pattern !== 'editable') return null
      return h(
        'div',
        {
          class: `${prefixCls}-addition`,
          attrs: {
            ...props,
            ...attrs,
            style: {
              width: '100%',
              'text-align': 'center',
              'font-size': '14px',
              color: '#3480FF',
            },
          },
          onClick: (e: any) => {
            // if (array.props?.disabled) return
            const defaultValue = getDefaultValue(
              props.defaultValue,
              array?.schema.value
            )

            if (props.method === 'unshift') {
              array?.field?.value.unshift(defaultValue)
            } else {
              array?.field?.value.push(defaultValue)
            }
          },
        },
        {
          default: () => [`+   ${self.value.title || props.title}`],
        }
      )
    }
  },
})

const ArrayBaseRemove = defineComponent({
  name: 'ArrayBaseRemove',
  emits: ['change', 'focus', 'blur'],
  props: ['title', 'index'],
  setup(props, { attrs, emit }) {
    const self = useField()
    const indexRef = useIndex()
    const base = useArray()
    const prefixCls = `${stylePrefix}-array-base`
    return () => {
      if (base?.field.value.pattern !== 'editable') return null
      return (
        base?.field?.value?.value?.length > 1 &&
        h(
          VantButton,
          {
            attrs: {
              icon: 'clear',
              ...props,
              ...attrs,
            },
            class: `${prefixCls}-remove`,
            style: {
              border: 0,
              height: 'auto',
            },
            onClick: (e: MouseEvent) => {
              e.stopPropagation()
              if (Array.isArray(base?.keyMap)) {
                base?.keyMap?.splice(indexRef.value, 1)
              }
              base?.field.value.remove(indexRef.value)
              // base?.field.value.value.filter((i, index) => index !== indexRef.value)
              // console.log('value', value, base?.field.value.value)
            },
          },
          {
            default: () => [self.value.title || props.title],
          }
        )
      )
    }
  },
})

export type ArrayBaseMixins = {
  Addition?: typeof ArrayBaseAddition
  Remove?: typeof ArrayBaseRemove
  Index?: typeof ArrayBaseIndex
  useArray?: typeof useArray
  useIndex?: typeof useIndex
  useRecord?: typeof useRecord
}

export const ArrayBase = composeExport(ArrayBaseInner, {
  Index: ArrayBaseIndex,
  Item: ArrayBaseItem,
  Addition: ArrayBaseAddition,
  Remove: ArrayBaseRemove,
  useArray: useArray,
  useIndex: useIndex,
  useKey: useKey,
  useRecord: useRecord,
})

export default ArrayBase
