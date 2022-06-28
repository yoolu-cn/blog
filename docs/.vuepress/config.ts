import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { gungnirTheme, i18n } from 'vuepress-theme-gungnir'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/img/logo/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/img/logo/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'Yoolu Blog' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Yoolu Blog' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/img/logo/apple-touch-icon.png` },
    ],
    ['meta', { name: 'theme-color', content: '#377bb5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#377bb5' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'yoolu team',
      description:
        'Personal blog based on Vuepress static website generator, sharing Web Android Java technology',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'yoolu team',
      description:
        'Personal blog based on Vuepress static website generator, sharing Web Android Java technology',
    },
  },

  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),
  theme: gungnirTheme({
    repo: 'yoolu-cn/blog',
    navbarTitle: 'Yoolu',
    docsDir: 'docs',

    hitokoto: 'https://v1.hitokoto.cn?c=i', // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: 'Yoolu',
      avatar: '/img/logo_900.jpg',
      description: 'We dream: while(sleeping){money++;}',
      sns: {
        github: 'yoolu-cn',
        email: 'jerry@yoolu.cn',
        rss: '/rss.xml',
      },
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: '/image/bg_1.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_2.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_3.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_4.jpeg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_5.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_6.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_7.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_8.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_9.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_10.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_11.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_12.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_13.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_14.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_15.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_16.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_17.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_18.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_19.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_20.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_21.jpeg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_22.jpeg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/image/bg_23.jpeg',
        mask: 'rgba(40, 57, 101, .4)',
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)',
        },
      },
      links: {
        subtitle:
          'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)',
        },
      },
    },

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en,
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebar: sidebar.zh,
        // i18n
        ...i18n.zh,
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      giscus: {
        repo: 'yoolu-cn/blog',
        repoId: 'R_kgDOHJjCQg',
        category: 'Q&A',
        categoryId: 'DIC_kwDOHJjCQs4CP4us',
        lazyLoad: true,
      },
      mdPlus: {
        all: true,
      },
      ba: 'e384349a7c507ec0b175a0ae9fbf371e',
      rss: {
        siteURL: 'https://www.yoolu.cn',
        copyright: 'Yoolu 2021-2022',
      },
      pwa: true,
      search: false, // use @vuepress/plugin-docsearch instead
    },

    footer: `
    MIT Licensed | Copyright &copy; <a href="https://github.com/yoolu-cn" target="_blank"> Yoolu Contributors</a> 2021-2022 
    Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a>
    <a style="margin-left:10px;" href="https://beian.miit.gov.cn/" target="_blank">陇ICP备19002885号-4</a>  
    `,
  }),
}
