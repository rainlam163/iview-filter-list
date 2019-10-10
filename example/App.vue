<template>
  <div id="app">
    <filter-list :data="data" v-model="selectItem" :filter-method="filterMethod"/>
  </div>
</template>

<script>
import FilterList from '../src'

export default {
  name: 'app',
  components: { FilterList },
  data() {
    return {
      selectItem: null,
      data: [
        {
          icon: {
            type: 'md-clipboard',
            color: '#FF6167'
          },
          label: 'list1',
          value: 'list1',
          base: 'list0',
          buttons: [
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large',
              onClick(item) {
                /* eslint-disable-next-line */
                console.log(item)
              }
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large'
            }
          ]
        },
        {
          label: 'list2',
          value: 'list2',
          base: 'list1',
          buttons: [
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large'
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
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
              icon: 'md-trash',
              size: 'large'
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large'
            }
          ]
        },
        {
          label: 'item1',
          value: 'item1',
          base: 'list0',
          buttons: [
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large'
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large'
            }
          ]
        },
        {
          label: 'item2',
          value: 'item2',
          base: 'list1',
          buttons: [
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large'
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large'
            }
          ]
        },
        {
          label: 'item3',
          value: 'item3',
          buttons: [
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
              size: 'large'
            },
            {
              tooltip: '删除',
              color: '#FF6167',
              type: 'text',
              shape: 'circle',
              icon: 'md-trash',
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

<style scoped>
#app {
  padding: 12px;
}
</style>

