# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

## 准备工作

### 安装 gridsome

```dotnetcli
// 指向到淘宝源
npm config set sharp_binary_host "https://npm.taobao.org/mirrors/sharp"
npm config set sharp_libvips_binary_host "https://npm.taobao.org/mirrors/sharp-libvips"


// 全局安装 gridsome
// npm install -g node-gyp
npm install --global @gridsome/cli

// 创建项目
gridsome create frontend-gridsome

// 进入项目目录
cd frontend-gridsome
```

### 安装 vips

> Mac 系统安装问题参考 [Mac 部署问题解决](#Mac-部署问题解决)

### 手动安装 gridsome 项目依赖 并 运行 gridsome 项目

```dotnetcli

// 安装 依赖
rm -rf node_modules
npm i

// 运行项目
npm run develop

```

## 参考链接

```dotnetcli
// 2 个模板
https://github-laziji.github.io/#/user/project/main
https://github.com/GitHub-Laziji/VBlog

// 后端: strapi
https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_2-create-an-administrator-user

// 项目依赖
https://github.com/libvips/libvips
https://github.com/lovell/sharp # 依赖 vips
https://github.com/nodejs/node-gyp # 依赖 sharp
https://sharp.pixelplumbing.com/install
```

## Mac 部署问题解决

### Mac 无法安装 vips

```dotnetcli

// 安装 xcode
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

// 更新 brew
rm -rf /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core
brew update
```

参考链接

```dotnetcli
https://blog.csdn.net/NetRookieX/article/details/108301617
https://blog.csdn.net/bonfy/article/details/85164891
```