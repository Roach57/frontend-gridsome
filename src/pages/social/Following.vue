<template>
    <Layout>
        <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px">
            <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
                <el-tab-pane :label="'粉丝 '+$page.postsFollowers.pageInfo.totalItems" name="followers" style="padding: 5px">
                </el-tab-pane>
                <el-tab-pane :label="'关注 '+$page.postsFollowers.pageInfo.totalItems" name="following" style="padding: 5px">
                    <div v-loading="following.loading">
                        <div v-if="$page.postsFollowers.pageInfo.totalItems">
                            <el-row style="min-height: 200px; ">
                                <el-col :span="8" v-for="edge in $page.postsFollowing.edges" :key="edge.node.id" style="padding: 10px">
                                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                                        <i class="el-icon-star-off"></i>&emsp;
                                        <g-link :to="`/social/details/${edge.node.id}`" style="text-decoration:none;cursor:pointer">{{edge.node.name}}</g-link>
                                        <br>
                                        <i class="el-icon-message"></i>&emsp;
                                        <a :href="edge.node.html_url" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                                        <br>
                                        <img :src="edge.node.avatar_url" style="width: 100%;border-radius:5px;margin-top: 5px">
                                    </el-card>
                                </el-col>
                            </el-row>
                            <div style="text-align: center;margin-top: 10px">
                                <pager
                                    class="btn-prev"
                                    background layout="prev, pager, next"
                                    :info="pageInfo"
                                ></pager>
                                <!-- <el-pagination
                                    @current-change="list"
                                    background layout="prev, pager, next"
                                    :current-page.sync="pageInfo.currentPage"
                                    :page-size="pageInfo.currentPage"
                                    :total="pageInfo.totalPages"
                                >
                                </el-pagination> -->
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

<page-query>
query ($page: Int){
    postsFollowers: allStrapiSocials (perPage: 1, page: $page, filter: { followers: { eq: true }}) @paginate {
        pageInfo {
            totalItems
            totalPages
            currentPage
        }
    }
    postsFollowing: allStrapiSocials (perPage: 1, page: $page, filter: { following: { eq: true }}) @paginate {
        pageInfo {
            totalItems
            totalPages
            currentPage
        }
        edges {
            node {
                id
                name
                html_url
                blog
                location
                email
                bio
                followers
                following
                avatar_url
            }
        }
    }
}

</page-query>

<script>
import { Pager } from  'gridsome'

export default {
    name: 'SocialPage',
    components: {
        Pager
    },
    metaInfo: {
        title: 'Social Roch57'
    },
    data() {
        return {
            activeTab: "following",
            followers: {
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
    computed: {
        pageInfo() {
            return this.$page.postsFollowing.pageInfo
        }
    },
    methods: {
        list(){

        },
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
            this.$router.push(`/social/followers`)
            this.followers.loading = false
        },
        listFollowing() {
            this.following.loading = true
            this.$router.push(`/social/following`)
            this.following.loading = false
        },
    }
}
</script>

<style>

</style>
