import React,{ Component  } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Search from './Search';
import Logo from './components/Logo';
import Footer from './components/Footer';

class App extends Component{
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
        <Search />
        <Logo />
        <Footer />
      </div>
    );
  }
}

export default App;