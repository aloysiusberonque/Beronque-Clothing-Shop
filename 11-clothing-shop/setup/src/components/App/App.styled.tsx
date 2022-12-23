import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  justify-content: center;
  margin: 40px;
  row-gap: 20px;
`;

export const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  a {
    color: #bb7250;
    text-decoration: none;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
