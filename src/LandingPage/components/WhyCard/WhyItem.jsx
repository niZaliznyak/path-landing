import cn from "classnames";

export const WhyItem = ({
    Icon,
    title,
    percent,
    description,
    className
}) => {
    return (
        <div
            className={cn(
                "max-w-396p flex flex-col justify-center text-32 h-388p font-poppins border border-primary rounded-lg px-8",
                className
            )}>
            {Icon && <Icon className="mb-10" />}
            <p className="mb-4">{title}</p>
            <p className="text-primary text-percent mb-4">
                <span className="font-albert font-bold">{percent}</span>
                <span>%</span>
            </p>
            <p>{description}</p>
        </div>
    )
};