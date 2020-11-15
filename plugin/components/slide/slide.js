// plugin/components/slide/slide.js
Component({
  behaviors: ['wx://component-export'],
  export () {
    return {
      setReset: this.setReset()
    }
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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 滑动
    setChange(e) {
      switch (e.detail.source) {
        case "touch":
          if (e.detail.x < 0) {
            this.triggerEvent("setChange", e.detail)
          }
          break
        default:
          // todo
          break
      }
    },
    // 重置
    setReset(e) {
      this.setData({
        x: 0,
        y: 0
      })
    },
    // 事件
    setDelete(e) {
      this.triggerEvent("setDelete", e.detail)
    }
  }
})