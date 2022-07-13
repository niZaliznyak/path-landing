import { Input } from "../Input";
import { Button } from "../Button";

export const Subscribe = () => {
    return (
        <div>
            <p className="font-bold text-base">Get Insights to Power up your Job Search</p>
            <p className="text-sm font-normal">Subscribe to the Path Newsletter</p>
            <div className="flex mt-9">
                <Input placeholder="Email"/>
                <Button children="Subscribe" variant="light" className="ml-2 mb-6" />
            </div>
        </div>
    )
};