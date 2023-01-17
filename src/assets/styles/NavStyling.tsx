import styled from "styled-components";

export const NavStyling = styled.header`
  .menu-icon {
    font-size: 2.5rem;
    cursor: pointer;
    fill: white;
  }
  nav {
    background-color: rgb(42, 42, 42);
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
        cursor: pointer;
        width: 100%;
        display: flex;
        align-items: center;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          text-decoration: none;
          transition: 0.2s ease;
          padding: 1.5rem 1rem;
          width: 100%;
          border-bottom: 1px solid transparent;
          &:hover {
            border-bottom: 1px solid #d1d1d1;
            background-color: #14141476;
          }
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
      }
      ul{
        flex-direction: row;
        padding: 0;
        width: 60%;
        li {
        width: 20%;
      }
      }
    }
  }
`;
