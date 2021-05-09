<template>
    <Layout>
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
            <!-- <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
            <el-button @click="$share()" icon="el-icon-share" type="warning" style="margin-left: 10px" plain circle></el-button> -->
        </el-card>

        <div v-if="projects&&projects.length>0">
            <el-card shadow="hover" v-for="(item,index) in projects" :key="'pro'+index" style="margin-bottom: 20px" v-if="!item.hide">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <a style="text-decoration:none;cursor:pointer" @click="$router.push(`/project/details/${item.name}`)">
                                    <i class="el-icon-service"></i>&nbsp;&nbsp; {{item.name}}
                                </a>
                            </span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align: right;">
                                <el-button @click="goGithub(item.url)" style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                                <el-button @click="$share('/user/project/details/'+item.name)" style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
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
                <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
                    <el-row>
                        <el-col :span="16" style="padding-top: 5px">
                            <el-tooltip effect="dark" :content="'star '+item.stargazersCount" placement="bottom">
                                <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                            </el-tooltip>
                            {{item.stargazersCount}}
                            <el-tooltip effect="dark" :content="'watch '+item.watchersCount" placement="bottom">
                                <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                            </el-tooltip>
                            {{item.watchersCount}}
                            <el-tooltip effect="dark" :content="'fork '+item.forksCount" placement="bottom">
                                <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                            </el-tooltip>
                            {{item.forksCount}}
                        </el-col>
                        <el-col :span="8" style="text-align: right;">
                            <el-tag size="small" type="danger" v-if="item.license">{{item.license}}</el-tag>
                            <el-tag size="small" type="success">{{item.language}}</el-tag>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <div style="text-align: center">
                <el-pagination @current-change="list" background layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize"
                    :total="query.pageNumber*query.pageSize">
                </el-pagination>
            </div>
        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!projects||projects.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </Layout>
</template>

