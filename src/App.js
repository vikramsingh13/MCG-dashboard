import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FiSettings } from "react-icons/fi";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
    Dashboard,
    Orders,
    Calendar,
    AddShip,
    Stacked,
    Pyramid,
    ShipList,
    Kanban,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor,
    Line,
    EditShip,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
    const { activeMenu } = useStateContext();

    return (
        <div className="App">
            <Router>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div
                        className="fixed right-4 bottom-4"
                        style={{ zIndex: "1000" }}
                    >
                        <button
                            title="settings"
                            type="button"
                            className=" text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                            style={{ background: "blue", borderRadius: "50%" }}
                        >
                            <FiSettings />
                        </button>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                            activeMenu ? "md:ml-72" : "flex-2"
                        }`}
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>

                        <div className="">
                            <Routes>
                                {/* dashboard  */}
                                <Route path="/" element={<Dashboard />} />
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />

                                {/* pages  */}
                                <Route path="/orders" element={<Orders />} />
                                <Route
                                    path="/addShip"
                                    element={<AddShip />}
                                />
                                <Route
                                    path="/editShip"
                                    element={<EditShip />}
                                />
                                <Route path="/shipList" element={<ShipList />} />

                                {/* apps  */}
                                <Route path="/kanban" element={<Kanban />} />
                                <Route path="/editor" element={<Editor />} />
                                <Route
                                    path="/calendar"
                                    element={<Calendar />}
                                />
                                <Route
                                    path="/color-picker"
                                    element={<ColorPicker />}
                                />

                                {/* charts  */}
                                <Route path="/line" element={<Line />} />
                                <Route path="/area" element={<Area />} />
                                <Route path="/bar" element={<Bar />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route
                                    path="/financial"
                                    element={<Financial />}
                                />
                                <Route
                                    path="/color-mapping"
                                    element={<ColorMapping />}
                                />
                                <Route path="/pyramid" element={<Pyramid />} />
                                <Route path="/stacked" element={<Stacked />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
