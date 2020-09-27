import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

export const CardImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  margin: 10px 0 0 15px;
`;
