import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  outDir: '../kun-pages',
  base: 'kun-docs',
  title: 'Kun',
  description: 'An incredibly fast JavaScript runtime.',
  icon: '/favicon.jfif',
  logoText: 'Kun',
  themeConfig: {
    enableContentAnimation: true,
    searchPlaceholderText: '搜索',
    searchNoResultsText: '未搜索到相关结果',
    searchSuggestedQueryText: '可更换不同的关键字后重试',
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/lmk97/kun'
      },
      {
        icon: 'wechat',
        mode: 'link',
        content: '/wechat.jpg'
      },
      {
        icon: 'qq',
        mode: 'link',
        content: 'https://pd.qq.com/s/kvh7278m'
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Kun API',
          items: [
            {
              text: 'File System',
              link: '/fs',
            },
            {
              text: 'Network',
              link: '/network',
            },
            {
              text: 'HTTP',
              link: '/http',
            },
          ],
        },
        {
          text: 'Web API',
          items: [
            {
              text: 'Console',
              link: '/web/console',
            },
            {
              text: 'DOM',
              link: '/web/dom',
            },
            {
              text: 'Encoding',
              link: '/web/encoding',
            },
            {
              text: 'Fetch',
              link: '/web/fetch',
            },
            {
              text: 'Streams',
              link: '/web/streams',
            },
            {
              text: 'URL',
              link: '/web/url'
            },
          ],
        },
      ],
    },
  },
});
