<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="输入框"
        x-decorator="FormItem"
        :x-decorator-props="{
          errorMessageAlign: 'right',
        }"
        x-component="Input"
        :x-component-props="{
          placeholder: '请输入',
          inputAlign: 'right',
          showWordLimit: true,
          maxlength: 50,
        }"
        :x-validator="{
          required: true,
          message: '输入框内容不可为空',
        }"
      />
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script setup lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Input, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
