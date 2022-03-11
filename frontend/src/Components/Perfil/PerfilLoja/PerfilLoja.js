import React, { useContext, useEffect } from "react";

import ContentPerfilLoja from "./ContentPerfilLoja";
import SuaContaTitulo from "../SuaContaTitulo";
import ContentOptions from "../ContentOptions";
import Option from "../Option";
import "react-bootstrap-icons";
import SvgContent from "../SvgContent";
import { Link, useNavigate } from "react-router-dom";
import TextoOption from "../TextoOption";
import "../Perfil.css";
import TituloOption from "../TituloOption";
import Span from "../Span";
import { LojaContext } from "../../../Contexts/LojaContext/LojaContext";

const PerfilLoja = () => {
  const { dataLojaLogada } = useContext(LojaContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!dataLojaLogada) {
      navigate("/login");
    }
  }, [dataLojaLogada, navigate]);

  return (
    <ContentPerfilLoja>
      <SuaContaTitulo>Sua conta</SuaContaTitulo>
      <ContentOptions>
        <Option>
          <Link
            className="linkPerfil"
            to={`/${dataLojaLogada.nome}/seus-produtos`}
          >
            <SvgContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-box-seam"
                viewBox="0 0 16 16"
              >
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
            </SvgContent>
            <TextoOption>
              <TituloOption>Seus produtos</TituloOption>
              <Span>Veja todos os produtos cadastrados.</Span>
            </TextoOption>
          </Link>
        </Option>
        <Option>
          <Link className="linkPerfil" to="/ ">
            <SvgContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </SvgContent>
            <TextoOption>
              <TituloOption>Produtos vendidos</TituloOption>
              <Span>Veja a quantidade de produtos vendidos.</Span>
            </TextoOption>
          </Link>
        </Option>
        <Option>
          <Link className="linkPerfil" to="/ ">
            <SvgContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-mic"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
              </svg>
            </SvgContent>
            <TextoOption>
              <TituloOption>Feedback</TituloOption>
              <Span>Nos dê seu feedback, conte onde devemos melhorar!</Span>
            </TextoOption>
          </Link>
        </Option>
        <Option>
          <Link
            className="linkPerfil"
            to={`/${dataLojaLogada.nome}/remover-produto`}
          >
            <SvgContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </SvgContent>
            <TextoOption>
              <TituloOption>Remover produto</TituloOption>
              <Span>Quer tirar algum produto do ar ? ok!</Span>
            </TextoOption>
          </Link>
        </Option>
        <Option>
          <Link
            className="linkPerfil"
            to={`/${dataLojaLogada.nome}/perfil/cadastrar-produto`}
          >
            <SvgContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-file-earmark-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
              </svg>
            </SvgContent>
            <TextoOption>
              <TituloOption>Cadastrar Produto</TituloOption>
              <Span>Entre para cadastrar um novo produto.</Span>
            </TextoOption>
          </Link>
        </Option>
      </ContentOptions>
    </ContentPerfilLoja>
  );
};

export default PerfilLoja;
