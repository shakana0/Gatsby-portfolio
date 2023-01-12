import styled from "styled-components";

export const SingleProjectStyling = styled.main`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-top: 0;
  }
  article {
    width: 70%;

    .gatsby-image-wrapper{
      overflow: visible;
        img{
          height: auto;
        }
    }

    img {
      /* width: 300px; */
      /* width: 100%;
      height: auto;
      margin-bottom: 1rem; */
    }
    p {
      margin-top: 3rem;
    }
  }

  @media (min-width: 768px) {
    article {
      width: 60%;
    }
  }
`;
