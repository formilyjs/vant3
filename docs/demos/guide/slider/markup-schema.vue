<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField name="slider" title="滑块" x-component="Slider" default="50"/>
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Slider, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Slider,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
