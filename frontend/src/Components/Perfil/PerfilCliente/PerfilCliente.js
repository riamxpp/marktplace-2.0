import React from "react";

import { Link } from "react-router-dom";
import ContentOptions from "../ContentOptions";
import Option from "../Option";
import ContentPerfilLoja from "../PerfilLoja/ContentPerfilLoja";
import Span from "../Span";
import SuaContaTitulo from "../SuaContaTitulo";
import SvgContent from "../SvgContent";
import TextoOption from "../TextoOption";
import TituloOption from "../TituloOption";
import "../Perfil.css";

const PerfilCliente = () => {
  return (
    <ContentPerfilLoja>
      <SuaContaTitulo>Sua conta</SuaContaTitulo>
      <ContentOptions>
        <Option>
          <Link to="/" className="linkPerfil">
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
              <TituloOption>Produtos comprados</TituloOption>
              <Span>Verifica uma lista com todas as suas compras.</Span>
            </TextoOption>
          </Link>
        </Option>
        <Option>
          <Link to="/" className="linkPerfil">
            <SvgContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-currency-dollar"
                viewBox="0 0 16 16"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
              </svg>
            </SvgContent>
            <TextoOption>
              <TituloOption>Reembolso</TituloOption>
              <Span>Algo deu errado e você quer seu dinheiro de voltar ?</Span>
            </TextoOption>
          </Link>
        </Option>
        <Option>
          <Link to="/" className="linkPerfil">
            <SvgContent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-wallet"
                viewBox="0 0 16 16"
              >
                <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
              </svg>
            </SvgContent>
            <TextoOption>
              <TituloOption>Carteira</TituloOption>
              <Span>Veja quanto dinheiro você tem disponível.</Span>
            </TextoOption>
          </Link>
        </Option>
        <Option>
          <Link className="linkPerfil" to="/feedback">
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
      </ContentOptions>
    </ContentPerfilLoja>
  );
};

export default PerfilCliente;
