import React from 'react';
import styled from 'styled-components';
import { Container } from '../globalStyles';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <HeroBackGround>
        <Container>
          <HeroContainer>
            <Heading>Lorem ipsum dolor sit amet consectetur</Heading>
            <SubTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SubTitle>
            <GetStarted to='/blog'>Leia mais!</GetStarted>
          </HeroContainer>
        </Container>
      </HeroBackGround>
    </>
  );
}

const HeroBackGround = styled.div`
  background-image: linear-gradient(
      360deg,
      #000000 0%,
      rgba(0, 0, 0, 0.54) 99.99%,
      rgba(0, 0, 0, 0.99) 100%
    ),
    url('https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 85vh;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 200px 0;
`;

const Heading = styled.h1`
  font-size: 3.5rem;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const GetStarted = styled(Link)`
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    transition: all 0.3s ease;
  }
`;

export default Home;
