import { deepCopy } from 'components/dynamicform/utils/utils'

const routeDatas = [
  // {
  //   name: '监控大盘',
  //   icon: 'dashboard',
  //   group: '/dashboard',
  //   groupName: 'first',
  //   children: [
  //     {
  //       name: '流量分析',
  //       group: '/dashboard',
  //       to: '/dashboard/analysis'
  //     },
  //     {
  //       name: '流量监控',
  //       group: '/dashboard',
  //       to: '/dashboard/monitor'
  //     }
  //   ]
  // },
  {
    name: '表单DEMO',
    icon: 'edit_road',
    group: '/form',
    groupName: 'first',
    children: [
      {
        name: '基础DEMO',
        group: '/form',
        to: '/form/basic-form'
      },
      {
        name: '分步DEMO',
        group: '/form',
        to: '/form/step-form'
      },
      {
        name: '高级DEMO',
        group: '/form',
        to: '/form/advanced-form'
      }
    ]
  },
  {
    name: '通用Tool',
    icon: 'table_view',
    group: '/list',
    groupName: 'first',
    children: [
      {
        name: '搜索列表',
        group: '/list/search',
        children: [
          {
            name: '搜索列表（项目）',
            group: '/list/search',
            to: '/list/search/projects'
          }
        ]
      },
      {
        name: '商品列表',
        group: '/list',
        to: '/list/goods-list'
      },
      {
        name: '查询表格',
        group: '/list',
        to: '/list/table-list'
      }
    ]
  }
  // {
  //   name: '结果页',
  //   icon: 'check_circle_outline',
  //   group: '/result',
  //   groupName: 'first',
  //   children: [
  //     {
  //       name: '成功页',
  //       group: '/result',
  //       to: '/result/success'
  //     },
  //     {
  //       name: '失败页',
  //       group: '/result',
  //       to: '/result/fail'
  //     }
  //   ]
  // },
  // {
  //   name: '异常页',
  //   icon: 'error_outline',
  //   group: '/exception',
  //   groupName: 'first',
  //   children: [
  //     {
  //       name: '403',
  //       group: '/exception',
  //       to: '/exception/403'
  //     },
  //     {
  //       name: '404',
  //       group: '/exception',
  //       to: '/exception/404'
  //     },
  //     {
  //       name: '500',
  //       group: '/exception',
  //       to: '/exception/500'
  //     }
  //   ]
  // },
  // {
  //   name: '拓展项',
  //   icon: 'text_fields',
  //   group: '/expend',
  //   groupName: 'first',
  //   children: [
  //     {
  //       name: '流程图',
  //       group: '/expend',
  //       to: '/expend/flow-chart'
  //     },
  //     {
  //       name: '图标集合',
  //       group: '/expend',
  //       to: '/expend/icon-view'
  //     }
  //   ]
  // }
]

function queryList(routeDatas, tabs) {
  for (let i = 0; i < routeDatas.length; i++) {
    const sonList = routeDatas[i].children
    if (!sonList || sonList.length === 0) {
      const routeData = routeDatas[i]
      routeData.active = false
      tabs.push(routeData)
    } else {
      queryList(sonList, tabs)
    }
  }
  return tabs
}

const allTabs = []
const accessTabs = []
queryList(routeDatas, allTabs)

