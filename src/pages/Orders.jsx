import React from "react";
import { dummyShips } from "../api/ships";
import { dummyOrders } from "../api/orders";
import { OrderForm } from "../components";
import { Link } from "react-router-dom";

const Orders = () => {
    return (
        <div>
            <p>Orders</p>
            <Link to='/addOrder'>
                <button type="button">Add Order</button>
            </Link>
        </div>
    );
};

export default Orders;
