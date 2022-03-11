import React from "react";

import Button from "./Button";
import ContentButton from "./ContentButton";

const PaginationComponent = ({ pages, pageAtual, setPageAtual }) => {
  return (
    <ContentButton>
      {Array.from(Array(pages), (item, index) => {
        return (
          <Button
            key={index}
            background={`${pageAtual === index ? "#3A71FA" : ""}`}
            value={index}
            onClick={(event) => {
              setPageAtual(+event.target.value);
            }}
          >
            {index + 1}
          </Button>
        );
      })}
    </ContentButton>
  );
};

export default PaginationComponent;
