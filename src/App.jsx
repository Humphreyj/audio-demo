
import './styles/global.scss';
import Header from './components/Header';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
