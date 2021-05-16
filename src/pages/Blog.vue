<template>
    <Layout>
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
            <!-- <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
            <el-button @click="$share()" style="margin-left: 10px" icon="el-icon-share" type="warning" plain circle></el-button>
            <el-button type="primary" icon="el-icon-edit" round plain style="float: right;" @click="goAdd">写博文</el-button> -->
        </el-card>

        <div v-if="$page.postsBlogs.pageInfo.totalItems&&$page.postsBlogs.pageInfo.totalItems>0">
            <el-card shadow="hover" v-for="edge in $page.postsBlogs.edges" :key="edge.node.id" style="margin-bottom: 20px">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <a style="text-decoration:none;cursor:pointer" @click="$router.push(`/blog/details/${edge.node.id}`)">
                                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{edge.node.title}}
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
                    最近更新 {{edge.node.updated_at}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{edge.node.description}}
                </div>
            </el-card>
            <div style="text-align: center">
                <el-pagination @current-change="list" layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize"
                    :total="query.pageNumber*query.pageSize">
                </el-pagination>
            </div>

        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!$page.postsBlogs.pageInfo.totalItems||$page.postsBlogs.pageInfo.totalItems==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </Layout>
</template>

<page-query>
query ($page: Int){
    postsBlogs: allStrapiBlogs (perPage: 10, page: $page) @paginate {
        pageInfo {
          totalItems
          totalPages
          currentPage
        }
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

</page-query>

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
    methods: {
        list() {
            this.blogs = []
            this.loading = true
            this.loading = false
        },
    }
}
</script>

<style>

</style>
