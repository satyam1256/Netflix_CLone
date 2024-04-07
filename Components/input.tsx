import React from "react";

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
    return (
        <div className="relative">
            <label
                className="
                    absolute 
                    text-md
                    text-gray-600
                    duration-150 
                    transform 
                    -translate-y-1/2 
                    scale-75 
                    top-1/2 
                    left-6
                    z-10 
                    origin-[0] 
                    pointer-events-none 
                    select-none
                    pb-10
                    pt-10
                "
                htmlFor={id}
            >
                
            </label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                id={id}
                className="block rounded-md px-3 py-2 padding-bottom-10px w-full text-md bg-gray-800 border border-gray-400 focus:outline-none focus:border-indigo-500 text-white text-center"
                placeholder={label}
                style={{color: 'black', caretColor: 'white' ,minHeight:"40px"}}
            />
        </div>
    );
};

export default Input;
