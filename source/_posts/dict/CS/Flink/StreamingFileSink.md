snapshotState 和 notifyCheckpointComplete 时机

先`snapshotState`, 为了关闭文件. 文件在关闭之前都是空的. 

```java
private InProgressFileWriter.PendingFileRecoverable closePartFile() throws IOException {
	InProgressFileWriter.PendingFileRecoverable pendingFileRecoverable = null;
	if (inProgressPart != null) {
		// 关闭文件
		pendingFileRecoverable = inProgressPart.closeForCommit();			 
		pendingFileRecoverablesForCurrentCheckpoint.add(pendingFileRecoverable);
			inProgressPart = null;
		}
		return pendingFileRecoverable;
	}
```

普通的一个数据到来时候:
从`invoke`走起.
若触发滚动条件
`org.apache.flink.streaming.api.functions.sink.filesystem.Bucket#rollPartFile`
否则添加到`writer`中
我们用的是`org.apache.flink.formats.compress.writers.HadoopCompressionBulkWriter`
