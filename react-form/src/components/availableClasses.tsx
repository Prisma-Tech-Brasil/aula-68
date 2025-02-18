import { Row, Col } from "antd";

import ClassCard from "../components/classCard";
import turmas from "../mocks/turmas.json";

function AvailableClasses() {
  return (
    <Row gutter={[16, 16]} justify="center">
      {turmas.map((turma) => (
        <Col key={turma.id} xs={24} sm={12} md={8} lg={6}>
          <ClassCard turma={turma} />
        </Col>
      ))}
    </Row>
  );
}

export default AvailableClasses;
