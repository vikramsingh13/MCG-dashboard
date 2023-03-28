import React, { useState } from 'react'
import { OrderForm } from '../components';

const AddOrder = () => {
    const [submitted, setSubmitted] = useState(false);

    const addOrder = (e) => {
        //todo
        //code to check data and add the order

        setSubmitted(true);
    }
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      {!submitted && <OrderForm title="New Order" submitName="Order" submitAction={addOrder} />}
      {submitted && <p>Order has been added.</p>}
    </div>
  )
}

export default AddOrder;
