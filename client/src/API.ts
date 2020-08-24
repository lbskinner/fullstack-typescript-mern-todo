import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

// getTodos() returns a promise of type AxiosResponse that holds the Todos fetched that need to match the type ApiDataType
export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "./todos"
    );
    return todos;
  } catch (error) {
    console.log("Getting Data from Server error", error);
    throw new Error(error);
  }
};
