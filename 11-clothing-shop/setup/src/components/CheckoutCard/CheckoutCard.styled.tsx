import styled from "styled-components";

export const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const ListItem = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(52, 53, 99, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
`;

export const Label = styled.div`
  display: flex;
  img {
    border-radius: 10px;
    height: 90px;
    margin-right: 10px;
    object-fit: cover;
    width: 90px;
  }

  p {
    display: inline-block;
    font-size: 15px;
    font-weight: normal;
    height: 20px;
    margin: auto;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
    width: 90px;
  }
`;

export const Box = styled.div`
  align-items: center;
  font-size: 15px;
  font-weight: normal;
  justify-content: center;
  overflow: hidden;
  width: 90px;
`;


