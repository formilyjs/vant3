<template>
  <Form :form="form">
    <SchemaField>
      <SchemaArrayField
        name="multiple"
        title="多选"
        :enum="[
          { label: '选项1', name: 1 },
          { label: '选项2', name: 2 },
        ]"
        x-component="Checkbox.Group"
        x-decorator="FormItem"
        :x-component-props="{
          direction: 'horizontal',
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
import { Form, FormItem, Checkbox, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaArrayField } = createSchemaField({
  components: {
    FormItem,
    Checkbox,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
