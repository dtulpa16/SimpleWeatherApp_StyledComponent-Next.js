"use client";

import styled from "styled-components";

export const Form = styled.form`
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  box-shadow: 2px 2px 2px #c2c2c28a;
  max-width: 50%;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #f7f7fa;
  margin: 0 auto;
  width: 100%;
`;
export const SearchPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const FormHeader = styled.h1`
  color: var(--darkblue);
  font-size: 28px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px 10px;
  width: 100%;
  border: 1px solid var(--accent);
  border-radius: 0.7rem;
  &:focus {
    outline: 1px solid var(--darkblue);
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: var(--secondary);
  color: var(--white);
  border: none;
  cursor: pointer;
  border-radius: 0.7rem;
  transition: all 0.2s;
  border: 1px solid #ffffff;
  &:hover {
    transform: scaleX(102%);
    background-color: white;
    color: var(--primary);
    border: 1px solid #54545438;
  }
`;
export const SearchButton = styled(Button)`
  width: 10rem;
`;
export const Body = styled.body`
  max-width: 1192px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: stretch;
  background-image: linear-gradient(to bottom right, #002db3, #3a3afc);
`;

export const HourlyForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  gap: 1.5rem;
  color: white;
  > h4 {
    font-size: 30px;
    font-weight: lighter;
  }
  @media (max-width:768px) {
    margin-top: 0;
  }
`;
export const HourlyForecastCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
  & > :first-child {
    background-color: var(--accent);
    color: black;
    font-weight: bold;
    min-width: 120px;
    @media (max-width: 768px) {
      min-width: 0;
    }
  }
`;
export const HourlyForecastCard = styled.div`
  display: flex;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  flex-direction: column;
  max-width: 120px;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: var(--darkblueopaque);
  > p {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0mm;
    @media (max-width: 768px) {
      font-size: 20px;
      font-weight: lighter;
    }
  }
  @media (max-width: 768px) {
    gap: 0.1rem;
    flex-basis: 22%;
    padding: 0.2rem 0.6rem;
  }
`;
