import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MobileButton = styled.button`
  width: 2.3rem;
  height: 1.8rem;
  cursor: pointer;
  background: #7145f5;
  border-radius: 4px;
  border: none;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  &::before {
    content: "";
    display: inline-block;
    width: 60%;
    height: 2px;
    background-color: #fff;
    box-shadow: 0 6px #fff, 0 -6px #fff;
    transform: ${({ transform }) => (transform ? "rotate(90deg)" : "")};
    transition: 0.3s;
  }

  @media (max-width: 550px) {
    display: flex;
  }
`;

const MobileButtonComponent = ({
  activeMobilleButton,
  setActiveMobilleButon,
  ulRef,
}) => {
  const [itens, setItens] = useState([]);
  const buttonMobileRef = useRef(null);

  useEffect(() => {
    setItens(Array.from(document.querySelectorAll("#linkMobileButton")));
  }, []);

  useEffect(() => {
    function outsideClick(event) {
      if (activeMobilleButton) {
        itens.forEach((item) => {
          if (
            item !== event.target ||
            event.taget !== ulRef.current ||
            buttonMobileRef.current !== event.target
          )
            setActiveMobilleButon(false);
        });
      }
    }

    window.addEventListener("click", outsideClick);
    return () => window.removeEventListener("click", outsideClick);
  }, [ulRef, setActiveMobilleButon, itens, activeMobilleButton]);

  function useActiveMobileMenu() {
    if (activeMobilleButton) {
      setActiveMobilleButon(false);
    } else {
      setActiveMobilleButon(true);
    }
  }

  return (
    <MobileButton
      transform={activeMobilleButton}
      onClick={useActiveMobileMenu}
      ref={buttonMobileRef}
    ></MobileButton>
  );
};

export default MobileButtonComponent;
