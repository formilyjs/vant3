<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="单选"
        x-component="Radio.Group"
        x-decorator="FormItem"
        :enum="[
          {
            label: '选项1',
            name: 1,
          },
          {
            label: '选项2',
            name: 2,
          },
        ]"
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
import { Form, FormItem, Radio, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Radio,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
