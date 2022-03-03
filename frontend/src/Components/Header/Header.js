import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import MyHeader from "./MyHeader";
import Ul from "./Ul";
import MobileButtonComponent from "./MobileButton";
import Li from "./Li";
import { UsuarioContext } from "../../Contexts/UsuarioContext/UsuarioContext";
import { LojaContext } from "../../Contexts/LojaContext/LojaContext";

const Header = () => {
  const [activeMobilleButton, setActiveMobilleButon] = useState(null);
  const ulRef = useRef(null);
  const { data, Logout } = useContext(UsuarioContext);
  const { dataLojaLogada } = useContext(LojaContext);
  const [navPerfilLogin, setNavPerfilLogin] = useState({
    url: "",
    viewUser: "",
  });

  useEffect(() => {
    if (data) {
      setNavPerfilLogin({
        url: `/${data.dadosUsuario.nome}/perfil`,
        viewUser: `${data.dadosUsuario.nome}`,
      });
    } else if (dataLojaLogada) {
      setNavPerfilLogin({
        url: `/${navPerfilLogin.nome}/perfi`,
        viewUser: `${dataLojaLogada.nome}`,
      });
    } else {
      setNavPerfilLogin({
        url: `/login`,
        viewUser: `Login`,
      });
    }
  }, [data, dataLojaLogada, navPerfilLogin.nome]);

  return (
    <MyHeader>
      <Link className="link" to="/home">
        MarktPlace
      </Link>
      <nav>
        <Ul ref={ulRef} shadow={activeMobilleButton}>
          <MobileButtonComponent
            activeMobilleButton={activeMobilleButton}
            setActiveMobilleButon={setActiveMobilleButon}
            ulRef={ulRef}
          ></MobileButtonComponent>

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
              to={navPerfilLogin.url}
            >
              {navPerfilLogin.viewUser}
            </Link>
          </Li>
          <Li display={activeMobilleButton}>
            <Link
              id="linkMobileButton"
              className="link"
              onClick={data ? Logout : () => "a"}
              to={data ? "/home" : "/cadastre-se"}
            >
              {data ? "Sair" : "Cadastre-se"}
            </Link>
          </Li>
        </Ul>
      </nav>
    </MyHeader>
  );
};

export default Header;
