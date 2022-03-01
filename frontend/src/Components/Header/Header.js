import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import MyHeader from "./MyHeader";
import Logo from "./Logo";
import Ul from "./Ul";
import MobileButtonComponent from "./MobileButton";
import Li from "./Li";
import { UsuarioContext } from "../../Contexts/UsuarioContext/UsuarioContext";

const Header = () => {
  const [activeMobilleButton, setActiveMobilleButon] = useState(null);
  const ulRef = useRef(null);
  const { data, Logout, verificaStatusLogin } = useContext(UsuarioContext);

  useEffect(() => {
    verificaStatusLogin();
  }, [verificaStatusLogin]);

  return (
    <MyHeader>
      <Logo href="/home">MarktPlace</Logo>
      <nav>
        <Ul ref={ulRef} shadow={activeMobilleButton}>
          <MobileButtonComponent
            activeMobilleButton={activeMobilleButton}
            setActiveMobilleButon={setActiveMobilleButon}
            ulRef={ulRef}
          ></MobileButtonComponent>
          <Li display={activeMobilleButton}>
            <Link id="linkMobileButton" className="link" to="/contato">
              Contate-nos
            </Link>
          </Li>
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
              to={data ? `/${data.nome}/perfil` : "/login"}
            >
              {data ? `${data.nome}` : "Login"}
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
