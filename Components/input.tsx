// input.tsx

import React from 'react';

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
            {/* <label
                className="
                    absolute 
                    text-md
                    text-zinc-400
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
                "
                htmlFor={id}>
                {label}
            </label> */}
            <input
                onChange={onChange}
                value={value}
                type={type}
                id={id}
                className="
                    block
                    rounded-md
                    px-6
                    pt-8
                    pb-1
                    w-full
                    text-md
                    text-white
                    bg-neutral-700
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                    invalid:border-b-1
                "
                placeholder={label} // Use label as placeholder
            />
        </div>
    );
}

export default Input;
