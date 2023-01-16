import React from "react";
import { Nav } from "./Nav";
import { GlobalContextProvider } from "../context/GlobalContextProviser";
import styled from "styled-components";

const FooterStyling = styled.footer`
  padding: 0.5rem 0;
  background-color: #191919;
  p {
    color: white;
    text-align: center;
  }
`;

interface childrenProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: childrenProps) => {
  return (
    <GlobalContextProvider>
      <Nav />
      <>{children}</>
      {/* <main>{children}</main> */}
      <FooterStyling>
        <p>&copy; 2023</p>
      </FooterStyling>
    </GlobalContextProvider>
  );
};
