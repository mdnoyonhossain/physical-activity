import './App.css';
import Activities from './components/Activities/Activities';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Activities></Activities>
      <Footer></Footer>
    </div>
  );
}

export default App;
