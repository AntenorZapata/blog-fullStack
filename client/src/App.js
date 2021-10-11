import GlobalStyle from './globalStyles';
import Routes from './routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
