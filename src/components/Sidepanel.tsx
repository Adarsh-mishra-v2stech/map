import { List, Typography, Card } from "antd";
import { PushpinOutlined } from "@ant-design/icons";
import { useMapContext } from "../context";

const { Text, Title } = Typography;

export function SidePanel() {
  const { locations } = useMapContext();
  console.log("locations", locations);

  return (
    <div style={{ height: "100%" }}>
      <div style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
        <Title level={4}>Saved Locations</Title>
      </div>

      <List
        dataSource={locations}
        locale={{
          emptyText: (
            <div
              style={{ padding: "16px", textAlign: "center", color: "#bfbfbf" }}
            >
              Click on the map to add locations
            </div>
          ),
        }}
        renderItem={(location) => (
          <List.Item>
            <Card
              key={location.id}
              style={{ width: "100%", margin: "8px", borderRadius: "8px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <PushpinOutlined style={{ color: "red", fontSize: "20px" }} />

                <div>
                  <Text strong>{location.title}</Text>
                  <Text
                    style={{
                      display: "block",
                      fontSize: "small",
                      color: "#8c8c8c",
                      marginTop: "8px",
                    }}
                  >
                    {location.description}
                  </Text>
                  <Text
                    type="secondary"
                    style={{
                      display: "block",
                      fontSize: "x-small",
                      marginTop: "4px",
                    }}
                  >
                    {location.latitude}, {location.longitude}
                  </Text>
                  <Text
                    type="secondary"
                    style={{
                      display: "block",
                      fontSize: "x-small",
                      marginTop: "8px",
                    }}
                  >
                    {location.address}
                  </Text>
                  <Text
                    type="secondary"
                    style={{
                      display: "block",
                      fontSize: "x-small",
                      marginTop: "4px",
                    }}
                  >
                    {location.createdAt}
                  </Text>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
