import React from 'react';

const PrimaryBtn = ({ type, title, icon, loading, disabled, onClick, className, iconClassName, textClassName }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={` 
                rounded-[10px] px-4 h-[50px] flex items-center justify-center gap-2 cursor-pointer
                ${disabled ? 'bg-[#eee]' : 'bg-[#D49F12]'} 
                ${className}
                `}
        >
            {icon && <img
                src={icon}
                className={`size-[20px] ${iconClassName}`}
            />}

            {title && <span className={`text-[18px] font-sofia-medium text-white ${textClassName}`}>
                {title}
            </span>}

            {loading && <div className=''>
                ...
            </div>}

        </button>
    );
};

export default PrimaryBtn;