# Frontend-Monorepo-repository

用 **pnpm workspace** 管理的前端 monorepo，可放多个 web 应用与共享包。

## 目录结构

- `apps/`：各独立 web 应用（示例：`web-alpha`、`web-beta`）
- `packages/`：共享库（示例：`@repo/shared`）
- `pnpm-workspace.yaml`：声明 workspace 包路径
- `tsconfig.base.json`：应用内 `extends` 的公共 TS 配置

## 要求

- Node.js ≥ 20
- 建议使用 [pnpm 9](https://pnpm.io/)（根目录 `package.json` 的 `packageManager` 字段与 lockfile 一致）

## 常用命令

在仓库根目录执行：

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装全部依赖 |
| `pnpm dev` | 并行启动所有带 `dev` 脚本的应用 |
| `pnpm dev:alpha` | 只跑 `web-alpha`（默认端口 5173） |
| `pnpm dev:beta` | 只跑 `web-beta`（默认端口 5174） |
| `pnpm build` / `pnpm lint` | 递归执行各子包 `build` / `lint` |
| `pnpm affected:apps` | 本地查看相对某 git ref 会参与 Docker 矩阵的 **apps/** 名称（见 `scripts/affected-apps.mjs`） |

## 新增一个 webapp

1. 在 `apps/` 下新建目录（例如 `apps/my-app`）。
2. 在该目录添加 `package.json`，`name` 建议使用 `my-app`（与目录名一致便于 `--filter`）。
3. 若需引用共享代码：在依赖里写 `"@repo/shared": "workspace:*"`（包名以 `packages/*/package.json` 的 `name` 为准）。
4. 根目录可再加脚本：`"dev:my-app": "pnpm --filter my-app dev"`。

技术栈可按需替换；当前示例为 **Vite 6 + React 19 + TypeScript**。
