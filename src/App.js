import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Listings from './components/Listings/Listings';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Listings />
      </main>
      <Footer />
    </div>
  );
}

export default App;
