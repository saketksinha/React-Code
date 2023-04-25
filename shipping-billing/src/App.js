
import './App.css';
import AddressProvider from './components/AddressProvider';
import BillingAddress from './components/BillingAddress';
import ShippingAddress from './components/ShippingAddress';

function App() {
  return (
    <AddressProvider>
      <ShippingAddress />
      <BillingAddress />
    </AddressProvider>
  );
}

export default App;
