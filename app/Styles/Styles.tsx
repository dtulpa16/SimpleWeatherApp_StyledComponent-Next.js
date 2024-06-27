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
  &:focus{
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
  justify-content: center;
  background-image: linear-gradient(to bottom right, #002db3, #3a3afc);
`;
