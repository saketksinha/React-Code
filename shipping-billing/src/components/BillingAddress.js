import React,{useContext} from 'react'
import AddressContext from './AddressProvider'

function BillingAddress() {

    const { billingAddress } = useContext(AddressContext);

  return (
    <div>
      <h2>Billing Address</h2>
      <p>{billingAddress.addressLine1}</p>
      <p>{billingAddress.addressLine2}</p>
      <p>{billingAddress.city}, {billingAddress.state} {billingAddress.zipCode}</p>
    </div>
  );
}

export default BillingAddress