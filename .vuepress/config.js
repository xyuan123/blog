module.exports = {
  "title": "夏鸣予的博客",
  "description": "永远怀着一刻真诚与善良的心",
  "dest": "public",
  "plugins": [['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
    theme: ['z16','miku','wanko','shizuku', 'izumi','koharu','haruto','blackCat', 'whiteCat', 'haru1', 'haru2'],
    message:  {
      welcome: '欢迎来到我的博客~',
      home: '心里的花，我想要带你回家。',
      theme: '好吧，希望你能喜欢我的其他小伙伴。',
      close: '要说再见了吗'
  } }],['@vuepress-reco/vuepress-plugin-bgm-player', {
    audios: [
      {
        name: '花之舞',
        artist: '花之舞',
        url: '/bgm/1.mp3',
        cover: '/bgm/1.png'
      }
    ],
    position: {
      left: '10px',
      bottom: '10px',
      'z-index': '999999'
    },
    autoShrink: false,
    shrinkMode: 'mini',
    floatPosition: 'left',
    floatStyle: {
      bottom: '200px',
      'z-index': '999999'
    }
  }]],
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "author": "夏鸣予",
    "huawei": true,
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言板",
        "icon": "reco-message",
        "link": '/messageBoard'
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "gitee",
            "link": "https://gitee.com/smart-x",
          }
        ]
      }
    ],
    "valineConfig": {
      "appId": '3LHlTn3FClOQQwfLAMUuucTc-gzGzoHsz',// your appId
      "appKey": 'xp6lSBicUhJOY3LLQIEPIYEv', // your appKey
    },
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "知识"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "夏鸣予",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}