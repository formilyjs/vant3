<template>
  <Form :form="form">
    <Field
      name="input"
      title="单选"
      :decorator="[FormItem]"
      :component="[Radio.Group, {
        direction: 'horizontal'
      }]"
      :dataSource="[
        {
          label: '选项1',
          name: 1,
        },
        {
          label: '选项2',
          name: 2,
        },
      ]"
    />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { Field } from '@formily/vue'
import { Form, FormItem, Radio, Submit } from '@formily/vant3'

const form = createForm()

const onSubmit = (value) => {
  console.log(value)
}
</script>
