import React, { useContext, useEffect, useRef, useState } from "react";
import * as yup from "yup";

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
import ErrorMessage from "../Login/ErrorMessage";

const CadastrarProduto = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [informacoes, setInformacoes] = useState("");
  const [estoque, setEstoque] = useState(0);
  const [error, setError] = useState("");
  const { dataLojaLogada, cadastroProduto } = useContext(LojaContext);
  const navigate = useNavigate();
  const primeiroInputRef = useRef(null);

  const schema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatorio."),
    preco: yup
      .number("O campo preço precisa ser númerico.")
      .required("O campo preco é preco."),
    categoria: yup.string().required("O campo categoria é obrigatorio."),
    marca: yup.string().required("O campo marca é obrigatorio."),
    tamanho: yup.string().required("O campo tamanho é obrigatorio."),
    informacoes: yup.string().required("O campo informacoes é obrigatorio."),
    estoque: yup.string().required("O campo estoque é obrigatorio."),
  });

  useEffect(() => {
    if (!dataLojaLogada) {
      navigate("/login");
    }
  }, [dataLojaLogada, navigate]);

  function enviaDadosProduto(event) {
    event.preventDefault();
    const valores = {
      nome,
      preco,
      categoria,
      marca,
      tamanho,
      informacoes,
      estoque,
    };
    schema
      .validate(valores, { abortEarly: false })
      .then(() => {
        cadastroProduto(
          nome,
          preco,
          categoria,
          marca,
          tamanho,
          informacoes,
          estoque
        );
        setError("");
        setNome("");
        setPreco("");
        setMarca("");
        setCategoria("");
        setTamanho("");
        setInformacoes("");
        setEstoque("");
        primeiroInputRef.current.focus();
      })
      .catch((err) => {
        setError(err.errors[0]);
      });
  }

  return (
    <>
      <Header />
      <CadastroProduto>
        <TituloH1 size="2rem" color="#fff">
          Cadastrar Produto
        </TituloH1>
        <FormProduto onSubmit={enviaDadosProduto}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <AreaInputsInfo>
            <SeguraInput>
              <Input
                ref={primeiroInputRef}
                value={nome}
                onChange={({ target }) => setNome(target.value)}
                type="text"
                placeholder="Nome do produto"
                name="nome"
                id="nome"
                width="60%"
              />
            </SeguraInput>
            <SeguraInput direction="row" gap={"1rem"}>
              {" "}
              <Input
                value={preco}
                onChange={({ target }) => setPreco(target.value)}
                type="tel"
                placeholder="Preco"
                name="preco"
                id="preco"
                width="38%"
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
            <SeguraInput direction="row">
              <Input
                value={marca}
                width="38%"
                onChange={({ target }) => setMarca(target.value)}
                type="text"
                placeholder="Marca"
                name="marca"
                id="marca"
              />
              <Input
                width="5.3rem"
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
                value={tamanho}
                onChange={({ target }) => setTamanho(target.value)}
                title="Informe o tamanho do seu produto"
                type="text"
                placeholder="Tamanho do produto"
                name="tamanho"
                id="tamanho"
                width="60%"
              />
            </SeguraInput>
            <SeguraInput>
              <DescricaoProduto
                value={informacoes}
                onChange={({ target }) => setInformacoes(target.value)}
                placeholder="Descrição/Informações produto"
                width="60%"
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
