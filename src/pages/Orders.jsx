import React from "react";
import { dummyShips } from "../api/ships";
import { dummyOrders } from "../api/orders";
import { OrderForm } from "../components";
import { Link } from "react-router-dom";

const Orders = () => {
    return (
        <div className="flex-col flex gap-4 justify-center items-center text-center">
            <p>Orders</p>
            <p>[Promotions, discounts, recommendations, etc. will go here]</p>
            
            <Link to='/addOrder'>
                <button type="button" className="btn-primary">Add Order</button>
            </Link>

            <p>[todo: list of past orders/invoices here]</p>
        </div>
    );
};

export default Orders;
