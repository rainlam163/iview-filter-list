import filterList from './Main.vue'

filterList.install = Vue => {
  Vue.component(filterList.name, filterList)
}

export default filterList