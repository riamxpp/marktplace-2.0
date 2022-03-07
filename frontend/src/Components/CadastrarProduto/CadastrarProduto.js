import React, { useContext, useEffect, useState } from "react";

import Header from "../Header/Header";
import CadastroProduto from "./CadastroProduto";
import Footer from "../Footer/Footer";
import FormProduto from "./FormProduto";
import InputImage from "./InputImage";
import AreaInputImage from "./AreaInputImage";
import AreaInputsInfo from "./AreaInputsInfo";
import Input from "../Form/Input";
import VisualizacaoImage from "./VisualizacaoImage";
import SelectCategoria from "./SelectCategoria";
import OptionCategoria from "./OptionCategoria";
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
  const [tamanhoProduto, setTtamanhoProduto] = useState("");
  const [informacoesProduto, setInformacoesProduto] = useState("");
  const { dataLojaLogada, cadastroProduto } = useContext(LojaContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!dataLojaLogada) {
      navigate("/login");
    }
  }, [dataLojaLogada, navigate]);

  function arquivoSelecionado(event) {
    console.log(event.target.files[0]);
  }

  function enviaDadosProduto(event) {
    event.preventDefault();
    cadastroProduto(
      nomeProduto,
      preco,
      categoria,
      marca,
      tamanhoProduto,
      informacoesProduto
    );
  }

  return (
    <>
      <Header />
      <CadastroProduto>
        <FormProduto onSubmit={enviaDadosProduto}>
          <AreaInputImage>
            <VisualizacaoImage />
            <InputImage type="file" onChange={arquivoSelecionado} />
          </AreaInputImage>
          <AreaInputsInfo>
            <SeguraInput>
              <Input
                value={nomeProduto}
                onChange={({ target }) => setNomeProduto(target.value)}
                type="text"
                placeholder="Nome do produto"
                name="nome"
                id="nome"
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
                width="4rem"
              />
              <SelectCategoria
                title="Informe a categoria do seu produto"
                id="categoria"
                value={categoria}
                onChange={({ target }) => setCategoria(target.value)}
              >
                <OptionCategoria disabled value="">
                  Selecione
                </OptionCategoria>
                <OptionCategoria value="roupa">Roupa</OptionCategoria>
                <OptionCategoria value="tecnologia">Tecnologia</OptionCategoria>
                <OptionCategoria value="domestico">Domestico</OptionCategoria>
                <OptionCategoria value="livros">Livros</OptionCategoria>
              </SelectCategoria>
            </SeguraInput>
            <SeguraInput>
              <Input
                value={marca}
                onChange={({ target }) => setMarca(target.value)}
                type="text"
                placeholder="Marca"
                name="marca"
                id="marca"
              />
            </SeguraInput>{" "}
            <SeguraInput>
              <Input
                value={tamanhoProduto}
                onChange={({ target }) => setTtamanhoProduto(target.value)}
                title="Informe o tamanho do seu produto"
                type="text"
                placeholder="Tamanho do produto"
                name="tamanho"
                id="tamanho"
              />
            </SeguraInput>
            <SeguraInput>
              <DescricaoProduto
                value={informacoesProduto}
                onChange={({ target }) => setInformacoesProduto(target.value)}
                placeholder="Descrição/Informações produto"
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
