import cn from "classnames";

export const Title = ({ children, className }) => {
    const hasTextSize = className?.includes("text");

    return (
        <p className={cn(
            "font-medium mb-4",
            {
                "text-4xl": !hasTextSize,
            },
            className
        )}>
            {children}
        </p>
    )
};