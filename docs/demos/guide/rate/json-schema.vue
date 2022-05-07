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
import { Form, FormItem, Rate, Submit } from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    rate: {
      type: 'number',
      title: '评分',
      'x-decorator': 'FormItem',
      'x-component': 'Rate',
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Rate,
    Submit,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
