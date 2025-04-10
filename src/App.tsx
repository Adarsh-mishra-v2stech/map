import { Layout } from "antd";
import Mapview from "./components/Mapview";
import { SidePanel } from "./components/Sidepanel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const { Sider, Content } = Layout;
import { MapProvider } from "./context";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MapProvider>
        <Layout style={{ height: "100vh" }}>
          <Sider width={300} style={{ background: "#fff" }}>
            <SidePanel />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                // minHeight: 280,
              }}
            >
              <Mapview />
            </Content>
          </Layout>
        </Layout>
      </MapProvider>
    </QueryClientProvider>
  );
}

export default App;
