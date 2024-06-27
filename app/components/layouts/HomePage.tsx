import React from "react";

import {
  Form,
  FormHeader,
  Input,
  SearchButton,
} from "../../Styles/Styles";
import GlobalStyle from "../../Styles/GlobalStyles";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Form>
        <FormHeader>Search Weather</FormHeader>
        <Input type="text" placeholder="Enter City, State, or ZIP Code" />
        <SearchButton>Search</SearchButton>
      </Form>
    </>
  );
}
