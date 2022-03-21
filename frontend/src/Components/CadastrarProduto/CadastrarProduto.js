import React, { useContext, useEffect, useRef, useState } from "react";

import Header from "../Header/Header";
import TituloH1 from "../Reutilizavel/TituloH1";
import CadastroProduto from "./CadastroProduto";
import Footer from "../Footer/Footer";
import FormProduto from "./FormProduto";
import AreaInputsInfo from "./AreaInputsInfo";
import Input from "../Form/Input";
import SelectCadastrarProduto from "./SelectCadastrarProduto";
import OptionCadastrarProduto from "./OptionCadastrarProduto";
import SeguraInput from "../Geral/SeguraInput";
import ButtonEnviar from "../Cadastro/ButtonEnviar";
import { LojaContext } from "../../Contexts/LojaContext/LojaContext";
import DescricaoProduto from "./DescriacaoProduto";
import { useNavigate } from "react-router-dom";

const CadastrarProduto = () => {
  const [nomeProduto, setNomeProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [tamanhoProduto, setTamanhoProduto] = useState("");
  const [informacoesProduto, setInformacoesProduto] = useState("");
  const [estoque, setEstoque] = useState(0);
  const { dataLojaLogada, cadastroProduto } = useContext(LojaContext);
  const navigate = useNavigate();
  const primeiroInputRef = useRef(null);

  useEffect(() => {
    if (!dataLojaLogada) {
      navigate("/login");
    }
  }, [dataLojaLogada, navigate]);

  function enviaDadosProduto(event) {
    event.preventDefault();
    cadastroProduto(
      nomeProduto,
      preco,
      categoria,
      marca,
      tamanhoProduto,
      informacoesProduto,
      estoque
    );
    setNomeProduto("");
    setPreco("");
    setMarca("");
    setCategoria("");
    setTamanhoProduto("");
    setInformacoesProduto("");
    setEstoque("");
    primeiroInputRef.current.focus();
  }

  return (
    <>
      <Header />
      <CadastroProduto>
        <TituloH1 size="2rem">Cadastrar Produto</TituloH1>
        <FormProduto onSubmit={enviaDadosProduto}>
          <AreaInputsInfo>
            <SeguraInput>
              <Input
                ref={primeiroInputRef}
                value={nomeProduto}
                onChange={({ target }) => setNomeProduto(target.value)}
                type="text"
                placeholder="Nome do produto"
                name="nome"
                id="nome"
                width="40%"
              />
            </SeguraInput>
            <SeguraInput gap={"1rem"}>
              {" "}
              <Input
                value={preco}
                onChange={({ target }) => setPreco(target.value)}
                type="tel"
                placeholder="Preco"
                name="preco"
                id="preco"
                width="9.6rem"
              />
              <SelectCadastrarProduto
                title="Informe a categoria do seu produto"
                id="categoria"
                value={categoria}
                onChange={({ target }) => setCategoria(target.value)}
              >
                <OptionCadastrarProduto disabled value="">
                  Categoria
                </OptionCadastrarProduto>
                <OptionCadastrarProduto value="roupa">
                  Roupa
                </OptionCadastrarProduto>
                <OptionCadastrarProduto value="tecnologia">
                  Tecnologia
                </OptionCadastrarProduto>
                <OptionCadastrarProduto value="domestico">
                  Domestico
                </OptionCadastrarProduto>
                <OptionCadastrarProduto value="livros">
                  Livros
                </OptionCadastrarProduto>
              </SelectCadastrarProduto>
            </SeguraInput>
            <SeguraInput>
              <Input
                value={marca}
                width="11rem"
                onChange={({ target }) => setMarca(target.value)}
                type="text"
                placeholder="Marca"
                name="marca"
                id="marca"
              />
              <Input
                width="4rem"
                title="Informe a quantidade de produto no estoque"
                value={estoque}
                onChange={({ target }) => setEstoque(target.value)}
                type="tel"
                placeholder="Estoque"
                name="estoque"
                id="estoque"
              />
            </SeguraInput>{" "}
            <SeguraInput>
              <Input
                value={tamanhoProduto}
                onChange={({ target }) => setTamanhoProduto(target.value)}
                title="Informe o tamanho do seu produto"
                type="text"
                placeholder="Tamanho do produto"
                name="tamanho"
                id="tamanho"
                width="40%"
              />
            </SeguraInput>
            <SeguraInput>
              <DescricaoProduto
                value={informacoesProduto}
                onChange={({ target }) => setInformacoesProduto(target.value)}
                placeholder="Descrição/Informações produto"
                width="40%"
              />
            </SeguraInput>
            <SeguraInput>
              <ButtonEnviar>Enviar</ButtonEnviar>
            </SeguraInput>
          </AreaInputsInfo>
        </FormProduto>
      </CadastroProduto>
      <Footer />
    </>
  );
};

export default CadastrarProduto;
