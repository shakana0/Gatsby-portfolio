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
    section {
      padding-bottom: 2rem;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      a {
        text-decoration: none;
        margin: 1rem 0;
        button {
          display: flex;
          align-items: center;
          cursor: pointer;
          border: 1.5px solid #b30000;
          border-radius: 10px;
          background-color: #282829;
          padding: 1rem 1.4rem;
          color: white;
          font-weight: 700;

          &:hover {
            background-color: #1a1a1a;
          }
        }
      }
    }
    .mySwiper {
      padding-bottom: 3rem;
      .Swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .swiper-pagination{
        span{
        background-color: white;
      }
      }
    }

    .gatsby-image-wrapper {
      overflow: visible;
      img {
        height: auto;
        width: 100%;
      }
    }
    .technologies {
      margin-top: 2rem;
      padding: 0 1rem;
      h2{
        margin-bottom: 2rem;
      }
     ul{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 0;
      margin: 0;
     }
     li{
      list-style: none;
      padding: .8rem 1.4rem;
      border: 1.5px solid #b30000;
      border-radius: 10px;
      margin: 0 1rem 1rem 0;
     }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    article {
      width: 60%;
      section {
        a {
          margin: 2rem 0;
        }
      }
    }
  }
`;
