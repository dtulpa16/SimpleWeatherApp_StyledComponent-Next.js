import React from "react";

import {
  Form,
  FormHeader,
  Input,
  SearchButton,
} from "../../Styles/Styles";
import GlobalStyle from "../../Styles/GlobalStyles";
import { searchWeather } from "@/app/utils/actions/search";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Form action={searchWeather}>
        <FormHeader>Search Weather</FormHeader>
        <Input name="search" type="text" placeholder="Enter City, State, or ZIP Code" />
        <SearchButton>Search</SearchButton>
      </Form>
    </>
  );
}
