<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Cascader, Submit } from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    cascader: {
      type: 'string',
      title: '地区',
      'x-component': 'Cascader',
      'x-component-props': {
        formItemProps: {
          placeholder: '请选择所在地区',
          format: (data) => {
            const { selectedOptions = [] } = data || {}
            return selectedOptions.map((option) => option.text).join('/')
          },
        },
        popupProps: {},
        cascaderProps: {
          options: [
            {
              text: '浙江省',
              value: '330000',
              children: [{ text: '杭州市', value: '330100' }],
            },
            {
              text: '江苏省',
              value: '320000',
              children: [{ text: '南京市', value: '320100' }],
            },
          ],
        },
        fieldListeners: {},
        popupListeners: {},
        cascaderListeners: {
          change: (...args) => {
            console.log('onChange args: ', args)
          },
        },
      },
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Cascader,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
