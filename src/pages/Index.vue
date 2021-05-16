<template>
    <Layout>
            <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
                <div slot="header">
                    <span>{{blog.title}}</span>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    发布 {{blog.created_at | date('YYYY-MM-DD HH:mm:ss')}}
                    <br> 更新 {{blog.updated_at | date('YYYY-MM-DD HH:mm:ss')}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                    <pre style="font-family: '微软雅黑'">{{blog.description}}</pre>
                </div>
                <div v-html="mdToHtml(blog.content)" class="markdown-body" style="padding-top: 20px"></div>
            </el-card>
            <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!blog.id">
                <font style="font-size: 30px;color:#dddddd ">
                    <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
                </font>
            </el-card>
    </Layout>
</template>

<page-query>
query {
    postsBlogs: allStrapiBlogs (sortBy: "updated_at", order: DESC, perPage: 1, page: 1) @paginate {
        edges {
            node {
                id
                title
                description
                content
                created_at
                updated_at
            }
        }
    }
}

</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
    name: 'NewPage',
    metaInfo: {
        title: 'New Roch57'
    },
    data() {
        return {
            loading: false,
        }
    },
    methods: {
        mdToHtml (content) {
            return md.render(content)
        }
    },
    computed: {
        blog () {
            return this.$page.postsBlogs.edges[0].node
        }
    }
}
</script>

<style>

</style>
