import { Footer } from "antd/es/layout/layout";
import RoutesIndex from "./routes";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: "100dvh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}>
        <Title level={3} style={{ margin: 0 }}>
          <Link to={"/"} style={{ color: "white" }}>
            US Top Headline
          </Link>
        </Title>
      </Header>
      <Content style={{ padding: "1em" }}>
        <RoutesIndex />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        US News Portal ©{new Date().getFullYear()} Created with Ant Design by{" "}
        <a
          href="https://github.com/neizshya"
          target="_blank"
          rel="noopener noreferrer">
          Neizshya
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
