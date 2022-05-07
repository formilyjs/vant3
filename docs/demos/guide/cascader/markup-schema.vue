<template>
  <Form :form="form">
    <SchemaField>
      <SchemaStringField
        name="cascader"
        title="地区"
        x-component="Cascader"
        :x-component-props="{
          formItemProps: {
            placeholder: '请选择所在地区',
            format: (data: any) => {
              const { selectedOptions = [] } = data || {}
              return data?.selectedOptions.map((option) => option.text).join('/')
            },
          },
          popupProps: {},
          cascaderProps: {
            options: [
              {
                text: '浙江省',
                value: '330000',
                children: [{ text: '杭州市', value: '330100' }],
              },
              {
                text: '江苏省',
                value: '320000',
                children: [{ text: '南京市', value: '320100' }],
              },
            ],
          },
          fieldListeners: {},
          popupListeners: {},
          cascaderListeners: {
            change: cascaderChange,
          },
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
import { Form, FormItem, Cascader, Submit } from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Cascader,
  },
})

const onSubmit = (value) => {
  console.log(value)
}

const cascaderChange = (...args) => {
  console.log('onChange args: ', args)
}
</script>
