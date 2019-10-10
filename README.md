# iview-filter-list

## 概述
`iview-filter-list`是基于`iview`组件库开发的可过滤列表，使用灵活的JSON配置去渲染组件，支持行操作。需要注意的是，`iview-filter-list`必须在安装了`iview`的基础上再安装使用。

## 安装
``` bash
npm install iview-filter-list --save
```

## 使用
``` vue
<template>
  <div id="app">
    <filter-list :data="data" v-model="selectItem" :filter-method="filterMethod"/>
  </div>
</template>

<script>
import FilterList from 'iview-filter-list'

export default {
  name: 'app',
  components: { FilterList },
  data() {
    return {
      selectItem: null,
      data: [
        {
          icon: {
            type: 'android-clipboard',
            color: '#FF6167'
          },
          label: 'list1',
          value: 'list1',
          buttons: [
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'trash-b',
              size: 'large',
              onClick(item) {
                console.log(item)
              }
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'trash-b',
              size: 'large'
            }
          ]
        },
        {
          label: 'list2',
          value: 'list2',
          buttons: [
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'trash-b',
              size: 'large'
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'trash-b',
              size: 'large'
            }
          ]
        },
        {
          label: 'list3',
          value: 'list3',
          buttons: [
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'trash-b',
              size: 'large'
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'trash-b',
              size: 'large'
            }
          ]
        }
      ]
    }
  },
  methods: {
    filterMethod(keyword) {
      return this.data.filter(item => (item.base && item.base.toLowerCase().indexOf(keyword.toLowerCase()) > -1) || item.value.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
    }
  }
}
</script>
```

## API

### props

属性|说明|类型|默认值
-|-|-|-
value|列表选中项，可使用v-model双向绑定|Object|空
placeholder|搜索框的占位符|String|无
data|列表数据|Array|null
bindProps|列表绑定的value和label|Object|{ value: 'value', label: 'label' }
filter-method|过滤方法，在搜索框输入文本时会根据该方法过滤数据，如不提供，默认根据绑定的label过滤，方法自带一个参数，为搜索框的值|Function|-

### events

事件名|说明|返回值
-|-|-
on-select-item-change|选中项改变时触发|新的选中项

## 联系
如有疑问，请联系邮件：490106135@qq.com
