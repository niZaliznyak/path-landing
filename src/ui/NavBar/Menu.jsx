import React from 'react'
import { Button } from '../Button'

export default function Menu({ visible, onOverlayClick }) {
    if(!visible) {
        return null;
    }
    return (
        <div className="fixed w-screen h-full min-w-450p top-14 left-0  text-base font-medium">
            <div className="p-8 bg-finished">
                <ul className="space-y-9 ">
                    <li><a href={"#"}>Home</a></li>
                    <li><a href={"#"}>About Us</a></li>
                    <li><a href={"#"}>FAQs</a></li>
                </ul>
                <ul className="mt-12 space-y-9 mb-8">
                    <li><a href={"#"}>Log In</a></li>
                    <li className="-ml-4"><Button>Get Started</Button></li>
                </ul>
            </div>
            <div className="w-full h-full" onClick={onOverlayClick} />
        </div >
    )
}