import styled from "styled-components";

export const CategoyStyling = styled.main`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-bottom: 4rem;
  }

  .conatiner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      width: 70%;
      margin-bottom: 3rem;
      text-decoration: none;
      color: white;

      article {
        border: 2px solid white;
        width: 100%;
        height: 390px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

        &:hover {
          background-color: #5e008029;
        }

        .gatsby-image-wrapper {
          overflow: visible;
          width: 80%;
          img {
            height: auto;
          }
        }

        /* img {
          width: 85%;
          height: auto;
        } */
      }
    }
  }

  @media (min-width: 500px) {
    .conatiner {
      a {
        width: 50%;
        article {
          height: 400px;
          img {
            /* width: 70%; */
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .conatiner {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
      a {
        width: 35%;
        article {
          height: 450px;
        }
      }
    }
  }
`;
