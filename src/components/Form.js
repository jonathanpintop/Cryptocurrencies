import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Error from "./Error";
import useCoin from "../hooks/useCoin";
import useCryptocurrency from "../hooks/useCryptocurrency";
import axios from "axios";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ SetCoin, SetCryptocurrency }) => {
  const [cryptocurrencyList, SetCryptocurrencys] = useState([]);
  const [error, setError] = useState(false);

  const COINS = [
    { code: "USD", name: "Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Pound Sterling" },
  ];

  const [coin, SelectCoins] = useCoin("Choose your Currency", "", COINS);

  const [cryptocurrency, SelectCripto] = useCryptocurrency(
    "Choose your cryptocurrency",
    "",
    cryptocurrencyList
  );

  useEffect(() => {
    const fetchAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);

      SetCryptocurrencys(result.data.Data);
    };
    fetchAPI();
  }, []);

  const getCoinQuotation = (e) => {
    e.preventDefault();

    if (coin === "" || cryptocurrency === "") {
      setError(true);
      return;
    }

    setError(false);
    SetCoin(coin);
    SetCryptocurrency(cryptocurrency);
  };

  return (
    <form onSubmit={getCoinQuotation}>
      {error ? <Error message="All fields are Required" /> : null}

      <SelectCoins />

      <SelectCripto />

      <Button type="submit" value="Get Quotation" />
    </form>
  );
};

export default Form;
