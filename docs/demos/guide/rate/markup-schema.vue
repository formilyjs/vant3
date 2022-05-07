<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField name="rate" title="评分" x-component="Rate" x-decorator="FormItem" />
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Rate, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Rate,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
