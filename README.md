# 养成一个新习惯只需要 21 天

20230723: 上线 0.0.1 版本，具备了**养成新习惯**核心功能，[线上体验地址](https://stars-chan.github.io/twenty-one/)
![Alt text](image.png)

## 功能说明

v0.0.1

- 栏目分布依据：`准备`(0)、`启航`(1-7)、`坚持`(8-14)、`冲刺` (15-20)、 `完成`(21)，括号内为习惯坚持天数
- 养成习惯：输入需要养成的习惯
- 删除习惯：点击进入删除模式，仅`准备`栏习惯可以被点击删除
- 退出删除：退出删除模式，该状态下，点击某个习惯即表示当天完成该习惯
- 每个习惯每天仅可被点击一次，坚持天数一旦中断，即重置为 0，回到`准备`栏

## 本地运行

### 1-克隆项目到本地:

```
git clone git@github.com:Stars-Chan/twenty-one.git
cd twenty-one
```

### 2-安装依赖并启动

```
yarn
yarn start
```

或者

```
npm install
npm start
```

### 3-打开项目

推荐用谷歌浏览器打开 [http://localhost:3000](http://localhost:3000)

## 部署到 `Github Page`

### 1-同步

将本地代码同步到 github 仓库上

### 2-修改 package.json 文件

（1）配置 homepage

```
"homepage": "https://stars-chan.github.io/twenty-one",

```

（2）配置发布选项

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

完整文件参考

```
{
  "name": "twenty-one",
  "version": "0.1.0",
  "homepage": "https://stars-chan.github.io/twenty-one",
  "private": true,
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.5",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.1",
    "react-scripts": "5.0.1",
    "redux": "^4.2.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "gh-pages": "^5.0.0"
  }
}
```

### 3-安装 gh-pages

```
npm install gh-pages --save-dev
```

### 4-部署项目

```
npm run deploy
```

配置完之后，twenty-one 仓库会多了一个 `gh-pages` 分支，存放的是项目打包编译完成之后的静态文件，在 `Settings -> Pages` 下，可以看到项目已经被成功部署