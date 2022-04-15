
<p align="center">
    <a href="https://react.k-ui.cn">
        <img width="100" src="https://chuchur.com/kui/react/logo.svg">
    </a>
</p>

### 一枚前端UI 组件库 for React

在追求完美视觉体验的同时也保证了其性能高效。

欢迎使用 、批评、指正、吐槽、[Star](https://gitee.com/chuchur/kui-react) 

### 开发   
```xml
npm run dev
```

### 编译   
```js
//编译文档
npm run build:docs
//编译组件
npm run build
```


### 特性   
漂亮的UI，可定制主题   
兼容IE9+   
组件丰富，功能强大

### 更新日志
logs：[https://react.k-ui.cn/#/log](https://react.k-ui.cn/#/log)

#### 文档
Docs : [https://react.k-ui.cn](https://react.k-ui.cn)   
Gitee: [https://gitee.com/chuchur/kui-react](https://gitee.com/chuchur/kui-react)

#### 安装
```
npm install react-kui
```

#### 使用

```js
import React from 'react'
import Render from 'react-dom'
import { Button } from 'react-kui'
import 'react-kui/dist/k-ui.css'

Render.render(<Button type="primary"></Button>,document.getElementById('app'))
