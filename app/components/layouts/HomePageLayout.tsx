import React from "react";
import styled from "styled-components";

export default function HomePageLayout() {
  return (
    <Form>
      <Input type="text" placeholder="Enter City, State, or ZIP Code" />
    </Form>
  );
}

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const Input = styled.input`
  padding: 5px;
`;
