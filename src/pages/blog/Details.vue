<template>
    <Layout>
        <el-card shadow="never" style="min-height: 400px">
            <div slot="header">
                <el-row>
                    <el-col :span="12">
                        <span>{{blog.title}}</span>
                    </el-col>
                    <el-col :span="12">
                        <div style="text-align: right;">
                            <el-button @click="$share()" style="padding: 3px 0" type="text" icon="el-icon-share">分享</el-button>
                            <el-button @click="edit" style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token">编辑</el-button>
                            <el-button style=" padding: 3px 0" type="text" icon="el-icon-more-outline" @click="more">更多博客</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{blog.createTime}}
                <br> 更新 {{blog.updateTime}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{blog.description}}</pre>
            </div>
            <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
    </Layout>
</template>
<script>
export default {
    data() {
        return {
            blog: {
                id: "",
                title: "",
                content: "",
                description: ""
            },
            loading: false,
        }
    },
    mounted() {
        this.loading = true
        
        this.blog.id = this.$route.params.id
        let result = {
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
      "size": 105629,
      "truncated": false,
      "content": "<h1>info</h1>"
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
  "forks": [

  ],
  "history": [
    {
      "user": {
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
      "version": "442306754b87218cd312de59e24680d07c9ae54f",
      "committed_at": "2018-05-18T17:10:05Z",
      "change_status": {
        "total": 2,
        "additions": 2,
        "deletions": 0
      },
      "url": "https://api.github.com/gists/391edc7de20627506f8cee6a756f8a34/442306754b87218cd312de59e24680d07c9ae54f"
    }
  ],
  "truncated": false
}


        for (let key in result.files) {
            this.blog['title'] = key
            this.blog['content'] = result.files[key]['content']
            this.blog['description'] = result['description']
            this.blog['createTime'] = result['created_at']
            this.blog['updateTime'] = result['updated_at']
            // console.log(JSON.stringify(this.blog))
            break
        }
        this.loading = false
    },
}
</script>