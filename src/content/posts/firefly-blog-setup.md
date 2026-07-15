---
title: 从零搭建 Firefly 博客：一次愉快的技术选型实践
published: 2026-07-14
description: 记录一次完整的 Astro 静态博客搭建体验——从 fork 主题、EdgeOne Pages 部署到 GitHub 自动化维护，分享给想搭个人博客的朋友们。
tags: [Firefly, Astro, 博客, 前端, 部署, EdgeOne]
category: 博客指南
---

## 缘起

一直想拥有一个属于自己的个人博客。之前考虑过 Hexo、Hugo、WordPress……但总觉得差点什么。直到偶然在 GitHub 上看到了 **Firefly（流萤）** 这个主题——

第一眼就被它的颜值击中了。清新、干净、不花哨，但又有很多实用的细节。看了下是基于 **Astro** 框架构建的，静态生成、性能优秀，果断决定就是它了。

## 技术选型

我的博客技术栈非常简单：

| 层级 | 技术 |
|------|------|
| 框架 | **Astro** + **Tailwind CSS** |
| 主题 | **Firefly（流萤）** — 二次开发自 Fuwari |
| 源码托管 | **GitHub**（fork 自 CuteLeaf/Firefly） |
| 部署 | **EdgeOne Pages** |
| 自动化 | **GitHub Token** + git push 触发自动构建 |

为什么选这个组合？

- **Astro** 是静态站点生成器，构建出来就是纯 HTML，速度快得飞起
- **Firefly** 主题开箱即用，功能丰富但不会显得臃肿
- **EdgeOne Pages** 部署免费，支持 pnpm 构建，国内访问速度也不错
- **GitHub** 托管源码，天然有版本管理，不用担心丢数据

## 搭建过程

### 第一步：Fork 主题

去 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly) 点了一下 Fork，自己的仓库里就有了。然后在本地 clone 下来：

```bash
git clone https://github.com/你的账号/Firefly.git
cd Firefly
pnpm install
pnpm dev
```

`pnpm dev` 之后浏览器打开 `localhost:4321`，看到博客已经在本地跑起来了。

### 第二步：部署到 EdgeOne Pages

EdgeOne 的部署流程很简单：

1. 在 EdgeOne 控制台选择「Pages」→「新建项目」
2. 关联 GitHub 仓库
3. 配置构建参数：
   - **构建命令**：`pnpm install && pnpm build`
   - **输出目录**：`dist`
   - **Node 版本**：≥ 22
4. 点击部署

之后每次 `git push`，EdgeOne 会自动检测变化、重新构建、部署上线。整个过程不需要手动操作，**写过即发布**。

### 第三步：配置自动化维护

为了让维护更高效，我生成了一个 GitHub Personal Access Token（仅限这个仓库的读写权限），这样日常操作就变成了一条龙：

```bash
写文章 → git add → git commit → git push → 自动部署
```

我还配置了上游仓库，方便后续同步主题更新：

```bash
git remote add upstream https://github.com/CuteLeaf/Firefly.git
git fetch upstream
git merge upstream/master
git push
```

## 博客的日常维护

### 写文章

文章存放在 `src/content/posts/` 目录下，Markdown 格式。每篇文章开头有一段 front-matter：

```markdown
---
title: 文章标题
published: 2026-07-14
description: 文章的简短描述
tags: [标签1, 标签2]
category: 分类名称
draft: false
---
```

写完后推送到 GitHub，EdgeOne 自动构建，等一两分钟就能看到新文章上线了。

### 关于标签和分类

刚接触 Firefly 时，我一度搞混了标签和分类的区别。后来翻了源码才弄明白：

- **分类（category）**：每篇文章只能有一个，是文章的"大类"。比如我的博客目前分了「文章示例」和「博客指南」两类。
- **标签（tags）**：每篇文章可以有多个，是文章的"关键词"。比如一篇文章可以同时打上 `[备考, 申论, 经验分享]` 等多个标签。

两者都不需要提前定义，写文章时直接写就行，Firefly 会自动收集并展示在侧边栏。

### 主要配置

Firefly 的配置文件都在 `src/config/` 目录下，清晰明了。我最常用的几个：

| 配置 | 文件 | 说明 |
|------|------|------|
| 站点标题/副标题 | `siteConfig.ts` | 改博客名称和描述 |
| 主题色 | `siteConfig.ts` | 360+ 配色可选 |
| 个人头像/简介 | `profileConfig.ts` | 展示在侧边栏 |
| 导航菜单 | `navBarConfig.ts` | 页面导航 |
| 侧边栏组件 | `sidebarConfig.ts` | 控制哪些组件显示 |
| 归档折叠 | `siteConfig.ts` → `foldArticle` | 控制归档页是否折叠旧年份 |

### 同步上游更新

CuteLeaf 更新非常勤快（目前已经 1175+ commits），偶尔会同步一下上游的新功能：

```bash
git fetch upstream
git merge upstream/master
# 解决可能的冲突
git push
```

建议只修改 `src/config/` 和 `src/content/` 下的文件，不要动主题核心代码，这样更新时冲突会少很多。

## 几个让我惊喜的功能

用了一段时间，Firefly 有几个功能让我觉得特别值：

1. **双侧边栏布局** — 左侧放个人资料和音乐播放器，右侧放日历和统计，信息密度刚刚好
2. **归档页自动按年分组** — 文章多了以后，归档页按年份折叠，非常清爽
3. **文章加密** — 有些私密内容可以设置密码，访客输入密码才能查看
4. **Mermaid 图表支持** — 写技术文章时画流程图非常方便
5. **暗黑模式** — 默认支持，护眼又好看

## 小结

从决定搭建到博客上线，整个过程比我想象中顺畅得多。Firefly 主题的文档写得清楚，EdgeOne 的部署也很丝滑，GitHub 的自动化让后续维护几乎零成本。

如果你也在考虑搭个人博客，不妨试试这个组合。GitHub 上 fork 一份，配置好 EdgeOne，半小时就能拥有一个属于自己的小天地。

博客地址：[https://blog.hybin.cn](https://blog.hybin.cn)（欢迎来玩～）

---

*最后更新：2026-07-14*

---

> 📝 本文由 AI 助手（白糖）协作编写，记录真实搭建体验与维护心得。