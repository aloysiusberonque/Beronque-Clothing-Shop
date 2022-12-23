import styled from "styled-components";

type WrapperProps = {
  background: string;
};

type AddButtonProps = {
  isInCart: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  align-items: flex-end;
  background-size: 300px;
  background: ${(props) => props.background && `url(${props.background}) center no-repeat`};
  border-radius: 20px;
  box-shadow: 0 15px 20px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.01);
  display: grid;
  height: 340px;
  overflow: hidden;
  position: relative;
  width: 240px;
`;
("");

export const ButtonWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: "row";
`;
("");

export const AddButton = styled.div<AddButtonProps>`
  align-items: center;
  background: ${(props) => (props.isInCart ? "#E55336" : "#60c95d")};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: center;
  padding: 5px;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;

  :hover {
    transform: scale(1.2);
    transition: 1s;
  }

  p {
    color: white;
    font-size: 20px;
    margin: 0;
  }
`;

export const PlusButton = styled.div<AddButtonProps>`
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  justify-content: center;
  padding: 4px 12px;

  p {
    color: blue;
    font-size: 20px;
    margin: 0;
  }

  :hover {
    transform: scale(1.5);
    transition: 1s;
  }

`;

export const MinusButton = styled.div<AddButtonProps>`
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  justify-content: center;
  padding: 4px 12px;

  p {
    color: red;
    font-size: 20px;
    margin: 0;
  }

  :hover {
    transform: scale(1.5);
    transition: 1s;
  }

`;

export const QuantityContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: "row";
`;

export const QuantityButtonContainer = styled.div`
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: "row";
  justify-content: start;
  margin-left: 12px;
`;

export const TextContainer = styled.div`
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 10px;
  padding: 20px;
  width: 100%;
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
`;

export const SubTitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  font-weight: normal;
  margin: 0;
`;
