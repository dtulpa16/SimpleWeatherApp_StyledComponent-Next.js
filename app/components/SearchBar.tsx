import React from "react";

import {
  Form,
  FormHeader,
  Input,
  SearchButton,
  SearchPageContainer,
} from "../Styles/Styles";
import GlobalStyle from "../Styles/GlobalStyles";
import { searchWeather } from "@/app/utils/actions/search";


export default function SearchBar() {
  return (
    <SearchPageContainer>
      <GlobalStyle />
      <Form action={searchWeather}>
        <FormHeader>Search Weather</FormHeader>
        <Input name="search" type="text" placeholder="Enter City, State, or ZIP Code" />
        <SearchButton>Search</SearchButton>
      </Form>
    </SearchPageContainer>
  );
}
