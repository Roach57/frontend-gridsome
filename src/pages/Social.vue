<template>
    <Layout>
        <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px">
            <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
                <el-tab-pane :label="'粉丝 '+followersTotal" name="followers" style="padding: 5px">
                    <div v-loading="followers.loading">
                        <div v-if="followers.list.length">
                            <el-row style="min-height: 200px; ">
                                <el-col :span="8" v-for="(item,index) in followers.list" :key="'followers'+index" style="padding: 10px">
                                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                                        <i class="el-icon-star-off"></i>&emsp;
                                        <a @click="$router.push(`/social/details/${item.name}`)" style=" text-decoration:none;cursor:pointer">{{item.name}}</a>
                                        <br>
                                        <i class="el-icon-message"></i>&emsp;
                                        <a :href="item.htmlUrl" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                                        <br>
                                        <img :src="item.avatarUrl" style="width: 100%;border-radius:5px;margin-top: 5px">
                                    </el-card>
                                </el-col>
                            </el-row>
                            <div style="text-align: center;margin-top: 10px">
                                <el-pagination @current-change="onSelect" background layout="prev, pager, next" :current-page.sync="followers.query.page"
                                    :page-size="followers.query.pageSize" :total="followers.query.pageNumber*followers.query.pageSize">
                                </el-pagination>
                            </div>
                        </div>
                        <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                            <font style="font-size: 30px;color:#dddddd ">
                                <b>(￢_￢) 没有一个粉丝</b>
                            </font>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="'关注 '+followingTotal" name="following" style="padding: 5px">
                    <div v-loading="following.loading">
                        <div v-if="following.list.length">
                            <el-row style="min-height: 200px; ">
                                <el-col :span="8" v-for="(item,index) in following.list" :key="'following'+index" style="padding: 10px">
                                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                                        <i class="el-icon-star-off"></i>&emsp;
                                        <a @click="$router.push(`/social/details/${item.name}`)" style=" text-decoration:none;cursor:pointer">{{item.name}}</a>
                                        <br>
                                        <i class="el-icon-message"></i>&emsp;
                                        <a :href="item.htmlUrl" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                                        <br>
                                        <img :src="item.avatarUrl" style="width: 100%;border-radius:5px;margin-top: 5px">
                                    </el-card>
                                </el-col>
                            </el-row>
                            <div style="text-align: center;margin-top: 10px">
                                <el-pagination @current-change="onSelect" background layout="prev, pager, next" :current-page.sync="following.query.page"
                                    :page-size="following.query.pageSize" :total="following.query.pageNumber*following.query.pageSize">
                                </el-pagination>
                            </div>
                        </div>
                        <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                            <font style="font-size: 30px;color:#dddddd ">
                                <b>(￢_￢) 还没有关注一个人</b>
                            </font>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </Layout>
</template>

