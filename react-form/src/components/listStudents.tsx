import { useParams } from "react-router-dom";
import { Table, Typography } from "antd";
import turmas from "../mocks/turmas.json";

const { Title } = Typography;

function ListStudents() {
  const { id } = useParams<{ id: string }>();
  const turma = turmas.find((t) => t.id === Number(id));

  if (!turma) {
    return <Title level={2}>Turma não encontrada</Title>;
  }

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Contato",
      dataIndex: "email",
      key: "contact",
    },
  ];

  return <Table columns={columns} dataSource={turma.students} rowKey="id" />;
}

export default ListStudents;
