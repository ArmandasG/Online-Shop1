import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import AboutUsPage from './pages/AboutUsPage';
import ClothesPage from './pages/ClothesPage';
import ContactUsPage from './pages/ContactUsPage';
import CheckOutPage from './pages/CheckOutPage';
import Footer from './components/layout/Footer';
import SingleClothesPage from './pages/SingleClothesPage';
import FindUsPage from './pages/FindUsPage';
import WhatToKnow from './pages/WhatToKnow';
import JoinUsPage from './pages/JoinUsPage';
import ReadMore from './pages/ReadMore';
import CartInformation from './pages/CartInformation';
import { useItemsCtx } from './store/ItemsContextProvider';
import PleaseAddItems from './pages/PleaseAddItems';
import CartShipping from './pages/CartShipping';
import CartPayment from './pages/CartPayment';
import ThankYou from './pages/ThankYou';
import Feedback from './components/feedback/Feedback';

function App() {
  const { cartArr, navigate, shippingInformation } = useItemsCtx();
  return (
    <div className="bg-site bg-no-repeat bg-cover">
      <Feedback />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/clothes" element={<ClothesPage />} />
        <Route path="/clothes/:clothesUid" element={<SingleClothesPage />} />
        {cartArr.length > 0 ? 
          <Route path='/cart/information' element={<CartInformation />} /> :
          <>
            <Route path='/cart/information404' element={<PleaseAddItems />} /> 
            <Route path='/cart/information' element={ <Navigate to="/cart/information404" />} /> 
          </>  }
          { cartArr.length > 0 && shippingInformation.length > 0 ?
        <Route path="/cart/shipping" element={<CartShipping />} /> :
        <>
<Route path="/cart/information404" element={<PleaseAddItems />} /> 
<Route path="/cart/shipping" element={<Navigate to='/cart/information404' />} /> 
        </>
      }
        <Route path="/cart/payment" element={<CartPayment />} />
        <Route path='/thank-you' element={<ThankYou />} />
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
