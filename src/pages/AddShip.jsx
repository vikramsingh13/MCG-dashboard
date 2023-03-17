import React, { useState } from 'react'
import { ShipForm } from '../components';

const AddShip = () => {
    const [submitted, setSubmitted] = useState(false);;
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            {!submitted &&
            <ShipForm title="Add Ship" handleSubmit={handleSubmit}/>
            }

            {submitted && 
                <div className='flex justify-center text-center items-center'>Ship has been added!</div>
            }
        </div>
    )
}

export default AddShip;
