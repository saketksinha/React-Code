import React,{useContext} from 'react'
import AddressContext from './AddressProvider'


function ShippingAddress() {

    const { shippingAddress, setShippingAddress, handleCopyAddress } =
    useContext(AddressContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setShippingAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
      };

  return (
    <div>
        
      <label>
        Address Line 1:
        <input name="addressLine1" value={shippingAddress.addressLine1} onChange={handleChange} />
      </label>
      <label>
        Address Line 2:
        <input name="addressLine2" value={shippingAddress.addressLine2} onChange={handleChange} />
      </label>
      <label>
        City:
        <input name="city" value={shippingAddress.city} onChange={handleChange} />
      </label>
      <label>
        State:
        <input name="state" value={shippingAddress.state} onChange={handleChange} />
      </label>
      <label>
        Zip Code:
        <input name="zipCode" value={shippingAddress.zipCode} onChange={handleChange} />
      </label>
      <label>
        <input type="checkbox" onChange={handleCopyAddress} />
        My billing address is the same as my shipping address
      </label>
    </div>
  );
}

export default ShippingAddress