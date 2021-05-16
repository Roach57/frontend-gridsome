<template>
    <Layout>
        <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;">
            <div slot="header" class="clearfix">
                <span>{{$page.post.name}}</span>
                <el-button @click="$router.go(-1)" style="float: right; padding: 3px 0" type="text" icon="el-icon-d-arrow-left">返回</el-button>
            </div>
            <el-row>
                <el-col :span="9" style="padding: 0px 10px 20px 0px">
                    <img :src="avatarUrl" style="width: 100%;border-radius:5px;">
                    <div style="padding: 10px">
                        <font style="font-size: 26px;line-height: 40px;font-weight: 600">{{$page.post.name}}
                            <br>
                        </font>
                        <font style="font-size: 20px;font-style: normal;font-weight: 300;line-height: 35px;color: #666;">{{$page.post.name}}
                            <br>
                        </font>
                        <font style="font-size: 14px;line-height: 20px;color:#606266;" v-if="$page.post.location">
                            <i class="el-icon-location-outline"></i>&nbsp;&nbsp;{{$page.post.location}}
                            <br>
                        </font>
                        <font style="font-size: 14px;line-height: 20px;color:#606266;" v-if="$page.post.email">
                            <i class="el-icon-message"></i>&nbsp;&nbsp;{{$page.post.email}}
                            <br>
                        </font>
                        <font style="font-size: 14px;color:#606266;" v-if="$page.post.id">
                            <i class="el-icon-edit-outline"></i>&nbsp;&nbsp;
                            <!-- <a :href="$util.addHttp(blog)" target="_blank">{{blog}}</a> -->
                            <br>
                        </font>
                    </div>

                </el-col>
                <el-col :span="15" style="padding: 0px 20px 20px 10px">
                    <div style="width: 100%;min-height: 300px; border-radius:5px; border: 1px solid #EBEEF5;padding: 10px;font-size: 16px;
                    color: #6a737d;" v-if="$page.post.bio">
                        {{$page.post.bio}}
                    </div>
                    <div style="width: 100%;min-height: 300px; border-radius:5px; border: 1px solid #EBEEF5;padding: 30px;text-align: center;
                    font-size: 30px;color:#dddddd" v-else>
                        <b>◔ ‸◔？没有简介</b>
                    </div>
                </el-col>
            </el-row>

        </el-card>
    </Layout>
</template>
<page-query>
query ($id: ID!){
    post: strapiSocials (id: $id) {
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

</page-query>
<script>
export default {
    name: 'SocialDetailPage',
    metaInfo: {
        title: 'Social-Detail Roch57'
    },
    data() {
        return {
            loading: false,
            githubUsername: this.$route.params.name,
            name: null,
            avatarUrl: null,
            htmlUrl: null,
            blog: null,
            location: null,
            email: null,
            bio: null,
            followers: null,
            following: null,
            publicRepos: null
        }
    }
}
</script>