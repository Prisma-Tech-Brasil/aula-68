import IStudent from "./IStudent";

interface IClass {
  id: number;
  name: string;
  room?: string;
  capacity: number;
  students: IStudent[];
  day: string;
  hour: string;
}

export default IClass;