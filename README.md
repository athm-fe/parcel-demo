# Simple Parcel Demo

功能还比较简陋，但是打包思路很有意思，可以使用 SASS 、ES6 等功能，比较好的解决了路径问题。

比较适合开发单页面的活动专题时使用。

特点
1. 非常易用
2. 打包速度快
3. 插件安装即可，Parcel 会自动加载

目前缺点：
1. 不支持 multi enties
2. 打包路径可定制性差
3. HMR 功能目前问题比较多
4. Cache 功能能问题比较多
5. 当有问题时请 `rm -rf .cache dist build` ，然后重新运行构建
6. 由于 SASS @import 时存在 url 的相对路径无法正确解析问题。所以有如下策略
  * 使用 JavaScript 的 `import` 引入 `components` 和 `node_modules` 里的样式模块
  * 使用 SASS @import 引入的文件包含相对路径的图片时，请保证被引入的 SASS 文件和原文件在同一目录
  * 如果 SASS @import 引入的文件想使用图片，请使用绝对路径

定义 Assets
1. 资源类型
2. 解析资源
3. 提取依赖
4. Transform
5. Code Generate

处理流程
1. Entry
2. Parse + Deps + Transform
3. Assets Tree
4. Bundles Tree
5. Packagers
6. Final Bundle

使用方法
1. npm i (安装所需依赖)
2. npm start (默认运行 index/index.html 文件)
3. npm run start:list(运行 list/index.html , parcel 目前版本不支持 multi enties,可到 `package.json` 文件手动配置入口)
4. npm run build (默认压缩 index 和 list 目录下文件,添加/更改目录需修改 `package.json`)
5. npm run build:inject (将 index/index.html 中引用的`非CDN`类型的静态文件注入到html文件中,更改/添加目录需修改 `inject.js` 中 `aassetFile` 变量)