# 验收表

| 标准 | 落地证据 |
| --- | --- |
| 旁白不显示身份标识 | `renderNode()` 对 `旁白` 隐藏 `#speaker`；Playwright 检查开场旁白 `nameplateVisible=false`。 |
| 每个具名说话人有对应立绘 | `speakerActors` 覆盖塞德里克、安塔莉亚、大将军、大臣、老书记官、侍女、侍从；`test/smoke.mjs` 扫描所有具名 speaker。 |
| 具名角色有身份标识 | `renderCast()` 为每个可见立绘同步创建 `.portrait-label`；移动端验收确认标签不换行。 |
| 当前发言者正常显示 | `.portrait.speaking` 高亮，Playwright 检查大将军、塞德里克、安塔莉亚发言时对应立绘高亮。 |
| 在场但未发言者暗淡；不在场者隐藏 | `castForNode()` 按场景返回在场角色，未在 cast 中的 portrait/label 移除 `visible`；暗淡改用滤镜压暗，避免半透明重影。 |
| 开场不是只有猫 | `sceneCasts.throne` 包含塞德里克、大将军、大臣、老书记官、猫；Playwright 桌面/移动均检查开场五人立绘可见。 |
| 立绘有多表情差分 | 每个角色在 `assets.characters` 下至少 3 个表情资源，`test/smoke.mjs` 检查。 |
| 选择简短且不明写数值理由 | 玩家按钮只显示 `回王座/多看一眼/伸手/传膳/逗她/逼近/后退/碰耳/结算` 等短标签；hint 不再写入按钮。 |
| CG 不出现人物重影 | DOM/CSS 移除 `cg-live`、`cg-shot`、`cg-part` 与局部贴图 token；CG 动画只移动单张 `#event-cg` 加非图像光效。 |
| 每个章节/小故事至少 3 个 CG | `storySections` 记录 3 段：序章 4 张、第一章 4 张、月圆/禁书库 4 张；`test/smoke.mjs` 检查每段 >=3 且可达。 |
| 符合救猫咪理论，有起伏 | 剧情节点包含主题陈述、献礼催化、救猫咪善行动作、议事厅假胜利、月圆揭示、禁书库诚实伤人、共同目标收束。 |
| 去 AI 味，避免“不是而是”套路 | `rg` 与 `test/smoke.mjs` 检查 `不是/而是/不是...而是` 均无命中；台词改成角色化动机和动作推进。 |
| 自己验收桌面与移动端 | Edge/Playwright 跑桌面 1440x900 与移动 390x844：关键节点断言 errors=[]；完整路线均到 `ending`，107 个节点、4 组选项、12 张 CG 全部经过。截图在 `/private/tmp/soya-vn-verify/`。 |
