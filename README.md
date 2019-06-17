# nuxt

> Nuxt.js project
> 使用nuxt仿cNode社区，我尽量用工作中规范去要求我改写这个项目，包括使用 BEM 来管理class类名,使用eslint来管理代码规范,只构建了三个页面,却使用了 vuex并且分了模块，对一些命名也进行了一定的规范，页面的组件划分，代码的重构等等一些自己的思想。

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## 接口说明
接口全部来自于 cnode网站中的 API

## 完成功能：

- 使用第三方插件：axios，vue-lazyload并判断添加插件在服务端还是客户端运行
- 过滤器的使用
- 嵌套路由，动态路由使用
- meta及title定制
- 分别在服务端和 客户端请求数据