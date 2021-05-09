<template>
    <div>
        <el-card shadow="never">
            <el-menu :default-active="active">
                <el-menu-item
                    v-for="item in constantRouterMap"
                    :key="item.path"
                    :index="item.path"
                >
                    <g-link :to="item.path">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </g-link>
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
                { meta: {icon: 'el-icon-star-off',title: '社交圈'}, path: '/social/'},
                { meta: {icon: 'el-icon-star-off',title: '博客列表'}, path: '/blog/'},
                { meta: {icon: 'el-icon-star-off',title: '开源项目'}, path: '/project/'},
            ],
            active: "",
            parentUrl: "",
            menuList: ['最新动态', '社交圈', '博客列表', '开源项目']
        }
    },
}
</script>