import { Link } from "react-router-dom";

import { Card, Typography, Badge, Space } from "antd";
const { Title, Text } = Typography;

import IClass from "../interfaces/IClass";
interface IClassCardProps {
  turma: IClass;
}

export default function ClassCard({ turma }: IClassCardProps) {
  return (
    <Link to={`/listStudents/${turma.id}`}>
      <Card hoverable style={{ minWidth: 320, padding: 16 }}>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Space
            direction="horizontal"
            align="center"
            style={{ width: "100%" }}
          >
            <Badge
              count={`${turma.students.length}/${turma.capacity}`}
              showZero
              style={{
                backgroundColor:
                  turma.students.length >= turma.capacity ? "red" : "#1890ff",
              }}
            />
            <Title level={4} style={{ margin: 0 }}>
              {turma.name}
            </Title>
          </Space>
          <Space
            direction="horizontal"
            size="large"
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <Space direction="horizontal" size="small">
              <Text strong>{turma.day}</Text>
              <Text>{turma.hour}h</Text>
            </Space>
            <Text type="secondary">Sala: {turma.room}</Text>
          </Space>
        </Space>
      </Card>
    </Link>
  );
}
