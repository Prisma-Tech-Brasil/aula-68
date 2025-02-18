import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Typography, Layout, Space } from "antd";
const { Title } = Typography;
const { Header, Content } = Layout;

import CreateClass from "./components/createClass";
import AvailableClasses from "./components/availableClasses";

function App() {
  return (
    <Router>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#1890ff",
          padding: "0 20px",
        }}
      >
        <Title level={2} style={{ color: "#fff", margin: 0 }}>
          PrismaManagement
        </Title>
        <Space size="middle">
          <Link to="/" style={{ color: "#fff", fontSize: 18 }}>
            Turmas
          </Link>
          <Link to="/create_class" style={{ color: "#fff", fontSize: 18 }}>
            Criar turma
          </Link>
        </Space>
      </Header>

      <Content style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<AvailableClasses />} />
          <Route path="/create_class" element={<CreateClass />} />
        </Routes>
      </Content>
    </Router>
  );
}

export default App;
