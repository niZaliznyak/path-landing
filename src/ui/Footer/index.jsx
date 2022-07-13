import { Contacts } from "./Contacts";
import { ShortNav } from "./ShortNav";
import { Subscribe } from "./Subscribe";
import { Terms } from "./Terms";

export const Footer = () => {

    return (
        <div className="w-full flex flex-col items-center bg-primary p-4 text-white">
            <div className="w-full md:flex justify-between max-w-6xl space-y-10">
                <Contacts />
                <ShortNav />
                <div className="md:hidden">
                    <Terms />
                </div>
                <Subscribe />
            </div>
            <div className="hidden md:block w-full max-w-6xl">
                <Terms />
            </div>
        </div>
    )
};