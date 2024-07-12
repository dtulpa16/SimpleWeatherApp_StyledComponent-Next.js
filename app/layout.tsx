import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./utils/registry";
import { Body, RootContainer } from "./Styles/Styles";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "WeatherBug",
  description: "Simple weather app created with Next.js & Styled Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
      <Body className="">
        <Navbar />
        <RootContainer>
          {children}
        </RootContainer>
      </Body>
      </StyledComponentsRegistry>
    </html>
  );
}
