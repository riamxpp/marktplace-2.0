import React from "react";
import { Routes, Route } from "react-router-dom";

import { UsuarioStorage } from "./Contexts/UsuarioContext/UsuarioContext";
import Home from "./Components/Home/Home";
import Cadastro from "./Components/Cadastro/Cadastro";
import Login from "./Components/Login/Login";
import TodosClientes from "./Components/Clientes/TodosClientes";
import Sobre from "./Components/Sobre/Sobre";
import Lojas from "./Components/LojasCadastradas/Lojas";
import CadastrarProduto from "./Components/CadastrarProduto/CadastrarProduto";
import "./Global.css";
import Perfil from "./Components/Perfil/Perfil";
import { LojaStorage } from "./Contexts/LojaContext/LojaContext";
import AdicionarAoCarrinho from "./Components/Carrinho/AdicionarAoCarrinho/AdicionarAoCarrinho";
import RemoverProduto from "./Components/RemoverProduto/RemoverProduto";
import SeusProdutos from "./Components/SeusProdutos/Loja/SeusProdutos";
import FeedBack from "./Components/FeedBack/FeedBack";
import HomeLogado from "./Components/Home/HomeLogado/HomeLogado";

function App() {
  return (
    <UsuarioStorage>
      <LojaStorage>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cadastre-se" element={<Cadastro />} />
          <Route path="login" element={<Login />} />
          <Route path="todos-clientes" element={<TodosClientes />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="lojas" element={<Lojas />} />
          <Route
            path="/:loja/perfil/cadastrar-produto"
            element={<CadastrarProduto />}
          />
          <Route path=":user/perfil" element={<Perfil />} />
          <Route path="/carrinho" element={<AdicionarAoCarrinho />} />
          <Route path="/:user/remover-produto" element={<RemoverProduto />} />
          <Route path="/:user/seus-produtos" element={<SeusProdutos />} />
          <Route path="/feedback" element={<FeedBack />} />
        </Routes>
      </LojaStorage>
    </UsuarioStorage>
  );
}

export default App;
