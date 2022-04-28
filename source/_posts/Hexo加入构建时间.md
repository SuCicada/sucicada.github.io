title: Hexo 加入构建时间 (add build time)
date: 2022-04-28 17:44
---
实现思路:  
在执行`hexo generate`前用程序自动加入当前时间在 `_config.yml` 文件中.  
然后在主题代码中的 页面代码文件中加入相应解析显示逻辑即可.

