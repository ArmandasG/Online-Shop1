import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import AboutUsPage from './pages/AboutUsPage';
import ClothesPage from './pages/ClothesPage';
import ContactUsPage from './pages/ContactUsPage';
import CheckOutPage from './pages/CheckOutPage';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/clothes" element={<ClothesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
