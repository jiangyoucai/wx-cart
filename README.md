# wx-cart
微信小程序购物车组件(a cart for wechat mini programs)

# 使用

1.复制文件

    复制plugin/components/cart文件夹到项目中
    复制plugin/components/stepper文件夹到项目中
    复制plugin/components/slide件夹到项目中

2.引入组件

    pages/index/index.json文件里，增加
    
    {
    "usingComponents": {
    "cart": "your path/cart"
    }

3.使用组件

    pages/index/index.wxml文件里，增加
    
    <cart option="{{option}}" bind:setProduct="setProduct" bind:setSKU="setSKU" bind:setBooking="setBooking"/>

4.配置文件

    pages/index/index.js文件里，增加

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
      }
    ]
    
# 配置

1.name

    name: 产品名称

2.sub

    sub: 套餐名称

3.thumb

    thumb: 产品图片

4.total

    total: 购买数量,

5.fee

    fee: 购买价格

6.sku

    sku: 套餐编号

7.product

    product: 产品编号            

8.stepper

    参考wx-stepper配置

# 方法

1.选择产品

    setProduct: function (e) {
        // 返回选中的产品编号
        console.log(e)
    }

2.选择套餐

    setSKU: function (e) {
        // 返回选中的套餐编号，产品编号
        console.log(e)
    }

3.提交订单

    setBooking: function (e) {
        // 返回选中的总额，数量，产品列表等
        console.log(e)
    }
   
# 截图

![加减组件](http://cdn.tiantour.com/screenshot/cart.png)