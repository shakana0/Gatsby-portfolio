import styled from "styled-components";

export const CategoryNavStyling = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  .dropdown {
    width: 70%;
    margin-bottom: 2rem;
    
    button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      cursor: pointer;
      border: 1.5px solid #b30000;
      border-radius: 5px;
      background-color: #282829;
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

  @media (min-width: 500px){
    margin-left: 1rem;
    .dropdown{
        width: 40%;
       }
  }

  @media (min-width: 768px) {
    display: flex;
    /* flex-direction: row; */
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

  }
`;
