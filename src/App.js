import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import image from "./cryptocurrency.png";
import Form from "./components/Form";
import Quotation from "./components/Quotation";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [coin, SetCoin] = useState("");
  const [cryptocurrency, SetCryptocurrency] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarcryptocurrency = async () => {
      if (coin === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`;

      const result = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        setResult(result.data.DISPLAY[cryptocurrency][coin]);
      }, 3000);
    };
    cotizarcryptocurrency();
  }, [coin, cryptocurrency]);

  const component = loading ? <Spinner /> : <Quotation result={result} />;

  return (
    <Container>
      <div>
        <Image src={image} alt="Image crypto" />
      </div>
      <div>
        <Heading>Get Cryptocurrency Quotation in just seconds</Heading>

        <Form SetCoin={SetCoin} SetCryptocurrency={SetCryptocurrency} />

        {component}
      </div>
    </Container>
  );
}

export default App;
