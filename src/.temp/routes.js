const c1 = () => import(/* webpackChunkName: "page--src--pages--social--followers-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/pages/social/Followers.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--social--following-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/pages/social/Following.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--social--details-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/templates/social/Details.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--project--details-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/templates/project/Details.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--blog--details-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/templates/blog/Details.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--project-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/pages/Project.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/pages/Blog.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/pages/About.vue")
const c9 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/node_modules/gridsome/app/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/roach/pro/web_pro/lg-homework/frontend-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/social/followers/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/social/following/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/social/details/:id/",
    component: c3
  },
  {
    path: "/project/details/:id/",
    component: c4
  },
  {
    path: "/blog/details/:id/",
    component: c5
  },
  {
    path: "/project/:page(\\d+)?/",
    component: c6
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c7
  },
  {
    path: "/about/",
    component: c8
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c10
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
