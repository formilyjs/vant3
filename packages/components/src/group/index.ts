import { connect, mapProps, h } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { defineComponent } from 'vue'
import { CellGroup as VanCellGroup } from 'vant'

const BaseArea = observer(
  defineComponent({
    name: 'FBaseArea',
    setup(props, { slots }) {
      return () =>
        h(
          VanCellGroup,
          {
            inset: true,
            style: {
              'margin-bottom': '10px',
            },
            ...props,
          },
          slots
        )
    },
  })
)

export const Group = connect(BaseArea, mapProps({ readOnly: 'readonly' }))

export default Group
