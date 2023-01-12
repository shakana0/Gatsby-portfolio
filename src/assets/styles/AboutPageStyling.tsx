import styled from "styled-components";

export const AboutPageStyling = styled.main`
  padding: 2rem;
  li {
    list-style: none;
  }

  .container {
    .skills {
      padding-top: 2rem;
      ul {
        padding: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        /* border: 1px solid #545454; */
        /* background-color: #5351512b; */
        background-color: #9393932b;
        li {
          padding: 0.5rem;
          margin: 0.5rem;
        }
      }
    }

    .education,
    .experience {
      padding: 1.5rem 0;
      box-sizing: border-box;
      div {
        border: none;
        /* border-bottom: 1px solid #545454; */
        border-bottom: 1px solid #7a7a7a;
        /* background-color: #5351512b; */
        background-color: #9393932b;
        padding: .8rem;
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
          /* border: 1px solid #545454; */
          /* min-width: 45%; */
          max-width: 180px;
          p {
            font-size: 0.8rem;
            color: #bdbdbd;
            /* padding-right: .3rem; */
          }
        }
        .job-description {
          padding: 1rem 0;
          line-height: 2;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      display: flex;
      justify-content: space-between;
      .skills {
        width: 20%;
        /* border: 1px solid white; */
        padding-top: 0;
        ul {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
          /* align-items: center; */

          li{
            padding-bottom: 2rem;
          }
        }

        h2 {
          margin-top: 0;
          text-align: center;
        }
      }
      .info {
        width: 70%;
        article{
          padding: 0 4rem 4rem 0;
        }
      }
    }
    .education,
    .experience {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h2 {
        /* display: block; */
        width: 100%;
      }
      div {
        width: 45%;
        margin: 1rem 0;
      }
    }
  }
`;
