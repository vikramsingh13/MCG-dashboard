import React, { useState } from 'react'
import { OrderForm } from '../components';

const AddOrder = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
    }
  return (
    <div>
      {!submitted && <OrderForm title="New Order" submitName="Order" handleSubmit={handleSubmit} />}
      {submitted && <p>Order has been added.</p>}
    </div>
  )
}

export default AddOrder;
