import './App.css';
import React from 'react';
import { Layout } from 'antd';
//import { Typography } from 'antd';


import Head from './Components/Head';
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';


//const { Title } = Typography;

function App() {
  // const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout>
        {/* Sidebar */}
        <Sidebar />
       
        <Layout>
          <Head />

          {/* </Header> */}


          {/* Content */}

          <Body />
        </Layout>
      </Layout>
    </div>
  );
}
export default App;