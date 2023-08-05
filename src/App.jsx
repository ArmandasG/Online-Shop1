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
import JoinUsPage from './pages/JoinUsPage';
import ReadMore from './pages/ReadMore';
import CartDelivery from './pages/CartDelivery';
import { useItemsCtx } from './store/ItemsContextProvider';
import PleaseAddItems from './pages/PleaseAddItems';

function App() {
  const { cartArr, navigate } = useItemsCtx();
  return (
    <div className="bg-site bg-no-repeat bg-cover">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/clothes" element={<ClothesPage />} />
        <Route path="/clothes/new" element={<AddClothesPage />} />
        <Route path="/clothes/:clothesUid" element={<SingleClothesPage />} />
        {cartArr.length > 0 ? <Route path='/cart/delivery' element={<CartDelivery />} /> : <Route path='/cart/delivery' element={<PleaseAddItems />} />}
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/find-us" element={<FindUsPage />} />
        <Route path="/what-to-know" element={<WhatToKnow />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/read-more" element={<ReadMore />} />

        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
