import React from "react";
import { dummyShips } from "../api/ships";
import { dummyOrders } from "../api/orders";
import { OrderForm } from "../components";
import { Link } from "react-router-dom";

//invoice cards for list of invoices 
const InvoiceCard = ({invoice}) => {
    return (
        
        <div
            className="flex flex-row justify-between gap-4 items-center border-2 m-2"
        >
            <div>
                <span className=" font-bold capitalize">Invoice No.: </span>
                {invoice["invoiceNumber"]}
            </div>
            <div>
                <span className="">{invoice["invoiceDate"]}</span>
            </div>
            <div>
                <span className="">{invoice["invoiceTotal"]}</span>
            </div>
        </div>
    );
};

const Orders = () => {
    const dummyInvoices = [
        {
            invoiceNumber: "A246",
            invoiceDate: "01/08/2022",
            invoiceTotal: 150,
        },
        {
            invoiceNumber: "A247",
            invoiceDate: "01/08/2022",
            invoiceTotal: 150,
        },
        {
            invoiceNumber: "A248",
            invoiceDate: "01/08/2022",
            invoiceTotal: 150,
        },
    ];



    const invoices = dummyInvoices.map((invoice) => (
        <InvoiceCard invoice={invoice} key={invoice['invoiceNumber']}/>
    ));

    return (
        <div className="flex-col flex gap-4 justify-center items-center text-center">
            <p>Orders</p>
            <p>[Promotions, discounts, recommendations, etc. will go here]</p>

            <Link to="/addOrder">
                <button type="button" className="btn-primary">
                    Add Order
                </button>
            </Link>

            <div>{invoices}</div>
        </div>
    );
};

export default Orders;
