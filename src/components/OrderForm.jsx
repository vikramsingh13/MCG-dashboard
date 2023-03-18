import React from "react";
import { dummyOrders } from "../api/orders";
import { dummyShips } from "../api/ships";

const OrderForm = ({ title, handleSubmit, submitName }) => {
    const sectionStyle = " p-1 m-1 [&>*]:p-1 [&>*]:m-1";

    return (
        <div className="order-form flex flex-col items-center justify-center text-center">
            <div className={sectionStyle}>
                <p>{title}</p>
            </div>
            <div className={sectionStyle}>
                <label>Select your ship:</label>
                <select name="ships">
                    {dummyShips.map((ship) => {
                        return (
                            <option value={ship["name"]} key={ship["name"]}>
                                {ship["name"]}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className={sectionStyle}>
                <label>Shipping address:</label>
                <input type="text" />
            </div>
            <div className={sectionStyle}>
                <label>Delivery address:</label>
                <input type="text" />
            </div>
        </div>
    );
};

export default OrderForm;
