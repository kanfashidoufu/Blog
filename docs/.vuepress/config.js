/*
 * @Date: 2021-05-26 14:29:44
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-05-27 15:31:01
 * @Description: 
 */
const sidebar = require('./sidebar.js');
module.exports = {
    title: '看法是豆腐的Blog',
    description: '看法是豆腐的Blog',
    base: '/',
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/avatar.jpg"
            }
        ],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    plugins: ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting"],
    theme: 'reco',
    themeConfig: {
        author: '看法是豆腐',
        authorAvatar: "/avatar.jpg",
        mode: 'light',
        subSidebar: 'auto',
        valineConfig: {
            "appId": 'kGhROvUsBmQFU2oSJRfN98uz-9Nh9j0Va',
            "appKey": '8Sh4dz7mWFiFlrgbqLKhzuld',
        },
        nav: [
            { text: "主页", link: "/", icon: "reco-home" },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            {
                text: "Contact",
                icon: "reco-message",
                items: [
                    {
                        text: "GitHub",
                        link: "https://github.com/kanfashidoufu",
                        icon: "reco-github"
                    }
                ]
            }
        ],
        sidebar,
        type: 'blog',
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '目录索引' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签索引'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/kanfashidoufu' },
                { icon: 'reco-mayun', link: 'https://gitee.com/KanFaShiDouFu' }
            ]
        },
        logo: "/avatar.jpg",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        record: "xxxx",
        startYear: "2018"
    },
    markdown: {
        lineNumbers: true
    }
}