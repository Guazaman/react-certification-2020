/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundImage, NotFoundText } from './NotFound.styled';
import { NotFoundPNG } from '../../images';

const NotFoundPage = () => {
  return (
    <>
      <NotFoundImage src={NotFoundPNG} />
      <NotFoundText>Sorry, we couldn't find this Page.</NotFoundText>
      <Link to="/">
        <NotFoundText>Back To Home</NotFoundText>
      </Link>
    </>
  );
};

export default NotFoundPage;
