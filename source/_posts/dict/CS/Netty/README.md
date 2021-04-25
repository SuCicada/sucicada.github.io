
### 关键词:
- 零拷贝: 

[Reactor模式](/CS/设计模式/Reactor模式)


### 参考: 
- [Netty入门教程——认识Netty](https://www.jianshu.com/p/b9f3f6a16911)


[Netty 系列之 Netty 线程模型](https://www.infoq.cn/article/netty-threading-model)

如何学习Java的NIO？ - Java3y的回答 - 知乎 https://www.zhihu.com/question/29005375/answer/667616386

---
网络编程的线程模型发展: 
1. 单线程
2. 多线程
3. 线程池
4. Reactor模式
	1. 单线程Reactor


Reactor模式
基于事件驱动模型, 基于java NIO
IO主要分为文件IO, 网络IO
关于文件IO
NIO 的channel使用了内存映射文件
通过操作内存来操作文件，省了从磁盘文件拷贝数据到用户缓冲区的步骤，所以十分高效。
关于网络IO



关于 javaNIO
要点:
- put 和 flip  的操作现象, buffer中各个指标的变化
- 直接与非直接缓冲区
	- 非直接缓冲区创建方法
- 虚拟内存与内存映射文件的区别与联系

- UNIX 5种I/O模型
- 用户空间和内核空间