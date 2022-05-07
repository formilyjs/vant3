<template>
  <Form :form="form">
    <SchemaField>
      <SchemaArrayField
        name="string_array"
        title="字符串数组"
        x-decorator="FormItem"
        x-component="ArrayItems"
      >
        <SchemaVoidField>
          <SchemaStringField
            name="input"
            x-component="Input"
            title="输入框"
            required
            :x-component-props="{ placeholder: '请输入' }"
            x-decorator="FormItem"
          />
          <SchemaVoidField
            x-decorator="FormItem"
            x-component="ArrayItems.Remove"
          />
        </SchemaVoidField>
        <SchemaVoidField x-component="ArrayItems.Addition" title="添加条目" />
      </SchemaArrayField>
      <SchemaArrayField
        name="array"
        title="对象数组"
        x-decorator="FormItem"
        x-component="ArrayItems"
      >
        <SchemaObjectField>
          <SchemaStringField
            required
            title="日期"
            name="date"
            x-component="DatetimePicker"
          />
          <SchemaStringField
            required
            title="输入框"
            name="input"
            x-decorator="FormItem"
            x-component="Input"
          />
          <SchemaStringField
            required
            title="选择框"
            name="select"
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
            }"
          />
          <SchemaVoidField
            x-decorator="FormItem"
            x-component="ArrayItems.Remove"
          />
        </SchemaObjectField>
        <SchemaVoidField x-component="ArrayItems.Addition" title="添加条目" />
      </SchemaArrayField>
      <SchemaArrayField
        name="array2"
        title="对象数组"
        x-decorator="FormItem"
        x-component="ArrayItems"
      >
        <SchemaObjectField x-decorator="ArrayItems.Item">
          <SchemaStringField
            required
            title="日期"
            name="date"
            x-component="DatetimePicker"
          />
          <SchemaStringField
            title="输入框"
            x-decorator="FormItem"
            name="input"
            x-component="Input"
          />
          <SchemaVoidField
            x-decorator="FormItem"
            x-component="ArrayItems.Remove"
          />
        </SchemaObjectField>
        <SchemaVoidField x-component="ArrayItems.Addition" title="添加条目" />
      </SchemaArrayField>
    </SchemaField>
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
  Submit,
  Input,
  ArrayItems,
  DatetimePicker,
  Picker,
  Group,
} from '@formily/vant3'

const form = createForm()
const {
  SchemaField,
  SchemaStringField,
  SchemaArrayField,
  SchemaVoidField,
  SchemaObjectField,
} = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayItems,
    DatetimePicker,
    Picker,
    Group,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>

<style lang="scss" scoped></style>
