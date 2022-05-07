<template>
  <Form :form="form">
    <SchemaField>
      <SchemaBooleanField
        name="switch"
        title="开关"
        x-decorator="FormItem"
        x-component="Switch"
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
import { Form, FormItem, Switch, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaBooleanField } = createSchemaField({
  components: {
    FormItem,
    Switch,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
