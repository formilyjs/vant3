<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="uploader"
        title="文件上传"
        x-decorator="FormItem"
        x-component="Uploader"
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
import { Form, FormItem, Uploader, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Uploader,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
