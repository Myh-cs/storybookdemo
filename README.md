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

> npx介绍  [npx 使用教程](http://www.ruanyifeng.com/blog/2019/02/npx.html)

## 手动集成版
将`storyboo`k集成到已有项目,这里以`create-react-app`创建的新项目为例
1. `npm install @storybook/react --save-dev`
2. `npm install babel-loader @babel/core --save-dev` 如果项目中已经装了 则不需要这一步
3. 新建`.storybook`文件见并在该文件夹下创建`config.js`文件
`config.js`
```js
import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

```
4. 在`scr`目录下创建`stories`文件夹，并在该文件夹下创建`demo.stories.js`文件
`demo.stories.js`
```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   
```
5. 在`package.json`文件里添加script `"storybook": "start-storybook"`
6. 运行`npm run storybook`

如果出先类似`Module not found: Error: Can't resolve 'react'`错误 

尝试执行`npm i`重新安装`node_modules`

或者整个删除node_modules后重新`npm i`安装

---
至此项目初始化完毕 但是相较cli版本的 仍然缺少`addon-actions`和`addon-links`插件。

我们紧接着将其添加进去。
 
 ### actions
1. `npm i -D @storybook/addon-actions`安装插件
2. 新建文件`.storybook/addons.js` （用来配置插件） 并引入`import '@storybook/addon-actions/register;'`
3. 在`src/stories/`下新建`action.stories.js`
```js
  import React from 'react';
  import { storiesOf } from '@storybook/react';
  import { action } from '@storybook/addon-actions';

  storiesOf('ActionDemo', module).add('default view', () => (
    <button onClick={action('button-click')}>Hello World!</button>
  ));
```
运行后如下 点击按钮会出现`action`日志
![image](https://user-images.githubusercontent.com/19797724/63237750-da3e7800-c275-11e9-94be-c46e7bb83eca.png)

---
### links
1. `npm i -D @storybook/addon-links`
2. 在文件`.storybook/addons.js` （用来配置插件） 中引入`import '@storybook/addon-links/register;'`
3. 在`src/stories/`下新建`link.stories.js`
```js
import React from 'react';
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

storiesOf('Link', module)
  .add('First', () => (
    <button onClick={linkTo('Link', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Link', 'First')}>Go to "First"</button>
  ));
```
  

