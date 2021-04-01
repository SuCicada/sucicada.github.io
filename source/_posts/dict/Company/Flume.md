集中式一键化脚本 在 flume-1上.  /data/flume/tool 目录

### 初始化目录软链
echo redhat | /data/flume/tool/command_x6.sh /data/flume/tar-flume-init.sh

### 开关解压脚本
解压脚本通过crontab 配置
- 开启
		echo redhat | ./crontab_switch_x6.sh start bid
		echo redhat | ./crontab_switch_x6.sh start imp
		echo redhat | ./crontab_switch_x6.sh start act
- 关闭
		echo redhat | ./crontab_switch_x6.sh stop bid
		echo redhat | ./crontab_switch_x6.sh stop imp
		echo redhat | ./crontab_switch_x6.sh stop act

### 查看 flume 消费目录完成
一般我们重启flume之前, 需要检查flume监控的目录下的文件是否已经都处理完成
echo redhat | ./command_x6.sh ls -lR /data/flume/saas_has/log_tar_dir/ 

### 查看flume日志
echo redhat | ./command_x6.sh "tail /var/log/flume-ng/bid/\*.log"

