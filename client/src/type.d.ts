// this file holds the types
// added .d.ts at the end to make the types globally available and don't need to import them anymore

// ITodo interface needs to mirror the shape of data from the API
// don't haver mongoose, added additional properties to match the type defined on the API
interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
