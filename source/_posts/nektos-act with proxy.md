title: "如何对 GitHub Action 调试工具: nektos/act 的 clone 阶段使用代理 "
date: 2022-05-09 21:51
---
github action 的执行阶段, 每一个 step 如果使用到了 github 上的开源action. 比如  
```yaml
- name: Create comment
  uses: peter-evans/create-or-update-comment@v2
  with:
    issue-number: 1
    body: |
        This is a multi-line test comment
```
那么这个时候本地执行 act 的话, act 会自动使用 https 方式 clone 对应的仓库.  
这个操作本身没有任何问题, 但是问题就在于我们所处的地区网络环境.  
有些地区克隆 https 的 GitHub 库几乎难以正常成功. 故初次下策.  
查看了 act 的源码实现发现, 克隆操作是在本地进行, 而且使用了 go-git 这个库
根据 https://stackoverflow.com/questions/62380283/go-git-clone-through-proxy 找到了代理 go-git 的方案.  
然后修改一下控制台参数的传入.  

最终实现参见: https://github.com/SuCicada/act-with-proxy  
下载链接: https://github.com/SuCicada/act-with-proxy/releases/download/v0.2.26/act_Windows_x86_64.tar.gz
目前只提供了 Windows 版. 其他环境可以手动编译. go 的编译还是很容易的.  
使用举例:
```bash 
act --git-proxy http://127.0.0.1:10809
```
