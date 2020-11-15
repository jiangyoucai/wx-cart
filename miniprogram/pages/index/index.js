var plugin = requirePlugin("hello-plugin");
Page({
  data: {
    items: [],
    currentItem: 0,
    index: -1,
    option: {
      cargo: [{
          text: "这是第一行文字",
        },
        {
          text: "这是第二行文字",
        },
        {
          text: "这是第三行文字",
        }
      ]
    }

  },
  onLoad: function () {
    plugin.sayHello();
    var world = plugin.answer;
  },
  addItem: function () {
    this.data.items.push(this.data.currentItem++);
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem
    });
  },
  setProduct(e) {
    console.log("product", e.detail)
  },
  setSKU(e) {
    console.log("sku", e.detail)
  },
  setBooking(e) {
    console.log("booking", e.detail)
  },
  // 滑动
  setChange(e) {
    // 获取索引
    const index = e.currentTarget.dataset.index
    console.log(e, index)
    // 判断是否换行
    if (this.data.index !== index) {
      // 判断是否第一
      switch (this.data.index) {
        case -1: // 默认，跳过
          // todo
          break
        default: // 其他，重置
          const identity = '#slide_' + this.data.index
          this.selectComponent(identity).setReset
          break
      }
      // 写入索引
      this.setData({
        index: index,
      })
    }
  },
  setDelete(e) {
    const index = e.currentTarget.dataset.index
    console.log("action", e, index)
  }
});