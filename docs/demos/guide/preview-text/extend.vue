<template>
  <Form :form="form" :previewTextPlaceholder="defaultTextNode">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="文本预览"
        x-decorator="FormItem"
        x-component="Input"
        default="Hello world"
        :x-component-props="{
          inputAlign: 'left',
        }"
      />

      <SchemaStringField
        name="switch"
        title="开关"
        x-decorator="FormItem"
        x-component="Switch"
        :x-component-props="{
          size: 20,
        }"
      />

      <SchemaArrayField
        name="checkboxGroup"
        title="复选框组"
        x-decorator="FormItem"
        :enum="[
          { label: '复选框 1', name: 123, shape: 'square' },
          { label: '复选框 2', name: 222, shape: 'square' },
        ]"
        :default="[123, 222]"
        x-component="Checkbox.Group"
        :x-component-props="{
          direction: 'horizontal',
          multiple: true,
        }"
      />

      <SchemaArrayField
        name="radio"
        title="单选框"
        x-decorator="FormItem"
        :enum="[
          { label: '单选框 1', name: 1 },
          { label: '单选框 2', name: 2 },
        ]"
        :default="1"
        x-component="Radio.Group"
        :x-component-props="{
          direction: 'horizontal',
        }"
      />

      <SchemaStringField
        name="stepper"
        title="步进器"
        x-decorator="FormItem"
        :default="50"
        x-component="Stepper"
      />

      <SchemaStringField
        name="rate"
        title="评分"
        x-decorator="FormItem"
        :default="3.5"
        x-component="Rate"
        :x-component-props="{
          allowHalf: true,
        }"
      />

      <SchemaStringField
        name="slider"
        title="滑块"
        x-decorator="FormItem"
        :default="50"
        x-component="Slider"
      />

      <SchemaStringField
        name="uploader"
        title="文件上传"
        x-decorator="FormItem"
        :default="[{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }]"
        x-component="Uploader"
      />

      <SchemaStringField
        name="picker"
        title="选择器"
        default="湖州"
        x-component="Picker"
        :x-component-props="{
          style: {
            textAline: 'right',
          },
          formItemProps: {
            placeholder: '点击选择城市',
          },
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

      <SchemaStringField
        name="datetimePicker"
        title="时间选择"
        default="05:15"
        x-component="DatetimePicker"
        :x-component-props="{
          formItemProps: {
            placeholder: '点击选择时间',
          },
          popupProps: {},
          datetimePickerProps: {
            type: 'time',
          },
          fieldListeners: {},
          popupListeners: {},
          datetimePickerListeners: {},
        }"
      />

      <SchemaStringField
        name="area"
        title="地区选择"
        default="北京市/北京市/东城区"
        x-component="PreviewText.Area"
        :x-component-props="{
          formItemProps: {
            placeholder: '点击选择省市区',
            format: (val) =>
              (val || [])
                .filter((item) => !!item)
                .map((item) => item && item.name)
                .join('/'),
          },
          popupProps: {},
          areaProps: {
            areaList: {
              province_list: {
                110000: '北京市',
                120000: '天津市',
              },
              city_list: {
                110100: '北京市',
                120100: '天津市',
              },
              county_list: {
                110101: '东城区',
                110102: '西城区',
              },
            },
          },
          fieldListeners: {},
          popupListeners: {},
          areaListeners: {},
        }"
      />

      <SchemaStringField
        name="calendar"
        title="日历"
        x-component="Calendar"
        :x-component-props="{
          formItemProps: {
            placeholder: '选择日历',
            format: (date: Date) => initCalendarTime(date),
          },
          calendarProps: {},
          fieldListeners: {},
          calendarListeners: {},
        }"
      />

      <SchemaStringField
        name="calendarRange"
        title="日历区间"
        x-component="Calendar"
        :x-component-props="{
          formItemProps: {
            placeholder: '选择日历区间',
            format: (date: Date[]) => initCalendarRangeTime(date),
          },
          calendarProps: {
            type: 'range',
            color: '#1989fa',
          },
          fieldListeners: {},
          calendarListeners: {},
        }"
      />

      <SchemaStringField
        name="cascader"
        title="地区"
        x-component="Cascader"
        :x-component-props="{
          formItemProps: {
            placeholder: '请选择所在地区',
            format: (data) => {
              return data?.selectedOptions
                .map((option) => option.text)
                .join('/')
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
            change: (...args) => {},
          },
        }"
      />
    </SchemaField>

    <Submit
      :style="{ 'margin-top': '16px' }"
      round
      block
      @click="changeEditable"
    >
      切换阅读态
    </Submit>
  </Form>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import {
  Form,
  PreviewText,
  Checkbox,
  Input,
  Cascader,
  Calendar,
  FormItem,
  Submit,
  Switch,
  Stepper,
  Radio,
  Rate,
  Slider,
  Uploader,
  Picker,
  DatetimePicker,
} from '@formily/vant3'

const form = createForm()
const { SchemaField, SchemaStringField, SchemaArrayField } = createSchemaField({
  components: {
    PreviewText,
    Input,
    Switch,
    Checkbox,
    FormItem,
    Cascader,
    Calendar,
    Stepper,
    Radio,
    Rate,
    Slider,
    Uploader,
    Picker,
    DatetimePicker,
  },
})
const defaultTextNode = () => h('div', {}, '--')

const changeEditable = () => {
  form.setState((state) => {
    state.readPretty = !state.readPretty
  })
}

const checkTime = (time) => {
  const dateFormat = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
  return dateFormat.test(time)
}

const initCalendarTime = (date: Date) => {
  return date
    ? checkTime(date)
      ? date
      : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    : ''
}

const initCalendarRangeTime = (date: Date[]) => {
  if (!date) return ''
  const [start, end] = date
  const startTime = checkTime(start)
    ? start
    : `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`
  const endTime = checkTime(end)
    ? end
    : `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`
  return `${startTime} - ${endTime}`
}
</script>
