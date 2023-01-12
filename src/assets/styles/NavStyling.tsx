import styled from "styled-components";

export const NavStyling = styled.header`
  .menu-icon {
    font-size: 2.5rem;
    cursor: pointer;
    fill: white;
  }
  nav {
    background-color: #2a2a2a;

    .hide-menu {
      display: none;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 0 1rem 0;
      margin: 0;

      li {
        list-style: none;
        padding: 1rem 0;
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid transparent;
        transition: 0.2s ease;
        &:hover {
          border-bottom: 1px solid #d1d1d1;
          background-color: #14141476;
        }
        a {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          text-decoration: none;
          text-align: left;
        }
      }
    }
  }

  //media query
  @media (min-width: 768px) {
    .menu-icon {
      display: none;
    }
    nav {
      display: flex;
      justify-content: center;

      .hide-menu {
        display: flex;
        flex-direction: row;
        padding: 0;
        width: 60%;
      }
      li {
        width: 20%;
      }
    }
  }
`;