<script>
export default {
    name: 'ProjectPage',
    metaInfo: {
        title: 'Project Roch57'
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
            projects: []
        }
    },
    mounted() {
        this.list()
    },
    methods: {
        list() {
            this.loading = true
            let result = [
  {
    "id": 233183490,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMzMxODM0OTA=",
    "name": "canvas-utils",
    "full_name": "GitHub-Laziji/canvas-utils",
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
    "html_url": "https://github.com/GitHub-Laziji/canvas-utils",
    "description": "Canvas utils",
    "fork": false,
    "url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils",
    "forks_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/forks",
    "keys_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/teams",
    "hooks_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/hooks",
    "issue_events_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/issues/events{/number}",
    "events_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/events",
    "assignees_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/assignees{/user}",
    "branches_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/branches{/branch}",
    "tags_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/tags",
    "blobs_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/languages",
    "stargazers_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/stargazers",
    "contributors_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/contributors",
    "subscribers_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/subscribers",
    "subscription_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/subscription",
    "commits_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/contents/{+path}",
    "compare_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/merges",
    "archive_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/downloads",
    "issues_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/issues{/number}",
    "pulls_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/labels{/name}",
    "releases_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/releases{/id}",
    "deployments_url": "https://api.github.com/repos/GitHub-Laziji/canvas-utils/deployments",
    "created_at": "2020-01-11T05:51:24Z",
    "updated_at": "2020-01-21T14:23:50Z",
    "pushed_at": "2020-01-21T14:23:48Z",
    "git_url": "git://github.com/GitHub-Laziji/canvas-utils.git",
    "ssh_url": "git@github.com:GitHub-Laziji/canvas-utils.git",
    "clone_url": "https://github.com/GitHub-Laziji/canvas-utils.git",
    "svn_url": "https://github.com/GitHub-Laziji/canvas-utils",
    "homepage": null,
    "size": 8,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
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
    "default_branch": "master"
  },
  {
    "id": 159133255,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNTkxMzMyNTU=",
    "name": "code-generator",
    "full_name": "GitHub-Laziji/code-generator",
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
    "html_url": "https://github.com/GitHub-Laziji/code-generator",
    "description": "读取数据库表结构生成自定义代码",
    "fork": false,
    "url": "https://api.github.com/repos/GitHub-Laziji/code-generator",
    "forks_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/forks",
    "keys_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/teams",
    "hooks_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/hooks",
    "issue_events_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/issues/events{/number}",
    "events_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/events",
    "assignees_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/assignees{/user}",
    "branches_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/branches{/branch}",
    "tags_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/tags",
    "blobs_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/languages",
    "stargazers_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/stargazers",
    "contributors_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/contributors",
    "subscribers_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/subscribers",
    "subscription_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/subscription",
    "commits_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/contents/{+path}",
    "compare_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/merges",
    "archive_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/downloads",
    "issues_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/issues{/number}",
    "pulls_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/labels{/name}",
    "releases_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/releases{/id}",
    "deployments_url": "https://api.github.com/repos/GitHub-Laziji/code-generator/deployments",
    "created_at": "2018-11-26T08:11:19Z",
    "updated_at": "2021-03-21T08:34:20Z",
    "pushed_at": "2020-10-13T11:04:00Z",
    "git_url": "git://github.com/GitHub-Laziji/code-generator.git",
    "ssh_url": "git@github.com:GitHub-Laziji/code-generator.git",
    "clone_url": "https://github.com/GitHub-Laziji/code-generator.git",
    "svn_url": "https://github.com/GitHub-Laziji/code-generator",
    "homepage": "",
    "size": 3774,
    "stargazers_count": 60,
    "watchers_count": 60,
    "language": "Java",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 29,
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
    "forks": 29,
    "open_issues": 1,
    "watchers": 60,
    "default_branch": "master"
  },
  {
    "id": 152963589,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNTI5NjM1ODk=",
    "name": "commons-mybatis",
    "full_name": "GitHub-Laziji/commons-mybatis",
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
    "html_url": "https://github.com/GitHub-Laziji/commons-mybatis",
    "description": "Mirror of Laziji Commons Mybatis",
    "fork": false,
    "url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis",
    "forks_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/forks",
    "keys_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/teams",
    "hooks_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/hooks",
    "issue_events_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/issues/events{/number}",
    "events_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/events",
    "assignees_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/assignees{/user}",
    "branches_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/branches{/branch}",
    "tags_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/tags",
    "blobs_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/languages",
    "stargazers_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/stargazers",
    "contributors_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/contributors",
    "subscribers_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/subscribers",
    "subscription_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/subscription",
    "commits_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/contents/{+path}",
    "compare_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/merges",
    "archive_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/downloads",
    "issues_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/issues{/number}",
    "pulls_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/labels{/name}",
    "releases_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/releases{/id}",
    "deployments_url": "https://api.github.com/repos/GitHub-Laziji/commons-mybatis/deployments",
    "created_at": "2018-10-14T10:41:55Z",
    "updated_at": "2020-04-12T14:56:01Z",
    "pushed_at": "2019-06-30T09:02:51Z",
    "git_url": "git://github.com/GitHub-Laziji/commons-mybatis.git",
    "ssh_url": "git@github.com:GitHub-Laziji/commons-mybatis.git",
    "clone_url": "https://github.com/GitHub-Laziji/commons-mybatis.git",
    "svn_url": "https://github.com/GitHub-Laziji/commons-mybatis",
    "homepage": "",
    "size": 55,
    "stargazers_count": 8,
    "watchers_count": 8,
    "language": "Java",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 3,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 3,
    "open_issues": 0,
    "watchers": 8,
    "default_branch": "master"
  },
  {
    "id": 152960818,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNTI5NjA4MTg=",
    "name": "commons-parent",
    "full_name": "GitHub-Laziji/commons-parent",
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
    "html_url": "https://github.com/GitHub-Laziji/commons-parent",
    "description": "Mirror of Laziji Commons Parent",
    "fork": false,
    "url": "https://api.github.com/repos/GitHub-Laziji/commons-parent",
    "forks_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/forks",
    "keys_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/teams",
    "hooks_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/hooks",
    "issue_events_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/issues/events{/number}",
    "events_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/events",
    "assignees_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/assignees{/user}",
    "branches_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/branches{/branch}",
    "tags_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/tags",
    "blobs_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/languages",
    "stargazers_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/stargazers",
    "contributors_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/contributors",
    "subscribers_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/subscribers",
    "subscription_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/subscription",
    "commits_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/contents/{+path}",
    "compare_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/merges",
    "archive_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/downloads",
    "issues_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/issues{/number}",
    "pulls_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/labels{/name}",
    "releases_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/releases{/id}",
    "deployments_url": "https://api.github.com/repos/GitHub-Laziji/commons-parent/deployments",
    "created_at": "2018-10-14T10:02:59Z",
    "updated_at": "2018-11-28T02:31:23Z",
    "pushed_at": "2018-11-28T02:31:22Z",
    "git_url": "git://github.com/GitHub-Laziji/commons-parent.git",
    "ssh_url": "git@github.com:GitHub-Laziji/commons-parent.git",
    "clone_url": "https://github.com/GitHub-Laziji/commons-parent.git",
    "svn_url": "https://github.com/GitHub-Laziji/commons-parent",
    "homepage": null,
    "size": 6,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  }
]

                let pageNumber = 1
                if (pageNumber) {
                    this.query.pageNumber = pageNumber
                }
                for (let i = 0; i < result.length; i++) {
                    let item = result[i]
                    let data = {}
                    data.id = item['id']
                    data.name = item['name']
                    data.url = item['html_url']
                    data.description = item['description']
                    data.stargazersCount = item['stargazers_count']
                    data.watchersCount = item['watchers_count']
                    data.forksCount = item['forks_count']
                    data.language = item['language']
                    data.license = item['license'] ? item['license']['spdx_id'] : null
                    data.createTime = item['created_at']
                    data.updateTime = item['updated_at']
                    data.hide = false
                    this.projects.push(data)
                }
            this.loading = false
        },
    }
}
</script>

<style>

</style>
