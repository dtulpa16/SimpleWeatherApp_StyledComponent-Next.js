'use client'
import React from "react";
import styled from "styled-components";
import { formatDate } from "../utils/formatDate";
import GlobalStyle from "../Styles/GlobalStyles";

type HeaderProps = {
  location: string;
  date: string | null;
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  
`;
const Location = styled.h1`
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 0mm;
  @media (max-width: 600px) {
    font-size: 38px;
    font-weight: 400;
  }
`;
const Date = styled.h2`
  font-size: 28px;
  font-weight: 200;
  @media (max-width: 600px) {
    font-size: 24px;
    font-weight: 300;
  }
`;

export default function Header({ location, date }: HeaderProps) {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <Location>{location}</Location>
        <Date>{formatDate(date)}</Date>
      </HeaderContainer>
    </>
  );
}
