<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="输入框"
        x-decorator="FormItem"
        x-component="Input"
      />
      <SchemaStringField
        name="textarea"
        title="文本框"
        x-decorator="FormItem"
        x-component="Input"
        :x-component-props="{
          type: 'textarea',
        }"
      />
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Input, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Input,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
