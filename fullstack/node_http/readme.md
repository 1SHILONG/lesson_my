- 前后端都会, 拿1.5倍工资
- 全栈开发流程
    1. 前后端分离
    2. fastmock api接口的伪造+前端的效果
        独立完成
    3. 切换后端身份
        http 协议
        1. node 内置了http库,
            createServer  单例方法
            回调函数,   每次用户来都会执行
            req.url req 用户对象
            res   响应对象
        2. 3000 listen
            http://localhost :3000 /detail?id=1
              协议  127.0.0.1 域名  接口程序  path