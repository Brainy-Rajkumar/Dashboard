import React from 'react'
import { Layout, Col, Row, Card } from 'antd';

const { Content } = Layout;

const Body = () => {
  return (
    <div>
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
                <Row >
                  <Col span={6} >
                    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300,backgroundColor: 'yellow' }}>
                        <p>All Earnings</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    
                  </Col>
                  <Col span={6} >
                    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300,backgroundColor: 'green' }}>
                    <p>Page Views</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    </Card>
                    
                  </Col>
                  <Col span={6}>
                    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300,backgroundColor: 'red' }}>
                    <p>Task Complete</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    </Card>
                    
                  </Col>
                  <Col span={6}>
                    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300, backgroundColor: 'blue' }}>
                        <p>Card Doenload</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                  </Col>
                </Row>
              </div>

              <div>

                <Row>
                  <Col span={18} style={{
                    backgroundColor: 'red'
                  }}>
                    col-6 col-pull-18
                  </Col>

                  <Col span={6} style={{
                    backgroundColor: 'blue'
                  }}>
                    col-18 col-push-6
                  </Col>

                </Row>

              </div>

            </Content>

            {/* Footer */}


          </Layout>
    </div>
  )
}

export default Body
