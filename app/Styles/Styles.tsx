"use client";

import styled from "styled-components";

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
  @media (max-width: 768px) {
    max-width: 95%;
    box-shadow: none;
  }
`;

export const SearchButton = styled(Button)`
  width: 10rem;
`;

export const SearchPageContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    height: 95vh;
    background-color: #f7f7fa;
  }
`;

export const Body = styled.body`
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #0c36b4, #3838f8e4);
`;

export const RootContainer = styled.div`
  max-width: 1192px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 4rem;
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
  @media (max-width: 768px) {
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

export const NavbarContainer = styled.nav`
  background-color: var(--primary);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.4rem;
    font-weight: bolder;
  }
`;

export const SearchInput = styled.input`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: 2px solid var(--secondary);
  color: black;
  border-radius: 30px;
  outline: none;
  transition: border-color 0.3s;
  @media (max-width: 768px) {
    padding: 0.1rem 0.8rem;
  }

  &:focus {
    border-color: var(--accent);
  }
`;
export const WeeklyForecastContainer = styled.div`
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
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const WeeklyForecastCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .7rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
  & > :first-child {
    background-color: var(--accent);
    color: black;
    @media (max-width: 768px) {
      min-width: 0;
    }
  }
`;

export const WeeklyForecastCard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  padding: .7rem 0;
  justify-items: center;
  background-color: var(--darkblueopaque);
  align-items: center;
  @media (max-width: 768px) {
    gap: 0.8rem;
    grid-template-columns: repeat(4, 1fr);
    padding: .3rem;
  }
`;