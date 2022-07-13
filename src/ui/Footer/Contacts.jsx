import { ReactComponent as FacebookIcon } from './icons/FacebookIcon.svg';
import { ReactComponent as LinkedInIcon } from './icons/LinkedInIcon.svg';
import { ReactComponent as TwitterIcon } from './icons/TwitterIcon.svg';
import { ReactComponent as InstagramIcon } from './icons/InstagramIcon.svg';
import { ReactComponent as PathLogoWhite } from './icons/PathLogoWhite.svg';


export const Contacts = () => {

    return (
        <div className="space-y-10">
            <PathLogoWhite className="md:ml-4 mt-6"/>
            <p className="max-w-300p font-poppins text-base">Path is a coach that gives you power over your own software developer job search.</p>
            <div className="flex space-x-4">
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
        </div>
    )
};