# 2FA ![Github Actions](http://aliyunfc.tarocch1.com/github-actions-badge/Tarocch1/2FA)

双因素认证器。

## 使用方法

使用rsa公钥加密totp密钥，保存在 `public/code.json` 中，使用时，用rsa私钥解密得到totp密钥，计算得到临时验证码。
