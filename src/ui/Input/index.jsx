import cn from "classnames";

export const Input = ({ id, placeholder, className }) => {
    return (
       <input type="email" placeholder={placeholder} id={id} className={cn("h-12 font-medium text-black w-full rounded px-3", className)}/>
    )
};