import { Layout, Menu } from 'antd'
import React, { useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  HomeOutlined,
  UserOutlined,
  ToolOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
  MoneyCollectOutlined,
  CloudOutlined
} from '@ant-design/icons'

// import { useAccess, useLocation } from 'umi'
import { css } from 'linaria'

type Item = {
  name: string
  path: string
}

type SubMenu = {
  icon: React.ReactNode
  name: string
  children?: Item[]
  path?: string
}

const menus: SubMenu[] = [
  {
    icon: <HomeOutlined />,
    name: '主页',
    path: '/'
  },
  {
    icon: <CustomerServiceOutlined />,
    name: '内容管理',
    path: '/podcast-management-umi/content',
    children: [
      {
        path: '/home',
        name: '节目管理'
      },
      {
        path: '/podcast-management-umi/content/episodes',
        name: '单集管理'
      },
      {
        path: '/podcast-management-umi/content/tags',
        name: '标签管理'
      },
      {
        path: '/podcast-management-umi/content/search-comments',
        name: '评论搜索'
      },
      {
        path: '/podcast-management-umi/content/pilot-episodes',
        name: '试播单集'
      }
    ]
  },
  {
    icon: <UserOutlined />,
    name: '用户管理',
    path: '/podcast-management-umi/user',
    children: [
      {
        path: '/podcast-management-umi/user/list',
        name: '用户列表'
      }
    ]
  },
  {
    icon: <MoneyCollectOutlined />,
    name: '交易管理',
    path: '/podcast-management-umi/transaction',
    children: [
      {
        path: '/podcast-management-umi/transaction/recharge-records',
        name: '充值记录'
      },
      {
        path: '/podcast-management-umi/transaction/orders',
        name: '订单管理'
      },
      {
        path: '/podcast-management-umi/transaction/redemption',
        name: '兑换记录'
      }
    ]
  },
  {
    icon: <ToolOutlined />,
    name: '运营管理',
    path: '/podcast-management-umi/operation',
    children: [
      {
        path: '/podcast-management-umi/operation/resource',
        name: '资源位'
      },
      {
        path: '/podcast-management-umi/operation/find-page',
        name: '发现页配置'
      },

      {
        path: '/podcast-management-umi/operation/search-advertisement',
        name: '搜索词配置'
      },
      {
        path: '/podcast-management-umi/operation/starter-pack',
        name: '新手节目推荐'
      },
      {
        path: '/podcast-management-umi/operation/podcaster-claim',
        name: '主播认领'
      },
      {
        path: '/podcast-management-umi/operation/top-list',
        name: '排行榜管理'
      },
      {
        path: '/podcast-management-umi/operation/episode-collection',
        name: '单集合集'
      },
      {
        path: '/podcast-management-umi/operation/qqmusic-find-page',
        name: 'QQ音乐发现页配置'
      },
      {
        path: '/podcast-management-umi/operation/qqmusic-topic',
        name: 'QQ音乐专题配置'
      },
      {
        path: '/podcast-management-umi/operation/potential-podcasts-qq',
        name: 'QQ潜力播客配置'
      }
    ]
  },
  {
    icon: <CloudOutlined />,
    name: '托管管理',
    path: '/podcast-management-umi/pluto',
    children: [
      {
        path: '/podcast-management-umi/pluto/podcast',
        name: '节目管理'
      },
      {
        path: '/podcast-management-umi/pluto/episode',
        name: '单集管理'
      }
    ]
  },
  {
    icon: <SettingOutlined />,
    name: '配置',
    path: '/podcast-management-umi/config-pages',
    children: [
      {
        path: '/podcast-management-umi/config-pages/reserved-name',
        name: '保留昵称'
      },
      {
        path: '/podcast-management-umi/config-pages/review-switch',
        name: '审核开关'
      }
    ]
  }
]

const SideBarComponent = (props) => {
  // const access = useAccess()

  const renderItem = useCallback((item: Item) => {
    // if (item.name) {
    //   const hasTicket =
    //     Object.keys(access).findIndex((value) => {
    //       return value.indexOf(item.name) !== -1
    //     }) !== -1
    //   if (hasTicket === false && access.isAdmin === false) {
    //     return null
    //   }
    // }
    return (
      <Menu.Item key={item.path}>
        <Link href={{ pathname: item.path }}>
          <div>{item.name}</div>
        </Link>
      </Menu.Item>
    )
  }, [])
  const renderSubMenu = useCallback((subMenu: SubMenu) => {
    // if (subMenu.name) {
    //   const hasPrimaryTicket =
    //     Object.keys(access).findIndex((value) => {
    //       return value.startsWith(subMenu.name)
    //     }) !== -1
    //   if (hasPrimaryTicket === false && access.isAdmin === false) {
    //     return null
    //   }
    // }
    return subMenu.children ? (
      <Menu.SubMenu
        key={subMenu.path || subMenu.name}
        title={
          <span>
            {subMenu.icon}
            <span>{subMenu.name}</span>
          </span>
        }
      >
        {subMenu.children.map((v) => renderItem(v))}
      </Menu.SubMenu>
    ) : (
      <Menu.Item key={subMenu.path}>
        <Link href={{ pathname: subMenu.path }}>
          <div>
            {subMenu.icon}
            {subMenu.name}
          </div>
        </Link>
      </Menu.Item>
    )
  }, [])
  // tslint:disable-next-line:no-unused
  const { staticContext, ...otherProps } = props
  const router = useRouter()
  return (
    <>
      <Layout.Sider
        {...otherProps}
        width={200}
        theme="light"
        className={css`
          box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.12);
          position: fixed;
          left: 0;
          top: 0;
          z-index: 101;
          height: 100vh;
          overflow: auto;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            height: $nav-height;
            border-bottom: 1px solid $gray-3;
            & img {
              margin: 20px;
              width: 120px;
            }
          `}
        >
          <img src={require('@/assets/logo.png').default} />
        </div>
        <Menu
          mode="inline"
          defaultOpenKeys={[router.pathname?.replace(/(.+)\/.+/, ($0, $1) => $1)]}
          defaultSelectedKeys={[router.pathname]}
        >
          {menus.map((subMenu) => renderSubMenu(subMenu))}
        </Menu>
      </Layout.Sider>
    </>
  )
}
export const SideBar = SideBarComponent
