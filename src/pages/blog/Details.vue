<template>
    <Layout>
        <el-card shadow="never" style="min-height: 400px">
            <div slot="header">
                <el-row>
                    <el-col :span="12">
                        <span>{{$page.post.title}}</span>
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
                发布 {{$page.post.created_at | date('YYYY-MM-DD HH:mm:ss')}}
                <br> 更新 {{$page.post.updated_at | date('YYYY-MM-DD HH:mm:ss')}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{$page.post.description}}</pre>
            </div>
            <div v-html="mdToHtml($page.post.content)" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
    </Layout>
</template>

<page-query>
query ($id: ID!){
    post: strapiBlogs (id: $id) {
        id
        title
        description
        content
        created_at
        updated_at
    }
}

</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

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
    methods: {
        mdToHtml (content) {
            return md.render(content)
        }
    }
}
</script>