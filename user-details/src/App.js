import './App.css';
import { Route, Routes } from 'react-router';
import Customer from './components/Customer';
import ShippingAddress from './components/ShippingAddress';
import BillingAddress from './components/BillingAddress';
import Review from './components/Review';

function App() {
  return (
    <Routes>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/shipping' element={<ShippingAddress/>}/>
      <Route path='/billing' element={<BillingAddress/>}/>
      <Route path='/review' element={<Review/>}/>
    </Routes>
  );
}

export default App;
