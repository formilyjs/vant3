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
import { Form, FormItem, Calendar, Submit } from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    calendar: {
      type: 'string',
      title: '日历',
      'x-component': 'Calendar',
      'x-component-props': {
        formItemProps: {
          placeholder: '选择日历',
          format: (date) => date && `${date.getMonth() + 1}/${date.getDate()}`,
        },
        calendarProps: {},
        fieldListeners: {},
        calendarListeners: {},
      },
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Calendar,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
