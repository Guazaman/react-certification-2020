import styled from 'styled-components';

export const VideoDetailsContainer = styled.div`
  display: flex;
  margin: 50px;
`;

export const VideoDetailsCurrent = styled.div`
  width: 60%;
`;

export const VideoDetailsList = styled.div`
  width: 40%;
`;

export const IFrameVideo = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
`;

export const CurrentOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    height: fit-content;
    width: 30%;
    min-width: 30%;
    margin-top: 10px;
  }
`;

export const CurrentVideoDesc = styled.p`
  font-size: 16px;
`;

export const CurrentVideoTitle = styled.h1`
  margin: 10px 10px 10px 0;
  word-break: break-word;
  max-width: 75%;
`;
