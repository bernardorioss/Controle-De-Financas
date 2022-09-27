import React from "react";
import ResumeItem from "../ResumeItens";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa"; // os icones importdados da biblioteca

const Resume = () => {
  return (
    <C.Container>
    <ResumeItem
      title="Entradas"
      Icon={FaRegArrowAltCircleUp}
      // value={income}
    />
    <ResumeItem
      title="Saídas"
      Icon={FaRegArrowAltCircleDown} // icones
      // value={expense}
    />
    <ResumeItem title="Total" Icon={FaDollarSign}
    // value={total}
     />
  </C.Container>
  );
};

export default Resume;