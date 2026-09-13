# Portfolio — Landscape A4

现有 React / TypeScript / Vinext 项目，保留原有路由、连续滚动阅读、菜单、项目转场、进度和全屏查看。

## 本地运行

需要 Node.js 22.13+ 和 npm。

```sh
npm install
npm run dev
```

打开终端显示的地址。生产构建：`npm run build`。构建后：`npm start`。

## 项目与文件

| 项目 | 文件夹 | 页数 |
| --- | --- | --- |
| Concrete | public/assets/project-01 | 6 |
| Interstices of Cities | public/assets/project-02 | 6 |
| Josie’s Daydream Album | public/assets/project-03 | 10 |
| Photography | public/assets/project-04 | 2 |

共 24 张横版 A4 PNG，尺寸 3508 × 2480。页名从 `01.png` 顺序编号。前三组已接入原始 PNG；Photography 按要求使用两张纯白横版 A4 空白 PNG，等待未来替换。不要旋转或拉伸原图。

Cover 使用原始 `public/assets/cover/cover.png`，1890 × 1063。Cover 按其自身比例完整显示，不强制变为 A4。

所有项目名称、简介、类别、角色、工具与图片路径集中在 `data/portfolio.ts`。`projectDefinitions` 中的 count 分别为 6、6、10、2，Index、Intro、进度与全屏分母全部由对应图片数组得出。About 与联系方式仍可在 profile 中编辑。

## 替换摄影空白页

将两张最终横版 A4 PNG 分别覆盖：

- `public/assets/project-04/01.png`
- `public/assets/project-04/02.png`

替换后更新 Photography 图片替代文本，移除“blank / awaiting artwork”描述；无需改页面布局或页数。更新正式网站前重新构建。

## 显示规则

阅读器的 `--sheet-ratio` 为 `297 / 210`；桌面宽度为 78vw，上限 1240px；平板 88vw；手机 96vw。PNG 使用 contain、完整原始比例、无滤镜。Cover 使用自然比例。全屏支持适配屏幕、原始像素查看、ESC / 背景关闭与双指缩放。

背景使用 #F4F0EA，文字 #34221C，次级文字 #6F625A，细线 #CFC5B8。项目强调色在数据中集中设置。纸纹是 `public/assets/ui/paper-grain.svg`，alpha 6.5%，仅用于网页背景，不覆盖任何作品。

## 原始素材与发布状态

Concrete、Interstices、Josie 分别原样复制自提供磁盘上的 P1、P2、P3 文件夹；Cover 同样原样复制。没有压缩重编码、裁切、调色或重新生成这些原始素材。

当前工作区的 hosting.json 未包含 site project_id，已连接 Sites 账户中未找到对应 portfolio。因此本轮完成并验证的是现有本地项目，没有新建网站或更新无法确认身份的线上站点。后续需要已发布网址及对应发布配置才能更新那个站点。

## GitHub 仓库

项目根目录包含 package.json，完整源码与 public/assets 一并保留。`/assets/...` 是站点根相对 URL，不依赖本机目录或固定域名；不要改成会在 `/work/project-01` 下解析错误的 `./assets/...`。本项目需要应用运行时，不是直接上传 GitHub Pages 的静态 HTML。
