import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import AboutUsPage from './pages/AboutUsPage';
import ClothesPage from './pages/ClothesPage';
import ContactUsPage from './pages/ContactUsPage';
import CheckOutPage from './pages/CheckOutPage';
import Footer from './components/layout/Footer';
import AddClothesPage from './pages/AddClothesPage';
import SingleClothesPage from './pages/SingleClothesPage';
import FindUsPage from './pages/FindUsPage';
import WhatToKnow from './pages/WhatToKnow';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/clothes" element={<ClothesPage />} />
        <Route path="/clothes/new" element={<AddClothesPage />} />
        <Route path="/clothes/:clothesUid" element={<SingleClothesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/find-us" element={<FindUsPage />} />
        <Route path="/what-to-know" element={<WhatToKnow />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
