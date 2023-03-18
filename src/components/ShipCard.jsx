import React from "react";

const ShipCard = ({ name, image }) => {
    const buttonStyle = "m-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ";
    return (
        <div className="flex justify-center">
            <div className=" block max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                    <img
                        className="rounded-t-lg"
                        src={"/images/" + image}
                        alt=""
                    />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {name}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <button
                        type="button"
                        className={buttonStyle + "  bg-green-500 "}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className={buttonStyle + " bg-red-500 "}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShipCard;
