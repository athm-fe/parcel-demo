# Simple Parcel Demo

* Parcel 不支持多入口
* 由于 SASS @import 时存在 url 的相对路径无法正确解析问题。所以有如下策略
  * 使用 JavaScript 的 `import` 引入 `components` 和 `node_modules` 里的样式模块
  * 使用 SASS @import 引入的文件包含相对路径的图片时，请保证被引入的 SASS 文件和原文件在同一目录
  * 如果 SASS @import 引入的文件想使用图片，请使用绝对路径
* HMR 功能目前问题比较多
* Cache 功能能问题比较多
* 当有问题时请 `rm -rf .cache dist build` ，然后重新运行构建
