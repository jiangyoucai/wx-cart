var plugin = requirePlugin("hello-plugin");
Page({
  data: {
    items: [],
    currentItem: 0,
    index: -1,
    option: [{
      name: "债务危机 我的应对原则 桥水创始人 《原则》瑞.达利欧最新作品",
      sub: "这是一个产品的套餐1",
      thumb: "https://cdn.tiantour.com/logo/fundipper.png",
      total: 1,
      fee: 199.0,
      sku: 123456,
      product: 1234,
      stepper: {
        min: 1,
        max: 99,
        increment: 1,
        total: 1,
      },
    }, {
      name: "债务危机 我的应对原则 桥水创始人 《原则》瑞.达利欧最新作品",
      sub: "这是一个产品的套餐1",
      thumb: "https://cdn.tiantour.com/logo/fundipper.png",
      total: 2,
      fee: 199.0,
      sku: 123456,
      product: 1234,
      stepper: {
        min: 1,
        max: 99,
        increment: 1,
        total: 2,
      },
    }, {
      name: "债务危机 我的应对原则 桥水创始人 《原则》瑞.达利欧最新作品",
      sub: "这是一个产品的套餐1",
      thumb: "https://cdn.tiantour.com/logo/fundipper.png",
      total: 3,
      fee: 199.0,
      sku: 123456,
      product: 1234,
      stepper: {
        min: 1,
        max: 99,
        increment: 1,
        total: 3,
      },
    }, {
      name: "债务危机 我的应对原则 桥水创始人 《原则》瑞.达利欧最新作品",
      sub: "这是一个产品的套餐1",
      thumb: "https://cdn.tiantour.com/logo/fundipper.png",
      total: 4,
      fee: 199.0,
      sku: 123456,
      product: 1234,
      stepper: {
        min: 1,
        max: 99,
        increment: 1,
        total: 4,
      },
    }, {
      name: "债务危机 我的应对原则 桥水创始人 《原则》瑞.达利欧最新作品",
      sub: "这是一个产品的套餐1",
      thumb: "https://cdn.tiantour.com/logo/fundipper.png",
      total: 5,
      fee: 199.0,
      sku: 123456,
      product: 1234,
      stepper: {
        min: 1,
        max: 99,
        increment: 1,
        total: 5,
      },
    }]

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