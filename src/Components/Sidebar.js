import React from 'react'
import { useState } from 'react';
import SubMenu from 'antd/es/menu/SubMenu';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  MenuOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons"
import './Sidebar.css'
const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <div id='sidebar'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
          >
            <Menu.Item>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Menu.Item>

            <SubMenu
              title={
                <span>
                  <HomeOutlined />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Menu.ItemGroup>
                <Menu.Item key='Default'>Default</Menu.Item>
                <Menu.Item key='CMR'>CMR</Menu.Item>
                <Menu.Item key='Analytics'>Analytics</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <SubMenu
              title={
                <span>
                  <HomeOutlined />
                  <span>Page Layout</span>
                </span>
              }
            >
              <Menu.ItemGroup>
                <Menu.Item key='Vertical'>Vertical</Menu.Item>
                <Menu.Item key='Horizontal'>Horizontal</Menu.Item>
                <Menu.Item key='BottomMenu'>Bottom Menu</Menu.Item>
                <Menu.Item key='BoxLayout'>Box Layout</Menu.Item>
                <Menu.Item key='RTL'>RTL</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <Menu.Item>

              <MenuOutlined />
              <span>Navigation</span>

            </Menu.Item>

            <SubMenu
              title={
                <span>
                  <HomeOutlined />
                  <span>Widget</span>
                </span>
              }
            >
              <Menu.ItemGroup>
                <Menu.Item key='Statics'>Statics</Menu.Item>
                <Menu.Item key='Data'>Data</Menu.Item>
                <Menu.Item key='ChartWidget'>Chart Widget</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

          </Menu>
        </Sider>
    </div>
  )
}

export default Sidebar
