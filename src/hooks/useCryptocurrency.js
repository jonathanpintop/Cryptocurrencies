import React, { Fragment, useState } from "react";
import styled from "styled-components";
const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCryptocurrency = (label, InitialState, options) => {
  // console.log(options);

  // State de nuestro custom hook
  const [state, setState] = useState(InitialState);

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Choose -</option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, SelectCripto, setState];
};

export default useCryptocurrency;
