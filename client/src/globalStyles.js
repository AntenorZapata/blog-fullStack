import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

		* {
			margin:0;
			padding: 0;
			box-sizing: border-box;
		}

		*:focus {
			outline: none;
		}

		body {
			background-color: #000;
			color: #fff;
		}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
  z-index: 1;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default GlobalStyle;
