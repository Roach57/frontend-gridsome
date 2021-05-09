<template>
    <Layout>
        <el-card shadow="never" style="min-height: 400px">
            <div slot="header">
                <el-row>
                    <el-col :span="12">
                        <span>{{project.name}}</span>
                    </el-col>
                    <el-col :span="12">
                        <div style="text-align: right;">
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-share">分享</el-button>
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-more-outline">更多项目</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{project.createTime}}
                <br> 更新 {{project.updateTime}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 20px 0px 0px 0px">
                {{project.description}}
            </div>
            <div style="font-size: 1.1rem;color: #303133;padding: 15px 0px 15px 0px;border-bottom: 1px solid #E4E7ED;">
                <el-row>
                    <el-col :span="16"  style="padding-top: 5px">
                        <el-tooltip effect="dark" :content="'star '+project.stargazersCount" placement="bottom">
                            <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                        </el-tooltip>
                        {{project.stargazersCount}}
                        <el-tooltip effect="dark" :content="'watch '+project.watchersCount" placement="bottom">
                            <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                        </el-tooltip>
                        {{project.watchersCount}}
                        <el-tooltip effect="dark" :content="'fork '+project.forksCount" placement="bottom">
                            <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                        </el-tooltip>
                        {{project.forksCount}}
                    </el-col>
                    <el-col :span="8" style="text-align: right">

                        <el-tag size="small" type="danger" v-if="project.license">{{project.license}}</el-tag>
                        <el-tag size="small" type="success">{{project.language}}</el-tag>
                    </el-col>

                </el-row>
            </div>
            <div v-html="project.content" v-if="project.content" class="markdown-body" style="padding-top: 20px"></div>
            <div v-if="!project.content" style="padding: 20px 0px 20px 0px;text-align: center">
                <font style="font-size: 30px;color:#dddddd ">
                    <b>还没有介绍 (╯°Д°)╯︵ ┻━┻</b>
                </font>
            </div>
        </el-card>
    </Layout>
</template>
<script>
export default {
    data() {
        return {
            project: {
                name: ""
            },
            loading: false,
        }
    },
    mounted() {
        this.loading = true


        let result = {
  "id": 193117493,
  "node_id": "MDEwOlJlcG9zaXRvcnkxOTMxMTc0OTM=",
  "name": "card-platform",
  "full_name": "GitHub-Laziji/card-platform",
  "private": false,
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
  "html_url": "https://github.com/GitHub-Laziji/card-platform",
  "description": "Card platform",
  "fork": false,
  "url": "https://api.github.com/repos/GitHub-Laziji/card-platform",
  "forks_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/forks",
  "keys_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/teams",
  "hooks_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/hooks",
  "issue_events_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/issues/events{/number}",
  "events_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/events",
  "assignees_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/assignees{/user}",
  "branches_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/branches{/branch}",
  "tags_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/tags",
  "blobs_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/languages",
  "stargazers_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/stargazers",
  "contributors_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/contributors",
  "subscribers_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/subscribers",
  "subscription_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/subscription",
  "commits_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/contents/{+path}",
  "compare_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/merges",
  "archive_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/downloads",
  "issues_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/issues{/number}",
  "pulls_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/labels{/name}",
  "releases_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/releases{/id}",
  "deployments_url": "https://api.github.com/repos/GitHub-Laziji/card-platform/deployments",
  "created_at": "2019-06-21T15:03:57Z",
  "updated_at": "2019-09-27T14:02:58Z",
  "pushed_at": "2019-11-02T15:53:53Z",
  "git_url": "git://github.com/GitHub-Laziji/card-platform.git",
  "ssh_url": "git@github.com:GitHub-Laziji/card-platform.git",
  "clone_url": "https://github.com/GitHub-Laziji/card-platform.git",
  "svn_url": "https://github.com/GitHub-Laziji/card-platform",
  "homepage": null,
  "size": 202,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "Java",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 1,
  "license": {
    "key": "mit",
    "name": "MIT License",
    "spdx_id": "MIT",
    "url": "https://api.github.com/licenses/mit",
    "node_id": "MDc6TGljZW5zZTEz"
  },
  "forks": 0,
  "open_issues": 1,
  "watchers": 0,
  "default_branch": "master",
  "temp_clone_token": null,
  "network_count": 0,
  "subscribers_count": 0
}

        this.project.name = result['name']
        this.project.id = result['id']
        this.project.url = result['html_url']
        this.project.stargazersCount = result['stargazers_count']
        this.project.watchersCount = result['watchers_count']
        this.project.forksCount = result['forks_count']
        this.project.language = result['language']
        this.project.description = result['description']
        this.project.license = result['license'] ? result['license']['spdx_id'] : null
        this.project.content = result['readme_content']
        this.project.createTime = result['created_at']
        this.project.updateTime = result['updated_at']

        this.loading = false
    },
}
</script>