// plugin/components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    option: {
      type: Object,
      value: {
        title: "弹出层",
        status: false
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    setStatus(e) {
      this.data.option.status = !this.data.option.status
      this.setData({
        option: this.data.option
      })
    }
  }
})