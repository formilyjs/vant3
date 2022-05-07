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
import { Form, FormItem, Input, Group, Submit } from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    group1: {
      type: 'void',
      'x-decorator': 'Group',
      properties: {
        input: {
          type: 'string',
          title: '输入框',
          'x-component': 'Input',
          'x-decorator': 'FormItem',
          'x-component-props': { placeholder: '请输入' },
        },
        textarea: {
          type: 'string',
          title: '文本框',
          'x-component': 'Input',
          'x-decorator': 'FormItem',
          'x-component-props': {
            autosize: true,
            type: 'textarea',
            placeholder: '请输入',
          },
        },
      },
    },
    group2: {
      type: 'void',
      'x-decorator': 'Group',
      properties: {
        input1: {
          type: 'string',
          title: '输入框',
          'x-component': 'Input',
          'x-decorator': 'FormItem',
          'x-component-props': { placeholder: '请输入' },
        },
        input2: {
          type: 'string',
          title: '输入框',
          'x-component': 'Input',
          'x-decorator': 'FormItem',
          'x-component-props': { placeholder: '请输入' },
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
    Input,
    Group,
    Submit,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
