import styled from "styled-components";

export const IndexStyling = styled.main`
  .bgImg-wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
      padding: 0 1rem;
      text-align: center;
      font-size: 1.4rem;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
  }
  .gatsby-image-wrapper {
    width: 100%;
  }
  section {
    padding: 4rem 2rem;
    p {
      padding-top: 1rem;
    }
  }

  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .bgImg-wrapper{
      h1{
        font-size: 2rem;
      }
    }
    section {
      width: 90%;
    }
  }

  @media (min-width: 900px) {
    .bgImg-wrapper{  
      h1{
        font-size: 3.5rem;
        font-weight: 800;
      }
    }
  }
`;
