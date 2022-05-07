<template>
  <Form :form="form">
    <Field
      name="uploader"
      title="文件上传"
      :decorator="[FormItem]"
      :component="[Uploader]"
    />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { Field } from '@formily/vue'
import { Form, FormItem, Uploader, Submit } from '@formily/vant3'

const form = createForm()

const onSubmit = (value) => {
  console.log(value)
}
</script>
