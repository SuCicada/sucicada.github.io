### SSH 走sockes5代理
```bash
ssh -o ProxyCommand="nc -X 5 -x 127.0.0.1:1080 %h %p" root@server
```


