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
import { Form, FormItem, Checkbox, Submit } from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    multiple: {
      type: 'array',
      title: '多选',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox.Group',
      enum: [
        {
          label: '选项1',
          name: 1,
        },
        {
          label: '选项2',
          name: 2,
        },
      ],
      'x-component-props': {
        direction: 'horizontal'
      },
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Checkbox,
    Submit,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
