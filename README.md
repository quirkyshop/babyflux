## 简单的flux脚手架


### 为什么要用脚手架

- 至少更容易在正确的路上摔倒...

### 工作流


- 开发调试(dev)
- 构建(build)
- 生产发布(deploy)

### 构建(build)

两种选择：

- `bundle.js` : 其实只是将JSX,ES6,css-loader等编译，构建成bundle.js，能够在浏览器上直接使用。

- `app + vendors` : 将第三方的插件和本地代码分开，生成app.js和vendors.js 实际上是更好的选择。

### 生产发布(deploy)

就是 `uglify` 后的 `构建(build)`，由于只是脚手架，不牵涉到版本发布。

### 开发调试(dev)

两个亮点：

1. 改变代码，浏览器即时刷新

2. 热部署react组件


eg：热部署组件的简单解释

	1. 点击事件，改变state,渲染组件
	2. 改动组件代码，把名称乱改,此时刷新页面，仍保留之前state

![hot](http://f2e.souche.com:7002/assets/images/babyflux/hot.png "hot image")

#### 本地浏览器自动刷新调试

运行npm run dev

将index.html放入build文件夹下,并且引入编译后的js文件(实际上文件夹不存在，只是运行时有)


#### 文件结构



#### 整体架构

整体架构和官网给出的demo实现方式一致，不同的是引用了ES6的module。

一张图读懂flux1

![ground](http://f2e.souche.com:7002/assets/images/babyflux/ground.png "ground image")

#### 测试

全部测试都采用jest
















---


#### 参数解释
webpack-dev-server --devtool eval --progress --colors --content-base --hot build

- progress 进度
- colors 颜色
- devtool eval 为代码创建地址，报错的时候可以定位文件和行号
- content-base 设置输出目录
- hot 即时刷新