import styled from "styled-components";

export const ContactStyling = styled.main`
  padding: 2rem;
  h1{
    text-align: center;
  }
  .profile-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;

    .gatsby-image-wrapper img {
      margin: 0 auto;
    }
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    a{
      padding: 1rem 0;
      &:hover{
          opacity: .5;
          transform: scale(1.2);
        }
      img {
        padding-right: 1rem;
      }
    }
  }

  @media (min-width: 500px) {
    .profile-img-container {
      .gatsby-image-wrapper {
        width: 70%;
        img {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-evenly;

      .profile-img-container {
        .gatsby-image-wrapper {
          width: 60%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;
