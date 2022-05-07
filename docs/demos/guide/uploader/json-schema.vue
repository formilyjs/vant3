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
import { Form, FormItem, Uploader, Submit } from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    uploader: {
      type: 'array',
      title: '文件上传',
      'x-decorator': 'FormItem',
      'x-component': 'Uploader',
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Uploader,
    Submit,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
