import { Card, Form, Input, Button } from "antd";
import IClass from "../interfaces/IClass";
import { useForm } from "react-hook-form";

function CreateClass() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<IClass>>();

  const onSubmit = (data: Partial<IClass>) => {
    console.log("Dados enviados: ", {
      ...data,
      capacity: Number(data.capacity),
      hour: String(data.hour),
    });
  };

  return (
    <Card
      title="Criar Turma"
      style={{ maxWidth: 400, margin: "auto", padding: 16 }}
    >
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Nome do curso"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Input {...register("name", { required: "Nome obrigatório" })} />
        </Form.Item>

        <Form.Item
          label="Laboratório"
          validateStatus={errors.room ? "error" : ""}
          help={errors.room?.message}
        >
          <Input
            {...register("room", {
              required: "Nome do laboratório obrigatório",
            })}
          />
        </Form.Item>

        <Form.Item
          label="Capacidade máxima"
          validateStatus={errors.capacity ? "error" : ""}
          help={errors.capacity?.message}
        >
          <Input
            type="number"
            {...register("capacity", {
              required: "Capacidade obrigatória",
            })}
          />
        </Form.Item>

        <Form.Item
          label="Dia"
          validateStatus={errors.day ? "error" : ""}
          help={errors.day?.message}
        >
          <Input {...register("day", { required: "Dia obrigatório" })} />
        </Form.Item>

        <Form.Item
          label="Hora"
          validateStatus={errors.hour ? "error" : ""}
          help={errors.hour?.message}
        >
          <Input
            type="time"
            {...register("hour", { required: "Hora obrigatória" })}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Criar
        </Button>
      </Form>
    </Card>
  );
}

export default CreateClass;
