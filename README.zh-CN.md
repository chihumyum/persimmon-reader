# Persimmon 网站

<p align="right"><a href="./README.md">English</a></p>

这个仓库仅包含 [persimmon.cc](https://persimmon.cc) 的网站源码，负责维护公开
landing page，以及 Persimmon App 所需的支持、隐私政策与服务条款页面。

应用源码、产品文档、issue 与发布自动化由 Persimmon 应用主仓库维护，不放在这里。

## 页面

- `/` — landing page 与下载入口
- `/support` — 支持联系方式与排障信息
- `/privacy` — 隐私政策
- `/terms` — 服务条款

## 本地开发

网站使用 Node.js 22、pnpm 10、Next.js 和 Vinext。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

提交改动前运行完整校验：

```bash
pnpm check
```

## 配置与部署

本地需要覆盖环境变量时参考 [`.env.example`](./.env.example)。推送到 `main`
后，`.github/workflows/deploy-cloudflare.yml` 会把生产版本部署到 Cloudflare
Workers。

这个仓库只维护网站。App 实现、功能说明和二进制发布均属于应用主仓库。

## 许可证

网站源码采用 [MIT License](./LICENSE)。除非另有说明，该许可证不授予
Persimmon 名称、产品标识、截图、演示媒体与第三方应用商店标识的使用权。