<script>
export default {
    name: 'SocialPage',
    metaInfo: {
        title: 'Social Roch57'
    },
    data() {
        return {
            followersTotal: '57',
            followingTotal: '57',
            activeTab: "followers",
            followers: {
                query: {
                    page: 1,
                    pageSize: 9,
                    pageNumber: 1
                },
                loading: false,
                list: []
            },
            following: {
                query: {
                    page: 1,
                    pageSize: 9,
                    pageNumber: 1
                },
                loading: false,
                list: []
            }
        }
    },
    mounted() {
        this.onSelect()
    },

    methods: {
        onSelect() {
            switch (this.activeTab) {
                case "followers":
                    this.listFollowers()
                    break
                case "following":
                    this.listFollowing()
                    break
                default:
                    break
            }
        },
        listFollowers() {
            this.followers.loading = true
            let result = [
  {
    "login": "lililiwj",
    "id": 38744589,
    "node_id": "MDQ6VXNlcjM4NzQ0NTg5",
    "avatar_url": "https://avatars.githubusercontent.com/u/38744589?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lililiwj",
    "html_url": "https://github.com/lililiwj",
    "followers_url": "https://api.github.com/users/lililiwj/followers",
    "following_url": "https://api.github.com/users/lililiwj/following{/other_user}",
    "gists_url": "https://api.github.com/users/lililiwj/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lililiwj/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lililiwj/subscriptions",
    "organizations_url": "https://api.github.com/users/lililiwj/orgs",
    "repos_url": "https://api.github.com/users/lililiwj/repos",
    "events_url": "https://api.github.com/users/lililiwj/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lililiwj/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "shuanghewuyanzu",
    "id": 38081886,
    "node_id": "MDQ6VXNlcjM4MDgxODg2",
    "avatar_url": "https://avatars.githubusercontent.com/u/38081886?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shuanghewuyanzu",
    "html_url": "https://github.com/shuanghewuyanzu",
    "followers_url": "https://api.github.com/users/shuanghewuyanzu/followers",
    "following_url": "https://api.github.com/users/shuanghewuyanzu/following{/other_user}",
    "gists_url": "https://api.github.com/users/shuanghewuyanzu/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shuanghewuyanzu/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shuanghewuyanzu/subscriptions",
    "organizations_url": "https://api.github.com/users/shuanghewuyanzu/orgs",
    "repos_url": "https://api.github.com/users/shuanghewuyanzu/repos",
    "events_url": "https://api.github.com/users/shuanghewuyanzu/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shuanghewuyanzu/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "royalosyin",
    "id": 18584202,
    "node_id": "MDQ6VXNlcjE4NTg0MjAy",
    "avatar_url": "https://avatars.githubusercontent.com/u/18584202?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/royalosyin",
    "html_url": "https://github.com/royalosyin",
    "followers_url": "https://api.github.com/users/royalosyin/followers",
    "following_url": "https://api.github.com/users/royalosyin/following{/other_user}",
    "gists_url": "https://api.github.com/users/royalosyin/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/royalosyin/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/royalosyin/subscriptions",
    "organizations_url": "https://api.github.com/users/royalosyin/orgs",
    "repos_url": "https://api.github.com/users/royalosyin/repos",
    "events_url": "https://api.github.com/users/royalosyin/events{/privacy}",
    "received_events_url": "https://api.github.com/users/royalosyin/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "lengxing",
    "id": 6905136,
    "node_id": "MDQ6VXNlcjY5MDUxMzY=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6905136?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lengxing",
    "html_url": "https://github.com/lengxing",
    "followers_url": "https://api.github.com/users/lengxing/followers",
    "following_url": "https://api.github.com/users/lengxing/following{/other_user}",
    "gists_url": "https://api.github.com/users/lengxing/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lengxing/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lengxing/subscriptions",
    "organizations_url": "https://api.github.com/users/lengxing/orgs",
    "repos_url": "https://api.github.com/users/lengxing/repos",
    "events_url": "https://api.github.com/users/lengxing/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lengxing/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "loachfighter",
    "id": 23497780,
    "node_id": "MDQ6VXNlcjIzNDk3Nzgw",
    "avatar_url": "https://avatars.githubusercontent.com/u/23497780?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/loachfighter",
    "html_url": "https://github.com/loachfighter",
    "followers_url": "https://api.github.com/users/loachfighter/followers",
    "following_url": "https://api.github.com/users/loachfighter/following{/other_user}",
    "gists_url": "https://api.github.com/users/loachfighter/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/loachfighter/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/loachfighter/subscriptions",
    "organizations_url": "https://api.github.com/users/loachfighter/orgs",
    "repos_url": "https://api.github.com/users/loachfighter/repos",
    "events_url": "https://api.github.com/users/loachfighter/events{/privacy}",
    "received_events_url": "https://api.github.com/users/loachfighter/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "rocky-191",
    "id": 13551340,
    "node_id": "MDQ6VXNlcjEzNTUxMzQw",
    "avatar_url": "https://avatars.githubusercontent.com/u/13551340?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rocky-191",
    "html_url": "https://github.com/rocky-191",
    "followers_url": "https://api.github.com/users/rocky-191/followers",
    "following_url": "https://api.github.com/users/rocky-191/following{/other_user}",
    "gists_url": "https://api.github.com/users/rocky-191/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rocky-191/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rocky-191/subscriptions",
    "organizations_url": "https://api.github.com/users/rocky-191/orgs",
    "repos_url": "https://api.github.com/users/rocky-191/repos",
    "events_url": "https://api.github.com/users/rocky-191/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rocky-191/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "jh2k15",
    "id": 24727024,
    "node_id": "MDQ6VXNlcjI0NzI3MDI0",
    "avatar_url": "https://avatars.githubusercontent.com/u/24727024?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jh2k15",
    "html_url": "https://github.com/jh2k15",
    "followers_url": "https://api.github.com/users/jh2k15/followers",
    "following_url": "https://api.github.com/users/jh2k15/following{/other_user}",
    "gists_url": "https://api.github.com/users/jh2k15/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jh2k15/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jh2k15/subscriptions",
    "organizations_url": "https://api.github.com/users/jh2k15/orgs",
    "repos_url": "https://api.github.com/users/jh2k15/repos",
    "events_url": "https://api.github.com/users/jh2k15/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jh2k15/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "1309822767",
    "id": 34164741,
    "node_id": "MDQ6VXNlcjM0MTY0NzQx",
    "avatar_url": "https://avatars.githubusercontent.com/u/34164741?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/1309822767",
    "html_url": "https://github.com/1309822767",
    "followers_url": "https://api.github.com/users/1309822767/followers",
    "following_url": "https://api.github.com/users/1309822767/following{/other_user}",
    "gists_url": "https://api.github.com/users/1309822767/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/1309822767/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/1309822767/subscriptions",
    "organizations_url": "https://api.github.com/users/1309822767/orgs",
    "repos_url": "https://api.github.com/users/1309822767/repos",
    "events_url": "https://api.github.com/users/1309822767/events{/privacy}",
    "received_events_url": "https://api.github.com/users/1309822767/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Tarhyru",
    "id": 13960592,
    "node_id": "MDQ6VXNlcjEzOTYwNTky",
    "avatar_url": "https://avatars.githubusercontent.com/u/13960592?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Tarhyru",
    "html_url": "https://github.com/Tarhyru",
    "followers_url": "https://api.github.com/users/Tarhyru/followers",
    "following_url": "https://api.github.com/users/Tarhyru/following{/other_user}",
    "gists_url": "https://api.github.com/users/Tarhyru/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Tarhyru/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Tarhyru/subscriptions",
    "organizations_url": "https://api.github.com/users/Tarhyru/orgs",
    "repos_url": "https://api.github.com/users/Tarhyru/repos",
    "events_url": "https://api.github.com/users/Tarhyru/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Tarhyru/received_events",
    "type": "User",
    "site_admin": false
  }
]

            this.followers.list = []
            for (let i = 0; i < result.length; i++) {
                let data = {}
                data.name = result[i]['login']
                data.avatarUrl = result[i]['avatar_url']
                data.htmlUrl = result[i]['html_url']
                this.followers.list.push(data)
            }
            this.followers.loading = false
            // this.followers.loading = true
            // UserApi.followers(this.followers.query).then((response) => {
            //     let result = response.data
            //     let pageNumber = this.$util.parseHeaders(response.headers)
            //     if (pageNumber) {
            //         this.followers.query.pageNumber = pageNumber
            //     }
            //     this.followers.list = []
            //     for (let i = 0; i < result.length; i++) {
            //         let data = {}
            //         data.name = result[i]['login']
            //         data.avatarUrl = result[i]['avatar_url']
            //         data.htmlUrl = result[i]['html_url']
            //         this.followers.list.push(data)
            //     }
            // }).then(() => this.followers.loading = false)
        },
        listFollowing() {
            this.following.loading = true
            let result = [
  {
    "login": "kazupon",
    "id": 72989,
    "node_id": "MDQ6VXNlcjcyOTg5",
    "avatar_url": "https://avatars.githubusercontent.com/u/72989?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kazupon",
    "html_url": "https://github.com/kazupon",
    "followers_url": "https://api.github.com/users/kazupon/followers",
    "following_url": "https://api.github.com/users/kazupon/following{/other_user}",
    "gists_url": "https://api.github.com/users/kazupon/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kazupon/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kazupon/subscriptions",
    "organizations_url": "https://api.github.com/users/kazupon/orgs",
    "repos_url": "https://api.github.com/users/kazupon/repos",
    "events_url": "https://api.github.com/users/kazupon/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kazupon/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Jinjiang",
    "id": 206848,
    "node_id": "MDQ6VXNlcjIwNjg0OA==",
    "avatar_url": "https://avatars.githubusercontent.com/u/206848?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Jinjiang",
    "html_url": "https://github.com/Jinjiang",
    "followers_url": "https://api.github.com/users/Jinjiang/followers",
    "following_url": "https://api.github.com/users/Jinjiang/following{/other_user}",
    "gists_url": "https://api.github.com/users/Jinjiang/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Jinjiang/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Jinjiang/subscriptions",
    "organizations_url": "https://api.github.com/users/Jinjiang/orgs",
    "repos_url": "https://api.github.com/users/Jinjiang/repos",
    "events_url": "https://api.github.com/users/Jinjiang/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Jinjiang/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Justineo",
    "id": 1726061,
    "node_id": "MDQ6VXNlcjE3MjYwNjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1726061?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Justineo",
    "html_url": "https://github.com/Justineo",
    "followers_url": "https://api.github.com/users/Justineo/followers",
    "following_url": "https://api.github.com/users/Justineo/following{/other_user}",
    "gists_url": "https://api.github.com/users/Justineo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Justineo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Justineo/subscriptions",
    "organizations_url": "https://api.github.com/users/Justineo/orgs",
    "repos_url": "https://api.github.com/users/Justineo/repos",
    "events_url": "https://api.github.com/users/Justineo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Justineo/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "chrisvfritz",
    "id": 2327556,
    "node_id": "MDQ6VXNlcjIzMjc1NTY=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2327556?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/chrisvfritz",
    "html_url": "https://github.com/chrisvfritz",
    "followers_url": "https://api.github.com/users/chrisvfritz/followers",
    "following_url": "https://api.github.com/users/chrisvfritz/following{/other_user}",
    "gists_url": "https://api.github.com/users/chrisvfritz/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/chrisvfritz/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/chrisvfritz/subscriptions",
    "organizations_url": "https://api.github.com/users/chrisvfritz/orgs",
    "repos_url": "https://api.github.com/users/chrisvfritz/repos",
    "events_url": "https://api.github.com/users/chrisvfritz/events{/privacy}",
    "received_events_url": "https://api.github.com/users/chrisvfritz/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "defcc",
    "id": 2603918,
    "node_id": "MDQ6VXNlcjI2MDM5MTg=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2603918?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/defcc",
    "html_url": "https://github.com/defcc",
    "followers_url": "https://api.github.com/users/defcc/followers",
    "following_url": "https://api.github.com/users/defcc/following{/other_user}",
    "gists_url": "https://api.github.com/users/defcc/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/defcc/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/defcc/subscriptions",
    "organizations_url": "https://api.github.com/users/defcc/orgs",
    "repos_url": "https://api.github.com/users/defcc/repos",
    "events_url": "https://api.github.com/users/defcc/events{/privacy}",
    "received_events_url": "https://api.github.com/users/defcc/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Akryum",
    "id": 2798204,
    "node_id": "MDQ6VXNlcjI3OTgyMDQ=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2798204?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Akryum",
    "html_url": "https://github.com/Akryum",
    "followers_url": "https://api.github.com/users/Akryum/followers",
    "following_url": "https://api.github.com/users/Akryum/following{/other_user}",
    "gists_url": "https://api.github.com/users/Akryum/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Akryum/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Akryum/subscriptions",
    "organizations_url": "https://api.github.com/users/Akryum/orgs",
    "repos_url": "https://api.github.com/users/Akryum/repos",
    "events_url": "https://api.github.com/users/Akryum/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Akryum/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "jkzing",
    "id": 2851517,
    "node_id": "MDQ6VXNlcjI4NTE1MTc=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2851517?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jkzing",
    "html_url": "https://github.com/jkzing",
    "followers_url": "https://api.github.com/users/jkzing/followers",
    "following_url": "https://api.github.com/users/jkzing/following{/other_user}",
    "gists_url": "https://api.github.com/users/jkzing/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jkzing/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jkzing/subscriptions",
    "organizations_url": "https://api.github.com/users/jkzing/orgs",
    "repos_url": "https://api.github.com/users/jkzing/repos",
    "events_url": "https://api.github.com/users/jkzing/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jkzing/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "HerringtonDarkholme",
    "id": 2883231,
    "node_id": "MDQ6VXNlcjI4ODMyMzE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2883231?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HerringtonDarkholme",
    "html_url": "https://github.com/HerringtonDarkholme",
    "followers_url": "https://api.github.com/users/HerringtonDarkholme/followers",
    "following_url": "https://api.github.com/users/HerringtonDarkholme/following{/other_user}",
    "gists_url": "https://api.github.com/users/HerringtonDarkholme/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HerringtonDarkholme/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HerringtonDarkholme/subscriptions",
    "organizations_url": "https://api.github.com/users/HerringtonDarkholme/orgs",
    "repos_url": "https://api.github.com/users/HerringtonDarkholme/repos",
    "events_url": "https://api.github.com/users/HerringtonDarkholme/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HerringtonDarkholme/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "javoski",
    "id": 5391892,
    "node_id": "MDQ6VXNlcjUzOTE4OTI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/5391892?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/javoski",
    "html_url": "https://github.com/javoski",
    "followers_url": "https://api.github.com/users/javoski/followers",
    "following_url": "https://api.github.com/users/javoski/following{/other_user}",
    "gists_url": "https://api.github.com/users/javoski/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/javoski/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/javoski/subscriptions",
    "organizations_url": "https://api.github.com/users/javoski/orgs",
    "repos_url": "https://api.github.com/users/javoski/repos",
    "events_url": "https://api.github.com/users/javoski/events{/privacy}",
    "received_events_url": "https://api.github.com/users/javoski/received_events",
    "type": "User",
    "site_admin": false
  }
]

            this.following.list = []
            for (let i = 0; i < result.length; i++) {
                let data = {}
                data.name = result[i]['login']
                data.avatarUrl = result[i]['avatar_url']
                data.htmlUrl = result[i]['html_url']
                this.following.list.push(data)
            }
            this.following.loading = false


            // this.following.loading = true
            // UserApi.following(this.following.query).then((response) => {
            //     let result = response.data
            //     let pageNumber = this.$util.parseHeaders(response.headers)
            //     if (pageNumber) {
            //         this.following.query.pageNumber = pageNumber
            //     }
            //     this.following.list = []
            //     for (let i = 0; i < result.length; i++) {
            //         let data = {}
            //         data.name = result[i]['login']
            //         data.avatarUrl = result[i]['avatar_url']
            //         data.htmlUrl = result[i]['html_url']
            //         this.following.list.push(data)
            //     }
            // }).then(() => this.following.loading = false)
        },
    }
}
</script>

<style>

</style>
