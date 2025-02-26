import { Link, useLocation } from "react-router-dom";
import { Typography, Layout, Space } from "antd";

const { Title } = Typography;
const { Header } = Layout;

function AppHeader() {
  const location = useLocation();

  return (
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
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Turmas
        </Link>
        <Link
          to="/createClass"
          className={`nav-link ${location.pathname === "/createClass" ? "active" : ""}`}
        >
          Criar turma
        </Link>
      </Space>
    </Header>
  );
}

export default AppHeader;
