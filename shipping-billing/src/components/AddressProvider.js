import React, {useState} from 'react'

const AddressContext = React.createContext(null);

function AddressProvider(props) {
    const [shippingAddress, setShippingAddress] = useState({});
  const [billingAddress, setBillingAddress] = useState({});

  const handleCopyAddress = () => {
    setBillingAddress(shippingAddress);
  };

  return (
    <AddressContext.Provider
      value={{
        shippingAddress,
        setShippingAddress,
        billingAddress,
        setBillingAddress,
        handleCopyAddress,
      }}
    >
      {props.children}
    </AddressContext.Provider>
  );
}

export default AddressProvider