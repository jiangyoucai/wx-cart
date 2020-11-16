// plugin/components/cart/cart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // array, 商品
    option: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    // bool, 状态
    status: false,
    // number, 序号
    index: -1,
    // number, 数量
    total: 0,
    // number, 金额
    fee: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 选中单个
    setOne(e) {
      // 获取索引
      const index = e.currentTarget.dataset.index
      // 获取状态
      const status = !this.data.option[index].status
      // 调用方法
      this.checkOne(index, status)
    },
    // 选中多个
    setMore(e) {
      // 获取状态
      const status = !this.data.status
      // 调用方法
      this.checkMore(status)
    },
    // 设置单个
    checkOne(index, status) {
      // 判断更改状态，初始状态是否相同，若相同则返回
      if (status === this.data.option[index].status) {
        return
      }
      // 判断更改状态
      switch (status) {
        case true: // 选中
          // 结算数量自增
          this.data.total++
          // 结算金额累加
          this.data.fee += this.data.option[index].fee * this.data.option[index].total
          break
        default: // 取消
          // 结算数量自减
          this.data.total--
          // 结算金额累减
          this.data.fee -= this.data.option[index].fee * this.data.option[index].total
          break
      }
      // 设置选项状态
      this.data.option[index].status = status

      // 判断选中数量
      switch (this.data.total) {
        case this.data.option.length: // 等于最大数量
          // 设置全选状态
          this.data.status = true
          break
        default: // 小于最大数量
          // 设置全选状态
          this.data.status = false
          break
      }
      // 更改数据状态
      this.setData({
        option: this.data.option,
        total: this.data.total,
        fee: this.data.fee,
        status: this.data.status
      })
    },
    // 设置多个
    checkMore(status) {
      for (let i = 0; i < this.data.option.length; i++) {
        // 调用方法
        this.checkOne(i, status)
      }
    },
    // 设置数量
    setTotal(e) {
      // 获取索引
      const index = e.currentTarget.dataset.index
      // 获取组件
      const stepper = e.detail
      // 判断操作
      switch (stepper.index) {
        case "1": // 加
          // 选中，范围之内
          if (this.data.option[index].status && this.data.option[index].total !== stepper.max) {
            // 总额增加
            this.data.fee += this.data.option[index].fee
          }
          break
        case "0": // 减
          // 选中，范围之内
          if (this.data.option[index].status && this.data.option[index].total !== stepper.min) {
            // 总额减计
            this.data.fee -= this.data.option[index].fee
          }
          break
      }
      // 同步配置
      this.data.option[index].stepper = stepper
      // 同步数量
      this.data.option[index].total = stepper.total
      // 写入数据
      this.setData({
        fee: this.data.fee,
        option: this.data.option
      })
    },
    // 设置产品
    setProduct(e) {
      // 获取索引
      const index = e.currentTarget.dataset.index
      // 提交数据
      this.triggerEvent("setProduct", {
        product: this.data.option[index].product
      })
    },
    // 设置套餐
    setSKU(e) {
      // 获取索引
      const index = e.currentTarget.dataset.index
      // 提交数据
      this.triggerEvent("setSKU", {
        product: this.data.option[index].product,
        sku: this.data.option[index].sku
      })
    },
    // 滑动
    setChange(e) {
      // 获取索引
      const index = e.currentTarget.dataset.index
      // 判断是否换行
      if (this.data.index !== index) {
        // 判断是否第一
        switch (this.data.index) {
          case -1: // 默认，跳过
            // todo
            break
          default: // 其他，重置
            const identity = '#slide_' + this.data.index
            const slide = this.selectComponent(identity)
            if (slide) {
              slide.setReset()
            }
            break
        }
        // 写入索引
        this.setData({
          index: index,
        })
      }
    },
    // 设置删除
    setDelete(e) {
      // 获取索引
      const index = e.currentTarget.dataset.index
      const status = this.data.option[index].status
      if (status) {
        // 总额减计
        this.checkOne(index, !status)
      }
      // 移除元素
      this.data.option.splice(index, 1)
      // 剩余最后一个，选中，整体选中
      if (this.data.option.length === 1 && this.data.option[0].status) {
        this.data.status = true
      }
      
      // 提交数据
      this.setData({
        index: -1,
        status: this.data.status,
        option: this.data.option
      })
    },
    // 设置提交
    setBooking(e) {
      let option = []
      // 循环商品
      for (let i = 0; i < this.data.option.length; i++) {
        const item = this.data.option[i]
        // 判断选中
        if (item.status) {
          // 加入数组
          option.push(item)
        }
      }
      // 提交数据
      this.triggerEvent("setBooking", {
        total: this.data.total,
        fee: this.data.fee,
        option: option,
      })
    }
  }
})