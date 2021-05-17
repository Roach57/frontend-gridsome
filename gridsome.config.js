// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://strapi.roch.top:11337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blogs', 'projects', 'socials'],
        //contentTypes: ['social', 'blog', 'project'],
        // singleTypes: ['impressum'], // 单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiBlogs: [
      {
        path: '/blog/details/:id',
        component: './src/templates/blog/Details.vue'
      }
    ],
    StrapiProjects: [
      {
        path: '/project/details/:id',
        component: './src/templates/project/Details.vue'
      }
    ],
    StrapiSocials: [
      {
        path: '/social/details/:id',
        component: './src/templates/social/Details.vue'
      }
    ]
  }
}
