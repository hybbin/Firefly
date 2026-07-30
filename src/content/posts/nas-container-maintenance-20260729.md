---
title: NAS 容器维护日记：Vaultwarden 升级与 Lucky 持久化配置
published: 2026-07-29
description: 记录一次 NAS 上 Docker 容器的全面维护，包括 Vaultwarden 升级、Lucky 持久化配置、以及一些踩坑记录。
tags: [NAS, Docker, Vaultwarden, Lucky, 运维]
category: 技术分享
image: ./images/nas-maintenance-cover.png
draft: false
---

周末抽空把 NAS 上的几个容器整理了一遍，记录一下过程和踩的坑。

## Vaultwarden 升级：从 1.34.3 到 1.37.1

自建的密码管理器 Vaultwarden 已经跑了 10 个月没动过，版本停留在 1.34.3。这次升级跨度不小，中间跳过了 1.35、1.36、1.37 三个大版本。

### 升级内容

这次升级最重要的其实是**安全修复**：

| 版本 | 修复内容 |
|:----|:---------|
| 1.37.0 | SSRF 漏洞（图标端点）、跨组织密码访问漏洞、组织策略绕过 |
| 1.36.0 | SSO 登录 CSRF、用户/组织枚举、SSRF 图标端点 |

作为密码管理器，这些漏洞还是值得重视的。

### 踩坑记录

**镜像源问题**：NAS 之前配置了 Docker 镜像加速 `docker-0.unsee.tech`，但这个镜像源已经不通了，导致 `docker pull` 一直卡住。最后在 `daemon.json` 里临时清空镜像源配置，重启 Docker 后直连 Docker Hub 拉取成功，拉完再恢复配置。

**IP 变了**：重建容器时没指定 IP，从原来的 `192.168.86.11` 变成了 `192.168.86.10`。还好 QNAP 的静态网络支持 `--ip` 参数，重建时指定回去就行。

**ADMIN_TOKEN**：新版本默认不开启管理面板，需要设置环境变量 `ADMIN_TOKEN` 才能访问 `/admin` 页面。虽然面板提示明文 token 不够安全，但个人使用问题不大。

升级后：
```
Vaultwarden 1.34.3 → 1.37.1
Web-Vault 2025.7.0 → 2026.6.4
```

## Lucky 容器持久化配置

Lucky 这个反向代理工具用的是 Docker 的测试分支镜像，重建容器后配置全丢了。原因是它的配置文件和 SSH 密钥都存在容器内部，没做持久化挂载。

### 解决方案

最终容器挂载了 4 个目录：

```
/goodluck     → /share/server data/luck/       # 证书、脚本、静态网站
/root/.ssh    → /share/server data/luck/ssh/    # SSH 密钥（免密登录 NAS）
/app/conf     → /share/server data/luck/conf/   # Lucky 配置
/app/startup.sh → /share/server data/luck/startup.sh  # 启动脚本
```

启动脚本会自动安装 OpenSSH，确保容器重建后 SSH 免密登录 NAS 的功能不受影响。

### 证书自动更新流程

Lucky 的 ACME 证书续签后，通过 SSH 连接到 NAS 宿主机执行 `extract_cert.sh` 脚本，自动安装证书到 stunnel/thttpd/Qthttpd 并重启服务。脚本配置在 Lucky 后台的证书映射变更脚本里。

## 一点感想

NAS 上跑的服务多了，维护工作确实比想象中多。容器重建后 IP 变了、配置丢了、镜像源不通了……各种小问题层出不穷。不过把这些流程都写成脚本持久化到 NAS 目录后，下次重建就省心了。

---

> 📝 本文由 AI 助手协作编写，记录真实搭建体验与维护心得。
> *最后更新：2026-07-29*

> ⚠️ **免责声明**：本文内容为个人运维记录分享，不构成任何技术建议或投资建议。操作前请自行评估风险并备份数据。