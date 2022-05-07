<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import {
  Form,
  FormItem,
  ArrayItems,
  Input,
  DatetimePicker,
  Picker,
  Group,
  Submit,
} from '@formily/vant3'

const schema = {
  type: 'object',
  properties: {
    string_array: {
      type: 'array',
      'x-component': 'ArrayItems',
      'x-decorator': 'FormItem',
      title: '字符串数组',
      items: {
        type: 'void',
        properties: {
          input: {
            type: 'string',
            title: '输入框',
            'x-component': 'Input',
            'x-decorator': 'FormItem',
            'x-component-props': { placeholder: '请输入' },
            'x-validator': {
              required: true,
              message: '输入框内容不可为空',
            },
          },
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.Remove',
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          title: '添加条目',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
    array: {
      type: 'array',
      'x-component': 'ArrayItems',
      'x-decorator': 'FormItem',
      title: '对象数组',
      items: {
        type: 'object',
        properties: {
          space: {
            type: 'void',
            properties: {
              date: {
                type: 'string',
                title: '日期',
                'x-component': 'DatetimePicker',
                'x-validator': {
                  required: true,
                  message: '日期不可为空',
                },
              },
              input: {
                type: 'string',
                title: '输入框',
                'x-component': 'Input',
                'x-decorator': 'FormItem',
                'x-validator': {
                  required: true,
                  message: '输入框内容不可为空',
                },
              },
              select: {
                type: 'string',
                title: '下拉框',
                'x-component': 'Picker',
                'x-component-props': {
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
                },
                'x-validator': {
                  required: true,
                  message: '城市不可为空',
                },
              },
              remove: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Remove',
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          title: '添加条目',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
    array2: {
      type: 'array',
      'x-component': 'ArrayItems',
      'x-decorator': 'FormItem',
      title: '对象数组',
      items: {
        type: 'object',
        'x-decorator': 'ArrayItems.Item',
        properties: {
          date: {
            type: 'string',
            title: '日期',
            'x-component': 'DatetimePicker',
            'x-validator': {
              required: true,
              message: '日期不可为空',
            },
          },
          input: {
            type: 'string',
            title: '输入框',
            required: true,
            'x-component': 'Input',
            'x-validator': {
              required: true,
              message: '输入框内容不可为空',
            },
          },
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.Remove',
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          title: '添加条目',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Input,
    ArrayItems,
    DatetimePicker,
    Picker,
    Group,
    Submit,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>
