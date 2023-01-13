import styled from "styled-components";

export const IndexStyling = styled.main`
  .bg-image-wrapper {
    min-height: 100vh;
  }
  .gatsby-image-wrapper {
    overflow: visible;
    height: fit-content;
    img {
      /* height: auto; */
      min-height: 100vh;
    }
  }
  .content-wrapper {
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
     margin-bottom: 0;
     font-size: 1.4rem;
    }
    p{
      margin: 4rem 0 0 0;
      text-align: center;
    }
    /* position: relative;
    place-items: center; */
  }
 

  @media (min-width: 500px) {
    /* .gatsby-image-wrapper {
    img{
      min-height: 100vh;
    }
  } */
    .content-wrapper {
      h1 {
        font-size: 3rem;
        text-align: center;
      }
      h1, p{
        text-shadow: 4px 5px 5px #050505;
      }
    }
    section {
      width: 90%;
    }
  }

  @media (min-width: 900px) {
    /* .bg-image-wrapper {
    min-height: 90vh;
  } */
    .content-wrapper {
      h1 {
        font-size: 3.5rem;
        font-weight: 800;
      }
    }
  }
`;