const informsData = [
  {
    icon: 'email',
    title: '你推荐的 曲妮妮 已通过第三轮面试',
    desc: '3年前',
    color: 'orange',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'bluetooth',
    title: '你收到了 14 份新周报',
    desc: '3年前',
    color: 'primary',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'email',
    title: '这种模板可以区分多种通知类型',
    desc: '3年前',
    color: 'teal',
    textColor: 'white',
    disable: true
  },
  {
    icon: 'email',
    title: '左侧图标用于区分不同的类型',
    desc: '3年前',
    color: 'yellow-10',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'email',
    title: '内容不要超过两行字，超出时自动截断',
    desc: '3年前',
    color: 'orange',
    textColor: 'white',
    disable: false
  }
]
const notifyDatas = [
  {
    icon: 'email',
    title: '你推荐的 曲妮妮 已通过第三轮面试',
    desc: '3年前',
    color: 'orange',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'bluetooth',
    title: '你收到了 14 份新周报',
    desc: '3年前',
    color: 'primary',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'email',
    title: '这种模板可以区分多种通知类型',
    desc: '3年前',
    color: 'teal',
    textColor: 'white',
    disable: true
  },
  {
    icon: 'email',
    title: '左侧图标用于区分不同的类型',
    desc: '3年前',
    color: 'yellow-10',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'email',
    title: '内容不要超过两行字，超出时自动截断',
    desc: '3年前',
    color: 'orange',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'email',
    title: '内容不要超过两行字，超出时自动截断222',
    desc: '3年前',
    color: 'blue',
    textColor: 'white',
    disable: false
  }
]
const waitDealDatas = [
  {
    icon: 'email',
    title: '你推荐的 曲妮妮 已通过第三轮面试',
    desc: '3年前',
    color: 'orange',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'bluetooth',
    title: '你收到了 14 份新周报',
    desc: '3年前',
    color: 'primary',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'email',
    title: '这种模板可以区分多种通知类型',
    desc: '3年前',
    color: 'teal',
    textColor: 'white',
    disable: true
  },
  {
    icon: 'email',
    title: '左侧图标用于区分不同的类型',
    desc: '3年前',
    color: 'yellow-10',
    textColor: 'white',
    disable: false
  },
  {
    icon: 'email',
    title: '内容不要超过两行字，超出时自动截断',
    desc: '3年前',
    color: 'orange',
    textColor: 'white',
    disable: false
  }
]
const languageDatas = [
  {
    nationalFlag:
      'imgs/language/us.jpg',
    label: 'Us English'
  },
  {
    nationalFlag:
      'imgs/language/en.jpg',
    label: 'En English'
  },
  {
    nationalFlag:
      'imgs/language/jiantizhongwen.jpg',
    label: 'CN 简体中文'
  },
  {
    nationalFlag:
      'imgs/language/fantizhongwen.jpg',
    label: 'HK 繁体中文'
  }
]
const scrollStyleData = {
  contentStyle: {},
  contentActiveStyle: {},
  thumbStyle: {
    right: '2px',
    borderRadius: '5px',
    backgroundColor: '#027be3',
    width: '0px',
    opacity: 0.75
  },
  barStyle: {
    right: '2px',
    borderRadius: '9px',
    backgroundColor: '#027be3',
    width: '9px',
    opacity: 0.2
  }
}

const rightOffset = {
  rightOffsetGithubInit: [5, 68],
  rightOffsetInit: [5, 168],
  rightOffsetShow: [280, 168]
}

const styleSettingsData = {
  themeColorSetting: [
    {
      style: 'background-color: rgb(24, 144, 255)',
      color: 'rgb(24, 144, 255)',
      checked: true,
      attribute: 'var(--q-color-primary)'
    },
    {
      style: 'background-color: rgb(245, 34, 45)',
      color: 'rgb(245, 34, 45)',
      checked: false
    },
    {
      style: 'background-color: rgb(250, 84, 28)',
      color: 'rgb(250, 84, 28)',
      checked: false
    },
    {
      style: 'background-color: rgb(250, 173, 20)',
      color: 'rgb(250, 173, 20)',
      checked: false
    },
    {
      style: 'background-color: rgb(19, 194, 194)',
      color: 'rgb(19, 194, 194)',
      checked: false
    },
    {
      style: 'background-color: rgb(82, 196, 26)',
      color: 'rgb(82, 196, 26)',
      checked: false
    },
    {
      style: 'background-color: rgb(47, 84, 235)',
      color: 'rgb(47, 84, 235)',
      checked: false
    },
    {
      style: 'background-color: rgb(114, 46, 209)',
      color: 'rgb(114, 46, 209)',
      checked: false
    }
  ],
  fixed: {
    viewHead: 'hHh',
    viewBody: 'LpR',
    viewFoot: 'lfr',
    fixedHead: true,
    fixedFooter: false
  },
  contentSettings: {
    header: true,
    topBar: true,
    topBarGlossy: false,
    footer: true,
    leftMenuHeader: true
  }
}

function getStyleSettingsData() {
  return deepCopy(styleSettingsData)
}

// 获取可用的数量
function getAvailableCount(datas) {
  if (!datas) {
    return 0
  }
  let count = 0
  for (let i = 0; i < datas.length; ++i) {
    if (datas[i].disable === false) {
      count++
    }
  }
  return count
}

function selectTabByTo(to) {
  for (let i = 0; i < allTabs.length; ++i) {
    if (allTabs[i].to === to) {
      return allTabs[i]
    }
  }
}

function addTab(to) {
  if (!to || to === '/') {
    to = '/form/basic-form'
  }

  console.log(to + '0000000000')
  let exist = false
  let currentTab = null
  for (let i = 0; i < accessTabs.length; ++i) {
    if (accessTabs[i].to === to) {
      exist = true
      currentTab = accessTabs[i]
    } else {
      accessTabs[i].active = false
    }
  }
  if (!exist) {
    currentTab = selectTabByTo(to)
    accessTabs.push(currentTab)
  }
  currentTab.active = true
  return currentTab
}

export default {
  routeDatas,
  informsData,
  waitDealDatas,
  notifyDatas,
  languageDatas,
  scrollStyleData,
  rightOffset,
  styleSettingsData,
  accessTabs,
  addTab,
  getAvailableCount,
  getStyleSettingsData,
  selectTabByTo
}
