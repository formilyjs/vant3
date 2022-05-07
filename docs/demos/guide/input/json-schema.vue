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
import { Form, FormItem, Input, Submit } from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      title: '输入框',
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        errorMessageAlign: 'right',
      },
      'x-component': 'Input',
      'x-component-props': {
        placeholder: '请输入',
        inputAlign: 'right',
        showWordLimit: true,
        maxlength: 50,
      },
      'x-validator': {
        required: true,
        message: '输入框内容不可为空',
      },
    },
    textarea: {
      type: 'string',
      title: '文本框',
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        errorMessageAlign: 'right',
      },
      'x-component': 'Input',
      'x-component-props': {
        type: 'textarea',
        placeholder: '请输入',
        inputAlign: 'right',
        showWordLimit: true,
        maxlength: 100,
      },
      'x-validator': {
        required: true,
        message: '文本框内容不可为空',
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
    Submit,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
