# cnode-vue

> 使用vue写cnode网站, 我尽量用工作中规范去要求我改写这个项目，包括使用 `BEM` 来管理class类名,使用eslint来管理代码规范,只构建了三个页面,却使用了 vuex并且分了模块，对一些命名也进行了一定的规范，页面的组件划分，代码的重构等等一些自己的思想。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint
npm run lint

# fix
npm run fix

```

## 技术栈

Vue2+Vue-Router+Vuex+webpack+ES6/7+axios+stylus+better-scroll
## 接口说明

接口全部来自于 cnode网站中的 [API](https://cnodejs.org/api 'API')


## 项目目录


    ├── build                                       // webpack配置文件
    ├── config                                      // 项目打包路径
    ├── dist                                        // 项目编译后文件
    ├── README                                      // README中用到的项目截图
    ├── src                                         // 源码目录
    │   ├── components                              // 组件
    │   │   ├── common                              // 公共组件
    │   │   │   ├── c-loading                       // 公用加载组件
    │   │   ├── list
    │   │   │   └── IndexView.vue                   // 公用话题列表组件，不带better-scroll
    │   │   └── navbar
    │   |   │   └── IndexView.vue                   // 头部公共组件
    │   │   └── scroll
    │   │   |   └── Scroll.vue                      // 公共better-scroll组件
    │   |   └── tablist
    │   │   │   └── IndexView.vue                   // 公用横向滚动组件
    │   │   └── topiclist
    │   │       └── IndexView.vue                   // 公用话题列表组件，better-scroll
    │   ├── config                                  // 基本配置
    │   │   ├── common.config.js                    // 公共设置
    │   │   ├── development.config.js               // 测试环境
    │   │   ├── index.js                            // 环境切换
    │   │   └── production.config.js                // 生产环境
    │   ├── images                                  // 公共图片
    │   ├── views
    │   │   ├── index
    │   │   │   ├── IndexView.vue                   // 首页
    │   │   │   └── components
    │   │   │       └── topicListVIew.vue           // 首页话题组件
    │   │   ├── user
    │   │   │   ├── index                           
    │   │   │   │   └── IndexView.vue               // 个人信息页面
    │   │   │   │    └── components
    │   │   │   │        └── TopicVIew.vue          // 话题模块组件 
    │   │   │   │        └── UserInfoVIew.vue       // 个人信息组件
    │   │   │   ├── topicdetail
    │   │   │   │   ├── components
    │   │   │   │   │   ├── ContentView.vue         // 话题详情内容组件
    │   │   │   │   │   └── ReplayView.vue          // 回复组件
    │   │   │   │   │   └── ReplayView.vue 
    │   │   │   │   ├── IndexView.vue               // 话题详情页面
    │   │   │   │   
    │   ├── router
    │   │   └── router.js                           // 路由配置
    │   ├── utils                                   // 公用函数
    │   │   ├── base.js                             // 基本公用函数
    │   │   └── http.js                             // axios的封装
    │   ├── store                                   // vuex的状态管理
    │   │   ├── modules
    │   │   │   │──index.js                         // store模块集合 
    │   │   │   │──modules.js                       // 首页store的配置
    │   │   │   │──user.js                          // 用户模块store集合 
    │   │   ├── index.js                            // 引用vuex，创建store
    │   │   |── types                               // 常量
    │   └── stylus
    │       ├── reset.styl                          // 公共样式文件
    │   ├── App.vue                                 // 页面入口文件
    │   ├── main.js                                 // 程序入口文件，加载各种公共组件
    ├── favicon.ico                                 // 图标
    ├── index.html     

## 项目示例

![cnode](./README/cnode1.png 'cnode1')
![cnode](./README/cnode2.png 'cnode1')
![cnode](./README/cnode3.png 'cnode1')

目前只做了这三个页面，今后还会持续更新。

## 说明

计划会做pc+m端，也会做nuxt，ssr，typescript的版本。
