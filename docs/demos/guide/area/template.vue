<template>
  <Form :form="form">
    <Field
      name="area"
      title="城市"
      :component="[
        Area,
        {
          formItemProps: {
            format: (val) =>
              (val || [])
                .filter((item) => !!item)
                .map((item) => item && item.name)
                .join('/'),
            placeholder: '选择城市',
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
        },
      ]"
    />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="onSubmit"
      >提交</Submit
    >
  </Form>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { Field } from '@formily/vue'
import { Form, Area, Submit } from '@formily/vant3'

const form = createForm()

const onSubmit = (value) => {
  console.log(value)
}
</script>
