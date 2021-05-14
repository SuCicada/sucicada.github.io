查看挂载点
docker inspect a6321aad3922 | grep Mounts -A 20

查看完整执行命令
docker ps -a --no-trunc

进入容器
docker exec -it cdp-consumer-1.4.0 /bin/bash

docker run -it cdp-consumer-1.4.0 /bin/bash