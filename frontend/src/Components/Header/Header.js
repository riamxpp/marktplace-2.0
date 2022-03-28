import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import MyHeader from "./MyHeader";
import Ul from "./Ul";
import MobileButtonComponent from "./MobileButton";
import Li from "./Li";
import { UsuarioContext } from "../../Contexts/UsuarioContext/UsuarioContext";
import { LojaContext } from "../../Contexts/LojaContext/LojaContext";
import NavegacaoHeader from "./NavegacaoHeader";
import SeguraContentHeader from "./SeguraContentHeader";

const Header = () => {
  const [activeMobilleButton, setActiveMobilleButon] = useState(null);
  const ulRef = useRef(null);
  const { data, Logout } = useContext(UsuarioContext);
  const { dataLojaLogada } = useContext(LojaContext);
  const [navPerfilLogin, setNavPerfilLogin] = useState({
    urlLogin: "",
    urlCadastro: "",
    viewUser: "",
  });

  useEffect(() => {
    if (data) {
      setNavPerfilLogin({
        urlLogin: `/${data.dadosUsuario.nome}/perfil`,
        urlCadastro: `/sair`,
        viewUser: `${data.dadosUsuario.nome}`,
      });
    } else if (dataLojaLogada) {
      setNavPerfilLogin({
        urlLogin: `/${dataLojaLogada.nome}/perfil`,
        urlCadastro: `/sair`,
        viewUser: `${dataLojaLogada.nome}`,
      });
    } else {
      setNavPerfilLogin({
        urlLogin: `/login`,
        urlCadastro: `/cadastre-se`,
        viewUser: `Login`,
      });
    }
  }, [data, dataLojaLogada, navPerfilLogin.nome]);

  return (
    <MyHeader>
      <SeguraContentHeader>
        <Link className="link" to="/home">
          MarktPlace
        </Link>
        <NavegacaoHeader>
          <Ul ref={ulRef} shadow={activeMobilleButton}>
            <MobileButtonComponent
              activeMobilleButton={activeMobilleButton}
              setActiveMobilleButon={setActiveMobilleButon}
              ulRef={ulRef}
            ></MobileButtonComponent>
            {data && (
              <Li>
                <Link to="/carrinho">Carrinho</Link>
              </Li>
            )}
            <Li display={activeMobilleButton}>
              <Link id="linkMobileButton" className="link" to="/sobre">
                Sobre
              </Link>
            </Li>
            <Li display={activeMobilleButton}>
              <Link id="linkMobileButton" className="link" to="/lojas">
                Lojas{" "}
              </Link>
            </Li>

            <Li display={activeMobilleButton}>
              <Link
                id="linkMobileButton"
                className="link"
                to={navPerfilLogin.urlLogin}
              >
                {navPerfilLogin.viewUser}
              </Link>
            </Li>
            <Li display={activeMobilleButton}>
              <Link
                id="linkMobileButton"
                className="link"
                onClick={data || dataLojaLogada ? Logout : () => ""}
                to={data || dataLojaLogada ? "/" : "/cadastre-se"}
                // to={navPerfilLogin.urlCadastro}
              >
                {data || dataLojaLogada ? "Sair" : "Cadastre-se"}
              </Link>
            </Li>
          </Ul>
        </NavegacaoHeader>
      </SeguraContentHeader>
    </MyHeader>
  );
};

export default Header;
