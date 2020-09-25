import styled from 'styled-components';

export const ListCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 30%;
  margin-bottom: 25px;
`;

export const ListCardImage = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  object-fit: cover;
  height: 150px;
  max-height: 150px;
`;

export const ListCardTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
  padding: 5px 10px;
`;

export const ListCardDescription = styled.p`
  font-size: 10px;
  margin: 0;
  padding: 5px 10px;
`;
