import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, blue, pink);
`;

const HomeContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: both;
  text-align: center;
  max-width: 650px;
  opacity: 0;

  &:hover {
    background-color: #ffffff; 
    transition: background-color 0.3s ease;
  }
`;


const Heading = styled.h1`
  font-size: 2.5rem;
  color: blueviolet;
  margin-bottom: 20px;
  animation: ${fadeUp} 1s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: both;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
  animation: ${fadeUp} 1s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;
`;



const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Heading>THE MOVIE APP</Heading>
        <Description>
          Assignment4: an Application to demonstrate React Router, Query with pages. Please click on popular movies to find out.
        </Description>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
