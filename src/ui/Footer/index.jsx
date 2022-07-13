import { Contacts } from "./Contacts";
import { ShortNav } from "./ShortNav";
import { Subscribe } from "./Subscribe";

export const Footer = () => {

    return (
       <div className="w-full bg-primary p-4 text-white space-y-10">
            <Contacts />
            <ShortNav />
            <Subscribe />
       </div>
    )
};