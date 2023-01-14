import styled from "styled-components";

export const SingleProjectStyling = styled.main`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin: 0;
  }
  article {
    width: 70%;
    margin-top: 3rem;

    .mySwiper {
      /* border: 2px solid yellow; */
      .Swiper-slide {
        /* border: 2px solid blue; */
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .gatsby-image-wrapper {
      overflow: visible;
      img {
        height: auto;
        width: 100%;
      }
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
