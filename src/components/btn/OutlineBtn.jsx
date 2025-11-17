import React from 'react';

const OutlineBtn = ({ type, title, icon, loading, disabled, onClick, className, iconClassName, textClassName }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={` 
                border rounded-[10px] px-4 h-[50px] flex items-center justify-center gap-2
                ${disabled ? 'border-[#eee]' : 'border-primary'} 
                ${className}
                `}
        >
            {icon && <img
                src={icon}
                className={`size-[20px] ${iconClassName}`}
            />}

            {title && <span className={`text-[14px] lg:text-[18px] font-sofia-medium text-white ${textClassName}`}>
                {title}
            </span>}

            {loading && <div className=''>
                ...
            </div>}

        </button>
    );
};

export default OutlineBtn;