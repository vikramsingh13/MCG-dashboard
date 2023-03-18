import React from "react";

const ShipForm = ({title, handleSubmit, submitName}) => {
    

    const sectionStyle = " p-1 m-1 [&>*]:p-1 [&>*]:m-1";

    return (
        <form className="add-ship flex flex-col justify-center align-center text-center">
            <div><p>{title}</p></div>
            <div className={sectionStyle}>
                <div>
                    <p>1.1 General information</p>
                </div>
                <div>
                    <label>Shipowner</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Shipbuilder</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Hull no.</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>IMO no.</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Ship type</label>
                    <input name="" type="text" />
                </div>
            </div>

            <div className={sectionStyle}>
                <div>
                    <p>1.2 Principal particulars</p>
                </div>
                <div>
                    <label>Length overall</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Length between perpendiculars</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Breadth, moulded</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Depth, moulded</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Summer load line draught, moulded</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Deadweight at summer load line draught</label>
                    <input name="" type="text" />
                </div>
            </div>
            <div className={sectionStyle}>
                <div>
                    <p>1.3 Main engine</p>
                </div>
                <div>
                    <label>Manufacturer</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Type</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Maximum continuous rating (MCR)</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Limited MCR</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>SFC at 75% of MCR or 83% of MCR</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Number of sets</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Fuel type</label>
                    <input name="" type="text" />
                </div>
            </div>

            <div className={sectionStyle}>
                <div>
                    <p>1.4 Auxiliary engine</p>
                </div>
                <div>
                    <label>Manufacturer</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Type</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Maximum continuous rating (MCR)</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>SFC at 50% MCR</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Number of sets</label>
                    <input name="" type="text" />
                </div>
                <div>
                    <label>Fuel type</label>
                    <input name="" type="text" />
                </div>
            </div>
            <div className={sectionStyle}>
                <div>
                    <p>1.5 Ship speed</p>
                </div>
                <div>
                    <label>Ship speed</label>
                    <input name="" type="text" />
                </div>
            </div>

            <div className="">
                <button onClick={handleSubmit}
                className="hover:bg-blue-400 bg-blue-300 rounded-lg p-4"
                >{submitName && submitName} {!submitName && "Submit"}</button>
            </div>
        </form> //ends add-ship
    );
};

export default ShipForm;
