// plugin/components/slide/slide.js
Component({
  options: {
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    x: 0,
    y: 0,
    z: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 滑动
    setChange(e) {
      // 判断滑动
      switch (e.detail.source) {
        case "touch": // 滑动
          // 屏幕宽度
          const width = wx.getSystemInfoSync().windowWidth * 0.25
          // 判断位置
          if (e.detail.x === -width.toFixed(1)) {
            // 设置数值
            this.setData({
              x: e.detail.x
            })
            // 提交数据
            this.triggerEvent("setChange", e.detail)
          }
          break
        case "": // 复位
          if (e.detail.x === 0) {
            // 判断方法
            if (!this.data.z) {
              // 提交数据
              this.triggerEvent("setDelete", e.detail)
            }
          }
          break
      }
    },
    // 删除
    setDelete(e) {
      this.setData({
        x: 0,
        y: 0,
        z: 0
      })
    },
    // 重置
    setReset(e) {
      this.setData({
        x: 0,
        y: 0,
        z: 1
      })
    }
  }
})