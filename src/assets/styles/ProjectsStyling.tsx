import styled from "styled-components";

export const ProjectsStyling = styled.main`
  padding: 3rem 0;
  h1 {
    margin: 0 0 2rem 0;
    text-align: center;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
    a {
      color: white;
      text-decoration: none;
      width: 70%;
      /* border: 1px solid blue; */
      margin-bottom: 2rem;
    }

    article {
      padding: 3rem 2rem;
      border: 1px solid #8a8a8a;
      height: 260px;
      cursor: pointer;

      &:hover{
        background-color: #5e008029;
      }
      .gatsby-image-wrapper{
        overflow: visible;
        img{
          height: auto;
        }
      }

      /* picture {
        border: 2px solid white;
          width: 400px;
          height: 100px;
        source {
          width: 100%;
          height: 70%;
        }
      }

      img {
        width: 100%;
        /* height: auto; */
        /* height: 70%;
        padding-bottom: 2rem;
      }   */
    }
  }

  @media (min-width: 500px) {
    .container {
      padding: 0 3rem;
      a {
        width: 50%;
        margin: 2rem 0;
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      a {
        width: 25%;
        margin: 2rem 1rem;
      }
    }
  }
`;
