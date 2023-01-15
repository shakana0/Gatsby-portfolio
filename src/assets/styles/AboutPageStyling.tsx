import styled from "styled-components";

export const AboutPageStyling = styled.main`
  padding: 2rem;
  li {
    list-style: none;
  }
  h1{
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .skills-wrapper {
    .other-skills {
      margin-top: 3rem;
      ul {
        padding: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        background-color: #9393932b;
        border-bottom: 1px solid #7a7a7a;
        li {
          padding: 0.5rem;
          margin: 0.5rem;
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    .education,
    .experience {
      padding: 1.5rem 0;
      box-sizing: border-box;
      div {
        border: none;
        border-bottom: 1px solid #7a7a7a;
        background-color: #9393932b;
        padding: 0.8rem;
        margin: 1rem 0;

        h4 {
          margin: 0;
        }
        p {
          margin: 0;
          font-size: 0.8rem;
        }

        .date {
          display: flex;
          justify-content: space-between;
          max-width: 180px;
          p {
            font-size: 0.8rem;
            color: #bdbdbd;
          }
        }
        .job-description {
          padding: 1rem 0;
          line-height: 2;
        }
      }
    }
  }

  .skill-container {
    background-color: #b7abc4;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
    .skill {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 1rem;
      cursor: pointer;
      &:hover {
        p {
          opacity: 1;
        }
      }
      p {
        color: black;
        margin-top: 0;
        opacity: 0;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    .skills-wrapper {
      width: 30%;
      height: 70%;
      justify-content: space-evenly;
    }
    .container {
      width: 60%;
      /* justify-content: space-between; */      
      .info {
        article {
          padding: 0 2rem 2rem 0;
          p{
            margin: 0;
          }
        }
      }
      .experience{
        padding-bottom: 0;
      }
    }
    .education,
    .experience {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h2 {
        width: 100%;
      }
      div {
        width: 45%;
        margin: 1rem 0;
      }
    }
  }
`;
