import { defineComponent } from 'vue'
import { h } from '@formily/vue'
import { stylePrefix } from '../__builtins__/configs'

export type SpaceProps = {
  size: 'small' | 'middle' | 'large' | number
  direction: 'horizontal' | 'vertical'
  align: 'start' | 'end' | 'center' | 'baseline'
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
} as any

export const Space = defineComponent({
  name: 'FSpace',
  props: ['size', 'direction', 'align'],
  setup(props, { slots }) {
    return () => {
      const { align, size = 'small', direction = 'horizontal' } = props

      const prefixCls = `${stylePrefix}-space`
      const children = slots.default?.() as any
      let items: any[] = []
      if (Array.isArray(children)) {
        if (children.length === 1) {
          if ((children[0].tag as string)?.endsWith('Fragment')) {
            // Fragment hack
            items = (children[0].componentOptions as { children: any[] })
              ?.children
          } else {
            items = children
          }
        } else {
          items = children
        }
      }
      const len = items.length

      if (len === 0) {
        return null
      }

      const mergedAlign =
        align === undefined && direction === 'horizontal' ? 'center' : align

      const someSpaceClass = {
        [prefixCls]: true,
        [`${prefixCls}-${direction}`]: true,
        [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
      }

      const itemClassName = `${prefixCls}-item`
      const marginDirection = 'marginRight' // directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';

      const renderItems = items.map((child, i) =>
        h(
          'div',
          {
            class: itemClassName,
            key: `${itemClassName}-${i}`,
            style:
              i === len - 1
                ? {}
                : {
                    [direction === 'vertical'
                      ? 'marginBottom'
                      : marginDirection]:
                      typeof size === 'string'
                        ? `${spaceSize[size]}px`
                        : `${size}px`,
                  },
          },
          { default: () => [child] }
        )
      )

      return h('div', { class: someSpaceClass }, { default: () => renderItems })
    }
  },
})

export default Space
