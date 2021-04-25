- git查看远程分支:
	```sh
	git branch -a
	```
- git 创建新分支
	`git branch xxx`	
- 查看当前分支流信息
	`git reflog show`

## token
- 注意:
	- github:
		- environment secrets设置之后, 需要在action yaml中指定environment, 才能生效. 