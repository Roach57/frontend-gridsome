<template>
  <div class="layout">

    <!-- Page Header -->
    <section class="page-header">
      <div v-for="(item,index) in randomIcon" :key="'ri'+index" :style="'position:absolute; top:'+item.top+'px; left:'+item.left+'px; z-index:1;'">
        <font :style="'font-size: '+item.size+'px;color:#fff;'">
          <b>♪</b>
        </font>
      </div>
      <h1 class="project-name">{{blogTitle}}</h1>
      <h2 class="project-tagline">{{blogDescribe}}</h2>
      <a :href="'https://github.com/'+githubUsername" class="btn" target="_blank">GitHub主页</a>
      <a href="https://github.com/Roach57/frontend-gridsome" class="btn" target="_blank">博客源码</a>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <el-row>
        <el-col :span="6" style="padding-right:10px">
          <sidebar></sidebar>
        </el-col>
        <el-col :span="18" style="padding-left:10px">
          <slot/>
        </el-col>
      </el-row>
    </section>

    <!-- Foot -->
    <section class="foot">
      <foot></foot>
    </section>
  </div>
</template>

<script>

import Sidebar from '~/components/Sidebar'
import Foot from '~/components/Foot'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Foot
  },
  data() {
    return {
      blogTitle:'Roch57',
      blogDescribe:'Welcome to my blog',
      githubUsername: 'Roach57',
      music: {
        isPlay: false,
        currentTime: 0,
        maxTime: 0,
        volume: 100
      },
      fullButton: {
        full: false
      },
      topbar: {
        active: "",
      },
      randomIcon: []
    }
  },
  mounted() {
    let width = window.innerWidth
    for (let i = 0; i < 12; i++) {
        let temp = {}
        let left = parseInt(Math.random()*(width-310-10)+10);
        if(left>width/2-150){
            left+=300
        }
        temp["left"] = left
        temp["top"] = parseInt(Math.random()*(300-20)+20);
        temp["size"] = parseInt(Math.random()*(40-20)+20);
        this.randomIcon.push(temp)
    }
},
}
</script>

<style>
    .page-header {
        padding: 5rem 6rem;
        color: #fff;
        text-align: center;
        background-color: #159957;
        background-image: linear-gradient(120deg, #155799, #159957);
    }

    .project-name {
        font-size: 3.25rem;
        margin-top: 0;
        margin-bottom: 0.1rem;
    }

    .project-tagline {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        font-weight: normal;
        opacity: 0.7;
    }

    .btn:hover {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
    }

    a:hover {
        text-decoration: underline;
    }

    a:active,
    a:hover {
        outline: 0;
    }

    .btn {
        padding: 0.75rem 1rem;
        display: inline-block;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.7);
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        border-style: solid;
        border-width: 1px;
        border-radius: 0.3rem;
        transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    }

    a {
        color: #1e6bb8;
        text-decoration: none;
    }

    .btn+.btn {
        margin-left: 1rem;
    }

    .main-content {
        max-width: 64rem;
        padding: 30px 0px 30px 0px;
        margin: 0 auto;
        font-size: 1.1rem;
        word-wrap: break-word;
        min-height: 800px;
    }

    .foot {
        max-width: 67rem;
        margin: 0 auto;
        font-size: 12px !important;
        color: #586069 !important;
        word-wrap: break-word;
    }
</style>
