<template>
    <Layout>
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
        </el-card>

        <div v-if="$page.postsProjects.pageInfo.totalItems&&$page.postsProjects.pageInfo.totalItems>0">
            <el-card shadow="hover" v-for="edge in searchResults" :key="edge.node.id" style="margin-bottom: 20px">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <g-link
                                    style="text-decoration:none;cursor:pointer"
                                    :to="`/project/details/${edge.node.id}`"
                                >
                                    <i class="el-icon-service"></i>&nbsp;&nbsp; {{edge.node.name}}
                                </g-link>
                            </span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align: right;">
                                <el-button style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{edge.node.updated_at}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{edge.node.description}}
                </div>
                <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
                    <el-row>
                        <el-col :span="16" style="padding-top: 5px">
                            <el-tooltip effect="dark" :content="'star '+edge.node.stargazers_count" placement="bottom">
                                <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                            </el-tooltip>
                            {{edge.node.stargazers_count}}
                            <el-tooltip effect="dark" :content="'watch '+edge.node.watchers_count" placement="bottom">
                                <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                            </el-tooltip>
                            {{edge.node.watchers_count}}
                            <el-tooltip effect="dark" :content="'fork '+edge.node.forks_count" placement="bottom">
                                <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                            </el-tooltip>
                            {{edge.node.forks_count}}
                        </el-col>
                        <el-col :span="8" style="text-align: right;">
                            <el-tag size="small" type="success">{{edge.node.language}}</el-tag>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <div style="text-align: center">
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

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!pageInfo.totalItems||pageInfo.totalItems==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </Layout>
</template>

<page-query>
query ($page: Int){
    postsProjects: allStrapiProjects (perPage: 2, page: $page) @paginate {
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
                stargazers_count
                watchers_count
                forks_count
                language
                description
                content
            }
        }
    }
}

</page-query>

<static-query>

</static-query>


<script>
import { Pager } from 'gridsome'

export default {
    name: 'ProjectPage',
    metaInfo: {
        title: 'Project Roch57'
    },
    components: {
        Pager
    },
    data() {
        return {
            loading: false,
            searchKey: "",
            projects: []
        }
    },
    computed: {
        pageInfo() {
            return this.$page.postsProjects.pageInfo
        },
        searchResults() {
            return this.$page.postsProjects.edges.filter(edge => {
                return edge.node.name.toLowerCase().includes(this.searchKey.toLowerCase().trim())
            })
        }
    },
    methods: {
        list(id){
            const page = id + 1
            this.$router.push(`/project/${page}`)
        }
    }
}
</script>

<style>

</style>
