import React from "react";

import {
  Form,
  FormHeader,
  Input,
  SearchButton,
  SearchPageContainer,
  LocationSearchContainer,
  Button,
  Italic,
} from "../Styles/Styles";
import GlobalStyle from "../Styles/GlobalStyles";
import { searchWeather } from "@/app/utils/actions/search";
// import UseCurrentLocationButton from "./UseCurrentLocationButton";
import dynamic from "next/dynamic";
const UseCurrentLocationButton = dynamic(() => import('./UseCurrentLocationButton'), {
  ssr: false,
});
export default function SearchBar() {
  return (
    <>
      <GlobalStyle />
      <SearchPageContainer>
        <LocationSearchContainer>
          <Form action={searchWeather}>
            <FormHeader>Search Weather</FormHeader>
            <Input
              name="search"
              type="text"
              placeholder="Enter City, State, or ZIP Code"
            />
            <SearchButton>Search</SearchButton>
          </Form>
          <Italic>Or</Italic>
          <UseCurrentLocationButton />
        </LocationSearchContainer>
      </SearchPageContainer>
    </>
  );
}
