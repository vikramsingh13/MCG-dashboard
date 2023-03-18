import React from 'react';
import ShipCard from '../components/ShipCard';
import { dummyShips } from '../api/ships';

const ShipList = () => {
    const ships = dummyShips.map(ship => {
        return <ShipCard key={ship['name']} name={ship['name']} image={ship['image']}/>
    });

  return (
    <div className=' flex justify-around gap-4 flex-wrap'>
      {
        ships
      }
    </div>
  )
}

export default ShipList;
