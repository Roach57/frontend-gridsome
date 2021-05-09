<template>
    <Layout>
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
            <!-- <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
            <el-button @click="$share()" style="margin-left: 10px" icon="el-icon-share" type="warning" plain circle></el-button>
            <el-button type="primary" icon="el-icon-edit" round plain style="float: right;" @click="goAdd">写博文</el-button> -->
        </el-card>

        <div v-if="blogs&&blogs.length>0">
            <el-card shadow="hover" v-for="(item,index) in blogs" :key="'p'+index" style="margin-bottom: 20px" v-if="!item.hide">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <a style="text-decoration:none;cursor:pointer" @click="$router.push(`/blog/details/${item.name}`)">
                                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{item.title}}
                                </a>
                            </span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align: right;">
                                <!-- <el-button @click="$share('/user/blog/details/'+item.id)" style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                                <el-button @click="editBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token"></el-button>
                                <el-button @click="deleteBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-delete" v-if="token"></el-button> -->
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{item.updateTime}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{item.description}}
                </div>
            </el-card>
            <div style="text-align: center">
                <el-pagination @current-change="list" layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize"
                    :total="query.pageNumber*query.pageSize">
                </el-pagination>
            </div>

        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!blogs||blogs.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </Layout>
</template>

<script>
export default {
    name: 'BlogPage',
    metaInfo: {
        title: 'Blog Roch57'
    },
    data() {
        return {
            query: {
                page: 1,
                pageSize: 5,
                pageNumber: 1
            },
            loading: false,
            searchKey: "",
            blogs: []
        }
    },
    mounted() {
        this.list()
    },
    methods: {
        list() {
            this.blogs = []
            this.loading = true
            let result = [
  {
    "url": "https://api.github.com/gists/391edc7de20627506f8cee6a756f8a34",
    "forks_url": "https://api.github.com/gists/391edc7de20627506f8cee6a756f8a34/forks",
    "commits_url": "https://api.github.com/gists/391edc7de20627506f8cee6a756f8a34/commits",
    "id": "391edc7de20627506f8cee6a756f8a34",
    "node_id": "MDQ6R2lzdDM5MWVkYzdkZTIwNjI3NTA2ZjhjZWU2YTc1NmY4YTM0",
    "git_pull_url": "https://gist.github.com/391edc7de20627506f8cee6a756f8a34.git",
    "git_push_url": "https://gist.github.com/391edc7de20627506f8cee6a756f8a34.git",
    "html_url": "https://gist.github.com/391edc7de20627506f8cee6a756f8a34",
    "files": {
      "2018.5.19 更新": {
        "filename": "2018.5.19 更新",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/GitHub-Laziji/391edc7de20627506f8cee6a756f8a34/raw/5942dda57f704f94b978b42cd725f9005d2fe558/2018.5.19%20%E6%9B%B4%E6%96%B0",
        "size": 105629
      }
    },
    "public": true,
    "created_at": "2018-05-18T17:10:06Z",
    "updated_at": "2018-05-18T17:10:06Z",
    "description": "1 增加使用帮助\n2 改进readme不存在时的情况",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/391edc7de20627506f8cee6a756f8a34/comments",
    "owner": {
      "login": "GitHub-Laziji",
      "id": 30425217,
      "node_id": "MDQ6VXNlcjMwNDI1MjE3",
      "avatar_url": "https://avatars.githubusercontent.com/u/30425217?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/GitHub-Laziji",
      "html_url": "https://github.com/GitHub-Laziji",
      "followers_url": "https://api.github.com/users/GitHub-Laziji/followers",
      "following_url": "https://api.github.com/users/GitHub-Laziji/following{/other_user}",
      "gists_url": "https://api.github.com/users/GitHub-Laziji/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/GitHub-Laziji/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/GitHub-Laziji/subscriptions",
      "organizations_url": "https://api.github.com/users/GitHub-Laziji/orgs",
      "repos_url": "https://api.github.com/users/GitHub-Laziji/repos",
      "events_url": "https://api.github.com/users/GitHub-Laziji/events{/privacy}",
      "received_events_url": "https://api.github.com/users/GitHub-Laziji/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/064d6bea83f706f12baa75b89b6b5c39",
    "forks_url": "https://api.github.com/gists/064d6bea83f706f12baa75b89b6b5c39/forks",
    "commits_url": "https://api.github.com/gists/064d6bea83f706f12baa75b89b6b5c39/commits",
    "id": "064d6bea83f706f12baa75b89b6b5c39",
    "node_id": "MDQ6R2lzdDA2NGQ2YmVhODNmNzA2ZjEyYmFhNzViODliNmI1YzM5",
    "git_pull_url": "https://gist.github.com/064d6bea83f706f12baa75b89b6b5c39.git",
    "git_push_url": "https://gist.github.com/064d6bea83f706f12baa75b89b6b5c39.git",
    "html_url": "https://gist.github.com/064d6bea83f706f12baa75b89b6b5c39",
    "files": {
      "2018.5.15 更新": {
        "filename": "2018.5.15 更新",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/GitHub-Laziji/064d6bea83f706f12baa75b89b6b5c39/raw/9994e5185086f8345d476603a387e42568a89637/2018.5.15%20%E6%9B%B4%E6%96%B0",
        "size": 27973
      }
    },
    "public": true,
    "created_at": "2018-05-15T13:40:03Z",
    "updated_at": "2018-05-15T13:40:04Z",
    "description": "1 优化粉丝页面\n2 增加是否自动播放音乐配置",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/064d6bea83f706f12baa75b89b6b5c39/comments",
    "owner": {
      "login": "GitHub-Laziji",
      "id": 30425217,
      "node_id": "MDQ6VXNlcjMwNDI1MjE3",
      "avatar_url": "https://avatars.githubusercontent.com/u/30425217?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/GitHub-Laziji",
      "html_url": "https://github.com/GitHub-Laziji",
      "followers_url": "https://api.github.com/users/GitHub-Laziji/followers",
      "following_url": "https://api.github.com/users/GitHub-Laziji/following{/other_user}",
      "gists_url": "https://api.github.com/users/GitHub-Laziji/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/GitHub-Laziji/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/GitHub-Laziji/subscriptions",
      "organizations_url": "https://api.github.com/users/GitHub-Laziji/orgs",
      "repos_url": "https://api.github.com/users/GitHub-Laziji/repos",
      "events_url": "https://api.github.com/users/GitHub-Laziji/events{/privacy}",
      "received_events_url": "https://api.github.com/users/GitHub-Laziji/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/ab96e0bbeae628f73d254d69a007a92b",
    "forks_url": "https://api.github.com/gists/ab96e0bbeae628f73d254d69a007a92b/forks",
    "commits_url": "https://api.github.com/gists/ab96e0bbeae628f73d254d69a007a92b/commits",
    "id": "ab96e0bbeae628f73d254d69a007a92b",
    "node_id": "MDQ6R2lzdGFiOTZlMGJiZWFlNjI4ZjczZDI1NGQ2OWEwMDdhOTJi",
    "git_pull_url": "https://gist.github.com/ab96e0bbeae628f73d254d69a007a92b.git",
    "git_push_url": "https://gist.github.com/ab96e0bbeae628f73d254d69a007a92b.git",
    "html_url": "https://gist.github.com/ab96e0bbeae628f73d254d69a007a92b",
    "files": {
      "2018.5.13 更新": {
        "filename": "2018.5.13 更新",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/GitHub-Laziji/ab96e0bbeae628f73d254d69a007a92b/raw/d15e5b67bbf7715375ae09b77623fb35eca24667/2018.5.13%20%E6%9B%B4%E6%96%B0",
        "size": 576485
      }
    },
    "public": true,
    "created_at": "2018-05-13T08:49:11Z",
    "updated_at": "2018-05-13T08:49:11Z",
    "description": "增加了社交圈, 查看粉丝以及关注用户列表",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/ab96e0bbeae628f73d254d69a007a92b/comments",
    "owner": {
      "login": "GitHub-Laziji",
      "id": 30425217,
      "node_id": "MDQ6VXNlcjMwNDI1MjE3",
      "avatar_url": "https://avatars.githubusercontent.com/u/30425217?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/GitHub-Laziji",
      "html_url": "https://github.com/GitHub-Laziji",
      "followers_url": "https://api.github.com/users/GitHub-Laziji/followers",
      "following_url": "https://api.github.com/users/GitHub-Laziji/following{/other_user}",
      "gists_url": "https://api.github.com/users/GitHub-Laziji/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/GitHub-Laziji/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/GitHub-Laziji/subscriptions",
      "organizations_url": "https://api.github.com/users/GitHub-Laziji/orgs",
      "repos_url": "https://api.github.com/users/GitHub-Laziji/repos",
      "events_url": "https://api.github.com/users/GitHub-Laziji/events{/privacy}",
      "received_events_url": "https://api.github.com/users/GitHub-Laziji/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/200f79981333b6c3ce0f5bfa57598b46",
    "forks_url": "https://api.github.com/gists/200f79981333b6c3ce0f5bfa57598b46/forks",
    "commits_url": "https://api.github.com/gists/200f79981333b6c3ce0f5bfa57598b46/commits",
    "id": "200f79981333b6c3ce0f5bfa57598b46",
    "node_id": "MDQ6R2lzdDIwMGY3OTk4MTMzM2I2YzNjZTBmNWJmYTU3NTk4YjQ2",
    "git_pull_url": "https://gist.github.com/200f79981333b6c3ce0f5bfa57598b46.git",
    "git_push_url": "https://gist.github.com/200f79981333b6c3ce0f5bfa57598b46.git",
    "html_url": "https://gist.github.com/200f79981333b6c3ce0f5bfa57598b46",
    "files": {
      "VBlog项目结构": {
        "filename": "VBlog项目结构",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/GitHub-Laziji/200f79981333b6c3ce0f5bfa57598b46/raw/0dca7e2f5f7db6f1fbdd30410bb3b91f877e044c/VBlog%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84",
        "size": 3264
      }
    },
    "public": true,
    "created_at": "2018-05-12T04:42:39Z",
    "updated_at": "2018-05-12T06:56:51Z",
    "description": "介绍一下这个项目的代码结构, 不定时更新文档",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/200f79981333b6c3ce0f5bfa57598b46/comments",
    "owner": {
      "login": "GitHub-Laziji",
      "id": 30425217,
      "node_id": "MDQ6VXNlcjMwNDI1MjE3",
      "avatar_url": "https://avatars.githubusercontent.com/u/30425217?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/GitHub-Laziji",
      "html_url": "https://github.com/GitHub-Laziji",
      "followers_url": "https://api.github.com/users/GitHub-Laziji/followers",
      "following_url": "https://api.github.com/users/GitHub-Laziji/following{/other_user}",
      "gists_url": "https://api.github.com/users/GitHub-Laziji/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/GitHub-Laziji/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/GitHub-Laziji/subscriptions",
      "organizations_url": "https://api.github.com/users/GitHub-Laziji/orgs",
      "repos_url": "https://api.github.com/users/GitHub-Laziji/repos",
      "events_url": "https://api.github.com/users/GitHub-Laziji/events{/privacy}",
      "received_events_url": "https://api.github.com/users/GitHub-Laziji/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/6b3004d18b4bcc9fbae200b995738d65",
    "forks_url": "https://api.github.com/gists/6b3004d18b4bcc9fbae200b995738d65/forks",
    "commits_url": "https://api.github.com/gists/6b3004d18b4bcc9fbae200b995738d65/commits",
    "id": "6b3004d18b4bcc9fbae200b995738d65",
    "node_id": "MDQ6R2lzdDZiMzAwNGQxOGI0YmNjOWZiYWUyMDBiOTk1NzM4ZDY1",
    "git_pull_url": "https://gist.github.com/6b3004d18b4bcc9fbae200b995738d65.git",
    "git_push_url": "https://gist.github.com/6b3004d18b4bcc9fbae200b995738d65.git",
    "html_url": "https://gist.github.com/6b3004d18b4bcc9fbae200b995738d65",
    "files": {
      "格式化了所有代码的缩进": {
        "filename": "格式化了所有代码的缩进",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/GitHub-Laziji/6b3004d18b4bcc9fbae200b995738d65/raw/746b68e89648167aea7dad86050b6c75c43c645d/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BA%86%E6%89%80%E6%9C%89%E4%BB%A3%E7%A0%81%E7%9A%84%E7%BC%A9%E8%BF%9B",
        "size": 88
      }
    },
    "public": true,
    "created_at": "2018-05-11T07:10:06Z",
    "updated_at": "2018-05-11T07:10:06Z",
    "description": "把所有代码的缩进从制表符统一为4个空格",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/6b3004d18b4bcc9fbae200b995738d65/comments",
    "owner": {
      "login": "GitHub-Laziji",
      "id": 30425217,
      "node_id": "MDQ6VXNlcjMwNDI1MjE3",
      "avatar_url": "https://avatars.githubusercontent.com/u/30425217?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/GitHub-Laziji",
      "html_url": "https://github.com/GitHub-Laziji",
      "followers_url": "https://api.github.com/users/GitHub-Laziji/followers",
      "following_url": "https://api.github.com/users/GitHub-Laziji/following{/other_user}",
      "gists_url": "https://api.github.com/users/GitHub-Laziji/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/GitHub-Laziji/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/GitHub-Laziji/subscriptions",
      "organizations_url": "https://api.github.com/users/GitHub-Laziji/orgs",
      "repos_url": "https://api.github.com/users/GitHub-Laziji/repos",
      "events_url": "https://api.github.com/users/GitHub-Laziji/events{/privacy}",
      "received_events_url": "https://api.github.com/users/GitHub-Laziji/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  }
]

            let pageNumber = 1
            if (pageNumber) {
                this.query.pageNumber = pageNumber
            }
            for (let i = 0; i < result.length; i++) {
                for (let key in result[i].files) {
                    let data = {}
                    data['title'] = key
                    data['url'] = result[i].files[key]
                    data['description'] = result[i]['description']
                    data['id'] = result[i]['id']
                    data['createTime'] = result[i]['created_at']
                    data['updateTime'] = result[i]['updated_at']
                    data['hide'] = false
                    this.blogs.push(data)
                    break
                }
            }
            this.loading = false

            // GistApi.list(this.query).then((response) => {
            //     let result = response.data
            //     let pageNumber = this.$util.parseHeaders(response.headers)
            //     if (pageNumber) {
            //         this.query.pageNumber = pageNumber
            //     }
            //     for (let i = 0; i < result.length; i++) {
            //         for (let key in result[i].files) {
            //             let data = {}
            //             data['title'] = key
            //             data['url'] = result[i].files[key]
            //             data['description'] = result[i]['description']
            //             data['id'] = result[i]['id']
            //             data['createTime'] = this.$util.utcToLocal(result[i]['created_at'])
            //             data['updateTime'] = this.$util.utcToLocal(result[i]['updated_at'])
            //             data['hide'] = false
            //             this.blogs.push(data)
            //             break
            //         }
            //     }
            // }).then(() => )
        },
    }
}
</script>

<style>

</style>
