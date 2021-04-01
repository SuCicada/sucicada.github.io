关键词
共享内存
位置透明
actor模型

每个应用都需要创建一个ActorSystem


actor的关键在于：
- 分而治之，每一个节点（actor）都是一样的结构，但是相互之间存在层级结构（树形）。这样能够做到任务下发。子actor再创建子子actor。
- 其次就是监管。对于多子任务系统来说，中央式监管是必须的。


参考资料
https://blog.csdn.net/liubenlong007/article/details/53782966
https://segmentfault.com/blog/akka


