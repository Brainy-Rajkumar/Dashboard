import './App.css';
import React, { useState } from 'react';
import { Layout, Menu, Col, Row } from 'antd';
//import { Typography } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import {
  HomeOutlined,
  MenuOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  CompressOutlined
} from "@ant-design/icons"

const { Header, Footer, Sider, Content } = Layout;
//const { Title } = Typography;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout>
        {/* Sidebar */}
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

        {/* Header */}
        <Layout>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
            }}
          >
            <Menu
              theme="dark"

              mode="horizontal"
            >
              <Menu.Item>
                <SearchOutlined />
              </Menu.Item>

              <Menu.Item>
                <CompressOutlined />
              </Menu.Item>
            </Menu>

          </Header>


          {/* Content */}

          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div style={{ padding: '8px 0' }}>
                <Row justify="space-between">
                  <Col span={4} style={{
                    backgroundColor: 'yellow'
                  }}>
                    All Earnings
                  </Col>
                  <Col span={4} style={{
                    backgroundColor: 'green'
                  }}>
                    Page Views
                  </Col>
                  <Col span={4} style={{
                    backgroundColor: 'red'
                  }}>
                    Task Complete
                  </Col>
                  <Col span={4} style={{
                    backgroundColor: 'blue'
                  }}>
                    Downoads
                  </Col>
                </Row>
              </div>

              <div>

                <Row>
                  <Col span={6} push={18} style={{
                    backgroundColor: 'red'
                  }}>
                    col-6 col-pull-18
                  </Col>

                  <Col span={18} pull={6} style={{
                    backgroundColor: 'blue'
                  }}>
                    col-18 col-push-6
                  </Col>

                </Row>

              </div>

            </Content>

            {/* Footer */}

            <Footer>Footer</Footer>

          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
export default App;