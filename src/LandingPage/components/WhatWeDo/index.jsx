import { Button } from "../../../ui/Button";
import { Title } from "../../../ui/Title";
import image from './pexels-visual-tag-mx-2566581 1.jpg';

export const WhatWeDo = () => {

    return (
        <div className="px-4 flex flex-col md:flex-row">
            <div className="flex flex-col justify-center mb-5 md:mr-12">
                <Title className="text-32 mb-4">What We Do</Title>
                <p className="text-base font-poppins tracking-wide font-normal mb-8">
                    Networking is more effective than cold applications, but how do you do it for dozens of companies?
                </p>
                <p className="text-base font-poppins tracking-wide font-normal mb-8">
                    We'll walk you through the process.
                </p>
                <Button>Start Here</Button>
            </div>
            <div className="w-full">
                <img src={image} alt="What We Do" className="w-full"/>
            </div>
        </div>
    )
};