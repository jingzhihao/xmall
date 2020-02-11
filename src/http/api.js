import service from "./index"

export default {
    //首页数据
    // ``` js
    // http://localhost:9999/goods/home
    getApp() {
        return service.req('/goods/home')
    },
    //     ### 为你推荐

    // ``` js
    // http://localhost:9999/goods/recommend
    getRecommend() {
        return service.req('/goods/recommend')
    },

    // 所有商品
    // ``` js
    // http://localhost:9999/goods/allGoods
    // 请求方式: get
    // 参数: 
    // 1.page: 请求页数(必填)
    // 2.size: 请求条数(必填)
    // 3.sort: 排序方式 1为升序 -1为降序
    // 4.priceGt: 价格区间 从多少开始
    // 5.priceLte: 价格区间 到哪结束

    Allgoods(page = 1, size = 20, sort, priceGt, priceLte) {
        return service.get(`/goods/allGoods`, { params: { page, size, sort, priceGt, priceLte } })
    },



    // ### 搜索商品

    // ``` js
    // http://localhost:9999/goods/search
    // 请求方式: get
    // 参数:
    // keyword: 关键字
    // ```
    search(keyword) {
        return service.get('/goods/search', { params: { keyword } })
    },
    // ### 商品详情

    // ``` js
    // http://localhost:9999/goods/search
    // 请求方式:get
    // 参数:
    // productId: 商品id
    // ```
    searchId(productId) {
        return service.get('/goods/search', { params: { productId } })
    },


    // ### 登陆

    // ``` js
    // http://localhost:9999/users/login
    // 请求方式: post
    // 参数:
    // username: 用户名
    // password: 密码
    // ```
    login(username, password) {
        return service.post('/users/login', {
            username,
            password
        })
    },
    // ### 注册

    // ``` js
    // http://localhost:9999/users/register
    // 请求方式: post
    // 参数:
    // username: 用户名
    // password: 密码
    // ```
    register(username, password) {
        return service.post('/users/register', {
            username,
            password
        })
    },
    // ### 加入购物车

    // ``` js
    // http://localhost:9999/goods/addCart
    // 请求方式: post
    // 参数:
    // productId: 商品id
    // ```
    addCart(productId) {
        return service.post('/goods/addCart', {
            productId,

        })
    },
    // ### 查询购物车

    // ``` js
    // http://localhost:9999/goods/getCarts
    // ```
    getCarts() {
        return service.get('/goods/getCarts')
    },
    // ### 删除购物车的商品

    // ``` js
    // http://localhost:9999/goods/delCart
    // 请求方式: post
    // 参数
    // 1.productId: 商品_id
    // ```
    delCart(productId) {
        return service.post('/goods/delCart', { productId })
    },


    // ### 修改购物车数量

    // ``` js
    // http://localhost:9999/goods/editCart
    // 请求方式: post
    // 参数
    // 1.productId: 商品_id
    // 2.count: 数量
    // ```
    editCart(productId, count) {
        return service.post('/goods/editCart', { productId, count })
    },
    // ### 获取全部收获地址

    // ``` js
    // http://localhost:9999/address/list
    // ```
    list() {
        return service.get('/address/list')
    },
    // ### 添加收获地址

    // ``` js
    // http://localhost:9999/address/addAddress
    // 请求方式: post
    // 参数:
    // 1.username: 用户名
    // 2.phone: 电话
    // 3.address: 地址
    // 4.isDefault: 是否为默认地址
    // ```
    addAddress(username, phone, address, isDefault) {
        return service.post('/address/addAddress', { username, phone, address, isDefault })
    },
    // ### 设置默认地址

    // ``` js
    // http://localhost:9999/address/setDefault
    // 请求方式: post
    // 参数:
    // 1.addressId: 地址的_id
    // ```
    setDefault(addressId) {
        return service.post('/address/setDefault', { addressId })
    },
    // ### 修改地址

    // ``` js
    // http://localhost:9999/address/editAddress
    // 请求方式: post
    // 参数:
    // 1.addressId: 地址的_id
    // 2.username: 用户名
    // 3.phone: 电话
    // 4.address: 地址
    // 5.isDefault: 是否为默认地址
    // ```
    editAddress(addressId, username, phone, address, isDefault) {
        return service.post('/address/editAddress', { addressId, username, phone, address, isDefault })
    },
    // ### 删除地址

    // ``` js
    // http://localhost:9999/address/deleteAddress
    // 请求方式: post
    // 参数:
    // addressId: 地址的_id
    deleteAddress(addressId) {
        return service.post('/address/deleteAddress', { addressId })
    },
}