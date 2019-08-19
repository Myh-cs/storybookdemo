# storybookdemo
storybook 学习仓库

---
初始化
## CLI 版
快速生成storybookDemo
1. 新建sbByCli目录并进入该目录 
2. 执行`npm init`生成`package.json`文件
3. 执行`npx -p @storybook/cli sb init --type react`命令等待安装初始化
4. `npm run storybook`

执行完这几步后就可以看到storybook初始化完成并在页面上看到运行结果

*这也是第一次commit所完成的*

cli 为我们生成了 一个demo并初始化添加了
[addon-actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)
和
[addon-links](https://github.com/storybookjs/storybook/tree/master/addons/links)
两个插件分别用来**展示事件**交互和storybook内**转跳**。
