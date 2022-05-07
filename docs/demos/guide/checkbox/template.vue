<template>
  <Form :form="form">
    <ArrayField
      name="multiple"
      title="多选"
      :dataSource="[
        { label: '选项1', name: 1 },
        { label: '选项2', name: 2 },
      ]"
      :decorator="[FormItem]"
      :component="[Checkbox.Group, { optionType: 'button', direction: 'horizontal' }]"
    >
    </ArrayField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { ArrayField } from '@formily/vue'
import { Form, FormItem, Checkbox, Submit } from '@formily/vant3'

const form = createForm()

const onSubmit = (value) => {
  console.log(value)
}
</script>
