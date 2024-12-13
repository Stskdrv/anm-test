import React from 'react'
import { IconType } from 'react-icons';

type ButtonProps = {
    title: string,
    id: string,
    leftIcon?: IconType,
    rightIcon?: IconType,
    containerClass: string,
};


const Button = ({
    title,
    id,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    containerClass,
}: ButtonProps) => {
    return (
        <button
            id={id}
            className={`
            group
            relative
            z-10
            w-fit
            cursor-pointer
            overflow-hidden
            rounded-full
            bg-violet-50
            px-7
            py-3
            text-black
            ${containerClass}
        `}
        >
            
            <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            {LeftIcon && <LeftIcon className="mr-2" />}
                <div>
                    {title}
                </div>
            {RightIcon && <RightIcon className="ml-2" />}
            </span>
        </button >
    )
}

export default Button;