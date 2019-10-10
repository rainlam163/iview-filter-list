<template>
  <div class="filter-list">
    <Input v-model="keyword" :placeholder="placeholder" />
    <ul style="margin-top: 6px;">
      <li :style="{
          cursor: 'pointer',
          display:'flex',
          alignItems:'center',
          textAlign:'left',
          padding:'3px 6px',
          height:'42px',
          backgroundColor:selectIndex===i?'rgba(49,69,88,.1)':''
        }" v-for="(item,i) in dataList" :key="`item-${i}`" @click="handleItemClick(item,i)">
        <span style="flex:1">
          <Icon v-if="dataList.filter(d=>d.icon).length" :type="item.icon?item.icon.type:''" :color="item.icon?item.icon.color:''" style="width:16px"/>
          <span>{{item[bindProps.label]}}</span>
        </span>
        <div class="tools">
          <Button
            :title="button.tooltip"
            :size="button.size"
            :type="button.type"
            :shape="button.shape"
            :disabled="button.disabled!==undefined?(typeof button.disabled==='function'?button.disabled(item):button.disabled):false"
            :icon="button.icon"
            :loading="button.loading"
            :style="{marginLeft:'3px',color:button.color,width:button.type==='text'?'16px':'auto'}"
            v-for="(button,j) in item.buttons"
            :key="`button-${j}`"
            @click.stop="button.onClick?button.onClick(item):'javascript:void(0)'">
              <span v-if="button.label">{{button.label}}</span>
            </Button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'filter-list',
  data() {
    return {
      keyword: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入关键字…'
    },
    data: {
      type: Array,
      default() {
        return null
      }
    },
    bindProps: {
      type: Object,
      default() {
        return {
          label: 'label',
          value: 'value'
        }
      }
    },
    value: {
      type: Object,
      default: null
    },
    filterMethod: Function
  },
  computed: {
    selectIndex() {
      return this.selectItem ? this.dataList.findIndex(item => item[this.bindProps.value] === this.selectItem[this.bindProps.value]) : -1
    },
    selectItem: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    dataList() {
      if (!this.filterMethod) {
        return this.data.filter(item => item[this.bindProps.label].toLowerCase().indexOf(this.keyword.toLowerCase()) > -1)
      } else {
        return this.filterMethod(this.keyword)
      }
    }
  },
  methods: {
    handleItemClick(item) {
      this.selectItem = item
    }
  },
  watch: {
    selectItem: {
      deep: true,
      handler(newValue, oldValue) {
        if (!oldValue || newValue[this.bindProps.value] !== oldValue[this.bindProps.value]) {
          this.$emit('on-select-item-change', newValue);
        }
      }
    }
  }
}
</script>

