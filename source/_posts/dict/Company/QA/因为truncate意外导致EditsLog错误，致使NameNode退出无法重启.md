  简单来说就是在某种极端情况下，两个客户端对同一个块同时进行`close`和`truncate`操作导致`edit log`异常。
  
## 场景举例[todo]：
Flink 使用BucketingSink 写Hdfs时，故障恢复的时候会对文件进行 truncate 截断操作。

## 问题解释：	
1. ClientA 发送[**关闭块**]请求给NameNode, NN 处理完成, 释放文件锁.  但是尚未写入 edit log.
	(此时文件大小: 100)
2. 此时ClientB 发送[**truncate**]请求给NameNode, NN处理, 将文件截断, 写入edit log: 
	1. truncate:  100 -> 90
	2. close:  now size 90
3. ClientA的 close 请求写入edit log:
	1. close: now size 90
	 

最终edit log:
	1. close块操作:  size: 90
	2. truncate操作: size: 100 -> 90
	3. close 操作: size 90

所以在1->2的过程中出现了错误.

## 疑惑:
- [ ] 为什么写第一个close操作到edit log的时候,  是获取最新的块大小, 而不是当时的块大小

```mermaid
sequenceDiagram

```




## 参考:
`org.apache.hadoop.hdfs.server.namenode.FSNamesystem#setReplication`  
[Standby NameNode due loads the corruption edit log, the service exits and cannot be restarted ](https://issues.apache.org/jira/browse/HDFS-15391)
[Multiple CloseOp shared block instance causes the standby namenode to crash when rolling editlog](https://issues.apache.org/jira/browse/HDFS-15175)  
[基于RPC Call延时返回的HDFS异步editlog原理](https://blog.csdn.net/Androidlushangderen/article/details/106535484)
