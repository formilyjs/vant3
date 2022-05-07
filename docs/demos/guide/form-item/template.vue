<template>
  <Form :form="form">
    <Field
      name="input"
      title="输入框"
      :decorator="[
        FormItem,
        {
          errorMessageAlign: 'right',
        },
      ]"
      :component="[
        Input,
        {
          placeholder: '请输入',
          inputAlign: 'right',
          showWordLimit: true,
          maxlength: 50,
        },
      ]"
      :validator="[
        {
          required: true,
          message: '输入框内容不可为空',
        },
      ]"
    />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script setup lang="ts">
import { createForm } from '@formily/core'
import { Field } from '@formily/vue'
import { Form, FormItem, Input, Submit } from '@formily/vant3'

const form = createForm()

const onSubmit = (value) => {
  console.log(value)
}
</script>
