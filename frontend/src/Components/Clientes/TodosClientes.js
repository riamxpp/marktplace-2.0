import React, { useEffect } from "react";
import api from "../api/api";

const TodosClientes = () => {
  useEffect(() => {
    async function pegaDados() {
      const response = await api.get("/todos-clientes");
      console.log(response);
    }
    pegaDados();
  }, []);

  return <div>Todos Clientes</div>;
};

export default TodosClientes;
