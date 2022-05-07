<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="picker"
        title="城市"
        x-component="Picker"
        :x-component-props="{
          formItemProps: {
            placeholder: '选择城市',
          },
          popupProps: {},
          pickerProps: {
            columns: [
              '杭州',
              '宁波',
              '温州',
              '绍兴',
              '湖州',
              '嘉兴',
              '金华',
              '衢州',
            ],
          },
          fieldListeners: {},
          popupListeners: {},
          pickerListeners: {},
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
import { Form, FormItem, Picker, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Picker,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
