import styled from "styled-components";

export const NotFoundPageStyling = styled.main`
  background-color: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    min-height: 40vh;
    width: 80%;
    a {
    font-size: 1.2rem;
    color: white;
  }
  }

  @media (min-width: 768px) {
    h3{
        padding: 0;
    }
  }
`;
