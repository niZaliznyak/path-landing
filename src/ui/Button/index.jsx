import cn from "classnames";

export const Button = (
    (
        {
            onClick,
            children,
            variant = "primary",
            className,
            isDisabled,
            form,
            type = "button"
        }
    ) => {
        const isPrimary = variant === "primary";
        const isLight = variant === "light";

        const classes = cn(
            "w-full font-medium text-sm w-32 h-12 flex justify-center items-center rounded",
            {
                "text-white bg-primary hover:bg-sky-500": isPrimary,
                "bg-white hover:bg-slate-200": isLight
            },
            className
        );
        return (
            <button
                form={form}
                disabled={isDisabled}
                type={type}
                className={classes}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
);