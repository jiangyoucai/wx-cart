// plugin/components/stepper/stepper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    option: {
      type: Object,
      value: {
        min: 0,
        max: 99,
        increment: 1,
        total: 1
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    setTotal: function (e) {
      const index = e.target.dataset.index
      switch (index) {
        case "0": // 减
          if (this.data.option.total - this.data.option.increment >= this.data.option.min) {
            this.data.option.total -= this.data.option.increment
            this.setData({
              option: this.data.option
              // total: this.data.option.total - this.data.option.increment
            })
          } else {
            wx.showToast({
              icon: 'none',
              title: '最小数量: ' + this.data.option.min,
            })
          }
          break
        case "1": // 加
          if (this.data.option.total + this.data.option.increment <= this.data.option.max) {
            this.data.option.total += this.data.option.increment
            this.setData({
              option: this.data.option
              // total: this.data.total + this.data.option.increment
            })
          } else {
            wx.showToast({
              icon: 'none',
              title: '最大数量: ' + this.data.option.max,
            })
          }
          break
      }
      this.data.option.index = index
      this.triggerEvent('setTotal', this.data.option)
    },
  }
})