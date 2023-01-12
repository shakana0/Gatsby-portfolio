import styled from "styled-components";

export const IndexStyling = styled.main`
  /* .bg-img-wrapper {
    display: grid;
    border: 2px solid red;
    overflow: visible;

    .gatsby-image-wrapper {
      grid-area: 1 / 1 / auto / auto;
      border: 2px solid red;

    }

    .content-wrapper {
      grid-area: 1 / 1 / auto / auto;
      position: relative;
      place-items: center;
      display: grid;
      h1{
        color: red;
      }
    }
  } */
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
     font-size: 1.3rem;
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
