# SPA 优质的现代用户体验
1. 不要通过a 标签跳转页面白一下
   click event.preventDefault() 阻止默认行为
   index.html#page1  index.html#page2  index.html#page3
   url hash 部分 不会刷新页面
   不同的URL来匹配不同的资源
   URL 会变，
2. url 的hash部分改变了 请求新的内容
      并且页面不会重新刷新

3. URL 分成以下几部分
   js URL 属于 BOM   location对象
   http://127.0.0.1:5500/lesson-my/router/hash/index.html?a=1#/page2
   location.protocol => http:  =>https
   location.host => 127.0.0.1:5500  domain port
      location.hostname => 127.0.0.1
      location.port => 5500
   location.pathname
   location.search
   location.hash 改变时，不会去刷新
