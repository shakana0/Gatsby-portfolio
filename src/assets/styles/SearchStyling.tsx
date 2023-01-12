import styled from "styled-components";

export const SearchStyling = styled.nav`
  background-color: #343444;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  padding: 1rem 0;

  .dropdown {
    width: 70%;
    margin-bottom: 2rem;
    

    button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      /* padding: 0 1rem; */
      cursor: pointer;
      border: 1.5px solid #b30000;
      border-radius: 5px;
      background-color: #282829;
      padding: 0.3rem 0;

      &:hover {
        background-color: #1a1a1a;
      }

      .category-icon {
        font-size: 2rem;
        fill: white;
      }
      p {
        font-size: 0.9rem;
        font-weight: 600;
        margin: 0;
        color: white;
      }
    }
    .hide-menu {
      display: none;
    }

    ul {
      border: 1px solid #b30000;
      border-top: none;
      padding: 0;
      margin: 0;

      li {
        padding: 1rem;
        list-style: none;
        border: 1px solid #b30000a8;
        display: flex;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background-color: #0e0e258a;
        }

        a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
        }
      }
    }
  }

  .searchbar {
    width: 70%;
    display: flex;
    align-items: center;
    border: 1.5px solid #b30000;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 0.5rem;
    input {
      width: 100%;
      background-color: transparent;
      border: none;
      padding: 0.8rem 0.4rem;
      color: white;
      font-size: 0.9rem;
      font-weight: 600;

      ::placeholder {
        color: white;
      }
      &:focus {
        outline: none;
      }
    }

    .search-icon {
      transition: 0.2s ease;
      cursor: pointer;
      font-size: 1.8rem;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 3rem;
    
    .dropdown {
      width: 20%;
      margin: 0;

      ul{
        /* position: absolute; */
        /* width: 15%; */
      }
    }

    .searchbar {
      width: 25%;
    }
  }
`;
