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
  /* .bg-image-wrapper {
    overflow: visible;
    height: fit-content;
    fdj
  } */
  .gatsby-image-wrapper {
    overflow: visible;
    height: fit-content;
    /* border: 2px solid red; */

    div {
      height: fit-content;
    }
    img {
      height: auto;
      /* position: static; */
    }
  }
  .content-wrapper {
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    place-items: center;
    color: red;
  }

  /* .bgImg-wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      padding: 0 1rem;
      text-align: center;
      font-size: 1.4rem;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
  }
  .gatsby-image-wrapper {
    width: 100%;
  } */
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
    .bgImg-wrapper {
      h1 {
        font-size: 2rem;
      }
    }
    section {
      width: 90%;
    }
  }

  @media (min-width: 900px) {
    .bgImg-wrapper {
      h1 {
        font-size: 3.5rem;
        font-weight: 800;
      }
    }
  }
`;
