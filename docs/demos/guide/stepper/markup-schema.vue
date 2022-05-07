<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField name="stepper" title="步进器" x-component="Stepper" x-decorator="FormItem" />
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Stepper, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Stepper,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
