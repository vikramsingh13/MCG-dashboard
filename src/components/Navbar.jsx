import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <button
            title={title}
            type="button"
            onClick={customFunc}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    );
};

const handleClick = () => {};

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

    //handling and updating window resizing
    useEffect(() => {
        const handleScreenResize = () => {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener('resize', handleScreenResize);

        handleScreenResize();

        window.removeEventListener('resize', handleScreenResize);


    }, []);

    useEffect(() => {
        if(screenSize <= 900){
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton
                title="Menu"
                customFunc={() => {
                    setActiveMenu(!activeMenu);
                }}
                color="blue"
                icon={<AiOutlineMenu />}
            />

            <div className="flex">
                <NavButton
                    title="Cart"
                    customFunc={() => handleClick("cart")}
                    color="blue"
                    icon={<FiShoppingCart />}
                />
                <NavButton
                    title="Chat"
                    dotColor="#03c9d7"
                    customFunc={() => handleClick("chat")}
                    color="blue"
                    icon={<BsChatLeft />}
                />
                <NavButton
                    title="Notifications"
                    dotColor="#03c9d7"
                    customFunc={() => handleClick("notification")}
                    color="blue"
                    icon={<RiNotification3Line />}
                />
                <div
                    className="flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mt-6"
                    onClick={() => handleClick("userProfile")}
                >
                    <img src={avatar}
                        className="rounded-full w-8 h-8"
                    />
                    <p>
                        <span className="text-gray-400 text-14">Hi, </span> {' '} <span className="text-gray-400 font-bold ml-1 text-14">John</span>
                    </p>
                    <MdKeyboardArrowDown className="text-gray-400 text-14 mt-2" />
                </div>

                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}

            </div>
        </div>
    );
};

export default Navbar;
