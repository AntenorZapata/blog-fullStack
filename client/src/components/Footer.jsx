import React from 'react';
import styled from 'styled-components';
import { Container } from '../globalStyles';

function Footer() {
  return (
    <>
      <FooterContainer>
        <Container>
          <Text>Feito com ❤️ por Antenor Zapata </Text>
        </Container>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export default Footer;
