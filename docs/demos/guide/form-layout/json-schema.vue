<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
  </FormProvider>
  <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
    >提交</Submit
  >
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Submit,
  Picker,
} from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    layout: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelCol: 6,
        wrapperCol: 10,
      },
      properties: {
        input: {
          type: 'string',
          title: '输入框',
          // required: true,
          'x-decorator': 'FormItem',
          'x-decorator-props': {
            tooltip: '123',
            placeholder: '请输入',
          },
          'x-component': 'Input',
        },
        picker: {
          type: 'string',
          title: '城市',
          'x-component': 'Picker',
          'x-component-props': {
            placeholder: '选择城市',
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
          },
        },
      },
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormLayout,
    FormItem,
    Input,
    Submit,
    Picker,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
