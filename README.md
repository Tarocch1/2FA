# 2FA ![Github Actions](https://www.github.com/Tarocch1/2FA/workflows/Main%20workflow/badge.svg)

双因素认证器。

## 使用方法

使用rsa公钥加密totp密钥，保存在 `public/code.json` 中，使用时，用rsa私钥解密得到totp密钥，计算得到临时验证码。
