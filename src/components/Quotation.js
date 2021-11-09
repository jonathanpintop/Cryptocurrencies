import React from "react";
import styled from "styled-components";

const ResulDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Quotation = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  console.log(result);

  return (
    <ResulDiv>
      <Price>
        The value is: <span>{result.PRICE}</span>{" "}
      </Price>
      <Info>
        The highest value of Today: <span>{result.HIGHDAY}</span>{" "}
      </Info>
      <Info>
        The lowest value of Today: <span>{result.LOWDAY}</span>{" "}
      </Info>
      <Info>
        Last 24 hours variation: <span>{result.CHANGEPCT24HOUR}</span>{" "}
      </Info>
      <Info>
        Last Updated: <span>{result.LASTUPDATE}</span>{" "}
      </Info>
    </ResulDiv>
  );
};

export default Quotation;
