import './App.css';
import { Route, Routes } from 'react-router';
import BasicDetails from './components/BasicDetails';
import ShippingAddress from './components/ShippingAddress';
import BillingAddress from './components/BillingAddress';
import Review from './components/Review';

function App() {
  return (
    <div className="App">

    {/* <ShippingAddress setStep={setStep} setShippingAddress={setShippingAddress} /> */}
    </div>

    
    // <Routes>
    //   <Route path='/basicdetails' element={<BasicDetails/>}/>
    //   <Route path='/shipping' element={<ShippingAddress/>}/>
    //   <Route path='/billing' element={<BillingAddress/>}/>
    //   <Route path='/review' element={<Review/>}/>
    // </Routes>
  );
}

export default App;
