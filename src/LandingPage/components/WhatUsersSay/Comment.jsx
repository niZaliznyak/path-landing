import { ReactComponent as AuthorIcon } from "./icons/AuthorIcon.svg";
import { ReactComponent as StarIcon } from "./icons/Star.svg";

export const Comment = ({ author, children }) => {
    return (
        <div className="max-w-md">
            <div className="flex font-grotesk font-medium text-2xl mr-6 mb-4">
                <p className="text-5xl">“</p>
                <p>{children}</p>
            </div>
            <div className="flex items-center justify-start w-396p">
                <AuthorIcon />
                <p className="font-poppins font-medium ml-3">{author}</p>
                <div className="flex m-auto justify-around w-40">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
            </div>
        </div>
    )
};