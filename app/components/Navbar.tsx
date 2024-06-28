import React from "react";
import { NavbarContainer, Logo, SearchInput } from "../Styles/Styles";
import GlobalStyle from "../Styles/GlobalStyles";
import { searchWeather } from "../utils/actions/search";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <GlobalStyle />
      <NavbarContainer>
        <Logo>
          <Link href="/">WeatherBug</Link>{" "}
        </Logo>
        <form action={searchWeather}>
          <SearchInput
            name="search"
            type="text"
            placeholder="City, State, or ZIP Code"
          />
        </form>
      </NavbarContainer>
    </>
  );
}
