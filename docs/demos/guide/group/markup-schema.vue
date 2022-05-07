<template>
  <Form :form="form">
    <SchemaField>
      <SchemaVoidField name="group1" title="输入框" x-component="Group">
        <SchemaStringField
          name="input"
          title="输入框"
          x-component="Input"
          x-decorator="FormItem"
          :x-component-props="{ placeholder: '请输入' }"
        />
        <SchemaStringField
          name="textarea"
          title="文本框"
          x-component="Input"
          x-decorator="FormItem"
          :x-component-props="{
            autosize: true,
            type: 'textarea',
            placeholder: '请输入',
          }"
        />
      </SchemaVoidField>

      <SchemaVoidField name="group2" title="输入框" x-component="Group">
        <SchemaStringField
          name="input"
          title="输入框"
          x-component="Input"
          x-decorator="FormItem"
          :x-component-props="{ placeholder: '请输入' }"
        />
        <SchemaStringField
          name="textarea"
          title="文本框"
          x-component="Input"
          x-decorator="FormItem"
          :x-component-props="{
            autosize: true,
            type: 'textarea',
            placeholder: '请输入',
          }"
        />
      </SchemaVoidField>
    </SchemaField>
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit">
      提交
    </Submit>
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, FormItem, Input, Group, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField, SchemaVoidField } = createSchemaField({
  components: {
    Group,
    Input,
    FormItem,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
