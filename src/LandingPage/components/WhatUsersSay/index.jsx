import { Title } from "../../../ui/Title";
import image from './images/christina-wocintechchat-com-VOYQEi3uv70-unsplash 1.jpg';
import { Comment } from "./Comment";

export const WhatUsersSay = () => {

    return (
        <div className="flex flex-col items-center w-full bg-finished px-4 py-11 mt-24">
            <Title className="text-32 mb-6">What Path Users Say</Title>
            <div className="pb-6 md:flex md:items-center">
                <img src={image} alt="What Users Say" className="mb-6 md:mr-5" />
                <Comment author="Edith Lowe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit </Comment>
            </div>
        </div>
    )
};