有时候我们在有`kerberos`的`Hadoop`集群节点上执行 Hadoop 有关操作会遇到:
`javax.security.auth.login.LoginException: Clock skew too great (37)`

```
32295:Caused by: org.apache.hadoop.security.KerberosAuthException: failure to login: for principal: xxxxxxxxx from keytab /xxxxxxxx javax.security.auth.login.LoginException: Clock skew too great (37) - PREAUTH_FAILED
32296-	at org.apache.hadoop.security.UserGroupInformation.doSubjectLogin(UserGroupInformation.java:1992)
32297-	at org.apache.hadoop.security.UserGroupInformation.loginUserFromKeytabAndReturnUGI(UserGroupInformation.java:1360)
32298-	at org.apache.hadoop.security.UserGroupInformation.loginUserFromKeytab(UserGroupInformation.java:1140)
32299-	at org.apache.flume.auth.KerberosAuthenticator.authenticate(KerberosAuthenticator.java:176)
32300-	... 23 more
32301-Caused by: javax.security.auth.login.LoginException: Clock skew too great (37) - PREAUTH_FAILED
32302-	at com.sun.security.auth.module.Krb5LoginModule.attemptAuthentication(Krb5LoginModule.java:804)
32303-	at com.sun.security.auth.module.Krb5LoginModule.login(Krb5LoginModule.java:617)
32304-	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
32305-	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
```

简单来说问题的原因是:
> 服务器和管理节点的时间相差过大。如果环境中计算机的系统时间与域控制器或其他控制器的系统时间相差 5 分钟以上，则 Kerberos 身份验证会失败。

所以只要同步一下时间就好。可以使用`ntp`等工具。

参考:
https://docs.vmware.com/cn/vRealize-Orchestrator/8.2/com.vmware.vrealize.orchestrator-use-plugins.doc/GUID-D452862F-7E6C-453E-8E13-DBC231881E02.html

