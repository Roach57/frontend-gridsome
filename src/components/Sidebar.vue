<template>
    <div>
        <el-card shadow="never">
            <el-menu :default-active="active"  @select="onSelect">
                <el-menu-item
                    v-for="item in constantRouterMap"
                    :key="item.path"
                    :index="item.path"
                >
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            constantRouterMap: [
                { meta: {icon: 'el-icon-star-off',title: '最新动态'}, path: '/'},
                { meta: {icon: 'el-icon-mobile-phone',title: '社交圈'}, path: '/social/followers'},
                { meta: {icon: 'el-icon-edit-outline',title: '博客列表'}, path: '/blog'},
                { meta: {icon: 'el-icon-service',title: '开源项目'}, path: '/project'},
            ],
            active: "/",
            parentUrl: "",
            menuList: ['最新动态', '社交圈', '博客列表', '开源项目']
        }
    },
    mounted() {
        let arr = this.$route.path.split("/")
        this.active = "/" + arr[1]
    },
    methods: {
        onSelect(index) {
            this.$router.push(index)
        }
    }
}
</script>