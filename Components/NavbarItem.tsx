import React from "react";

interface NavbarItemProps {
    label: string;
    active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
    return (
        <div
            className={
                active
                    ? "text-white cursor-default"
                    : "text-gray-200 hover:text-gray-300 cursor-pointer transition flex items-center justify-center w-full"
            }
            
        >
            {label}
        </div>
    );
};

export default NavbarItem;
