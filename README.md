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

### 访问创建的静态站点

```dotnetcli
// 主页
http://localhost:8080/

// GraphQL 查询测试页
http://localhost:8080/___explore
```


### 通过 docker 在服务器安装 strapi

docker-compose.yml
```dotnetcli
version: '3'
services:
  strapi:
    image: strapi/strapi
    environment:
      DATABASE_CLIENT: mysql
      DATABASE_HOST: mysql
      DATABASE_PORT: 3306
      DATABASE_NAME: blog-gridsome
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: strapi
      DATABASE_SSL: 'false'
    volumes:
      - ./app:/srv/app
    ports:
      - '1337:1337'
    depends_on:
      - mysql

  mysql:
    image: mysql
    command: mysqld --default-authentication-plugin=mysql_native_password
    volumes:
      - ./data:/var/lib/mysql
    ports:
      - '3306:3306'
      - '33060:33060'
    environment:
      MYSQL_ROOT_PASSWORD: strapi
      MYSQL_DATABASE: blog-gridsome
      MYSQL_USER: strapi
      MYSQL_PASSWORD: strapi

```

配置的访问地址

```dotnetcli
http://strapi.roch.top:11337
http://strapi.roch.top:11337/graphql

```

#### 部署运行

> 安装依赖:
> - docker
> - docker-compose


```dotnetcli
docker-compose pull
docker-compose up -d
```

### 创建 vercel 并部署 gridsome

访问地址

```dotnetcli
https://gridsome.roch.top/
https://frontend-gridsome.vercel.app/
```

### 配置 strapi更新 触发 vercel 的构建操作

在 vercel 配置 hook

```dotnetcli
在 vercel 的项目中配置 Deploy Hooks -> \
deploy | main -> Create Hook -> \
https://api.vercel.com/v1/integrations/deploy/prj_FMJIFcdUiSFeeFu0XccNLnMjX9S4/6uaDl1P7Dw

```

在 strapi 中配置 Webhooks

```dotnetcli
名称: deploy
请求地址: https://api.vercel.com/v1/integrations/deploy/prj_FMJIFcdUiSFeeFu0XccNLnMjX9S4/6uaDl1P7Dw
事件:
    Entry: [全选]
    Media: [全选]
```

## 配置 gridsome 从 strapi 中获取内容

```
npm run build

npm i -g pm2
pm2 start npm -- run start --name blog-backend

npm install @gridsome/source-strapi
```

## 查询 strapi 的数据 示例

```
# Write your query or mutation here
query {
  allStrapiBlogs {
    edges {
      node {
        id
        title
        description
        content
      }
    }
  }
}
```

```
query {
  strapiBlogs (id:1) {
    id
		title
    description
    content
  }
}
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

// 项目部署
https://vercel.com/dashboard/
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