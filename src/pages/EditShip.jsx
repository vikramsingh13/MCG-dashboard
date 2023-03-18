import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ShipForm } from "../components";

const EditShip = () => {
    const [submitted, setSubmitted] = useState(false);

    const location = useLocation();
    const { name } = location.state;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div>
            {!submitted && (
                <ShipForm
                    title={"Edit " + name}
                    submitName="Save"
                    handleSubmit={handleSubmit}
                />
            )}
            {submitted && (
                <div className="flex justify-center text-center items-center">
                    {name} has been updated!
                </div>
            )}
        </div>
    );
};

export default EditShip;
