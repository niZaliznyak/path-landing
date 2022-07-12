import { Button } from "../../../ui/Button";
import { Title } from "../../../ui/Title";
import person1 from './images/image 7.jpg';
import person2 from './images/image 8.jpg';
import person3 from './images/image 6.jpg';

export const IntroCard = () => {

    return (
        <div className="px-4 flex flex-col justify-center items-center md:flex-row">
            <div className="flex flex-col mt-8 md:mr-12">
                <Title>Getting interviews should be simple, fast, and fun. </Title>
                <p className="text-base font-poppins tracking-wide font-normal mb-8">
                    Path is a coach that gives you power over your own software developer job search.
                </p>
                <Button>Get Started</Button>
            </div>
            <div className="flex justify-center mt-8 space-x-4 w-full">
                <div className="w-full">
                    <img src={person1} alt="person_1" className="w-full"/>
                </div>
                <div className="flex flex-col justify-between w-full">
                    <img src={person2} alt="person_2" className="w-full"/>
                    <img src={person3} alt="person_3" className="w-full"/>
                </div>
            </div>
        </div>
    )
};