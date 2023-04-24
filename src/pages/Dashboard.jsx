import React, { useContext, useState, useEffect } from "react";
import UserContext from '../contexts/UserContext';


const Dashboard = () => {
    const user = useContext(UserContext);

    return (
        <div>
            MCG Dashboard
            <div>Welcome {user.username}</div>
            <div>
                <button onClick={() => user.signOut()}>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
