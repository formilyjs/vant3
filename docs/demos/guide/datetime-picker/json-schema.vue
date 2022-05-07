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
import { Form, FormItem, DatetimePicker, Submit } from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    datetimePicker: {
      type: 'string',
      title: '时间选择器',
      'x-component': 'DatetimePicker',
      'x-component-props': {
        formItemProps: {
          placeholder: '请选择时间',
        },
        popupProps: {},
        datetimePickerProps: {
          type: 'time',
        },
        fieldListeners: {},
        popupListeners: {},
        datetimePickerListeners: {},
      },
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    DatetimePicker,
    Submit,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
