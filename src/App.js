import React ,{ Component } from 'react';
import { Navigate, Route , Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from "./components/Products"
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import DetailsPage from './components/DetailsPage';

class App extends Component{
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<DetailsPage />} />
        <Route path="/Products/Us" element={<AboutUs />} />
        <Route path="/*" element={<Navigate to="/product/5" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;